import React, { Component, createRef } from 'react'
import { Checkbox, Popover, Popconfirm } from 'antd';
import addEventListener from 'rc-util/lib/Dom/addEventListener';
import Track from './Track';
import CopyContainer from './CopyContainer'
import DetailModal from './DetailModal'
import { coordinateToTime } from './coordinateToTime';
import moment from 'moment'
import _ from 'lodash'
import "../index.css"

function range(start, end) {
  const result = []
  for(var i = start; i <= end; i++) {
    result.push(i)
  }
  return result
}

function pauseEvent(e) {
  e.stopPropagation();
  e.preventDefault();
}
class Slider extends Component {
  constructor(props) {
    super()
    this.state = {
      coincide: false,
      copyVisible: false,
      timelineIndex: null,
      visible: false,
    }
  }

  onMouseDown = (e) => {
    if (e.button !== 0) { return; }
    const position = e.pageX;
    this.onStart(position);
    this.addDocumentEvents('mouse');
    pauseEvent(e);
  }

  onStart = (position) => {
    const { day } = this.props
    const value = position - this.getSliderStart();
    this.offset = value; //当前画线的offset
    this.startPosition = position; //当前画线开始的位置
    this.index = day.timelines.length //当前画线的index
    let coincide = false;
    if (!_.isEmpty(day.timelines)) {
      //处理条重合
      day.timelines.map(slider => {
        if(slider.offset < value && slider.offset + slider.length > value) {
          coincide = true
        }
      })
    }
    this.setState({
      coincide
    })
  }

  addDocumentEvents = () => {
    this.onMouseMoveListener = addEventListener(document, 'mousemove', this.onMouseMove);
    this.onMouseUpListener = addEventListener(document, 'mouseup', this.end);
  }

  onMouseMove = (e) => {
    pauseEvent(e);
    const position = e.pageX;
    const { coincide } = this.state
    const { day, getDays, dayIndex } = this.props;
    if(coincide) return
    let length = position - this.startPosition, time_sliders = day.timelines;
    // 当画线超过slider总长度时
    if(this.offset + length >= 720) {
      length = 719.5 - this.offset
    }
    //限制线重合
    day.timelines.map((slider) => {
      if(this.offset < slider.offset && this.offset + length > slider.offset) {
        length = slider.offset - this.offset - 1
      }
    })
    const { startTime, endTime, startHour, startMin, endHour, endMin } = coordinateToTime(this.offset, this.offset + length)
    time_sliders[this.index] = {
      offset: this.offset,
      length,
      startTime,
      endTime,
      startHour,
      startMin,
      endHour,
      endMin,
      showTime: true,
    }
    //过滤 length <=0的slider
    time_sliders = time_sliders.filter(slider => slider.length > 0)
    // time_sliders.sort(function (a, b) {
    //   return a.offset - b.offset;
    // }); //排序，方便限制modal的时间选择
    getDays(time_sliders, dayIndex)
    // this.setState({
    //   timelines: time_sliders,
    //   toolTip: false
    // })
  }

  end = () => {
    const { day, getDays, dayIndex } = this.props;
    let time_sliders = day.timelines;
    const index = time_sliders.findIndex(slider => slider.showTime)
    if(index > -1) {
      time_sliders[index].showTime = false
    }
    getDays(time_sliders, dayIndex)
    // removeEvents
    this.onMouseMoveListener.remove();
    this.onMouseUpListener.remove();
  }

  //获取slider的位置-left
  getSliderStart() {
    const slider = this.refs.slider;
    const rect = slider.getBoundingClientRect();
    return rect.left;
  }

  getSliderLength() {
    const slider = this.refs.slider;
    if (!slider) {
      return 0;
    }
    return slider.clientWidth;
  }

  //复制
  handleCopySave = (copyIndexs) => {
    const { day, getDays } = this.props;
    copyIndexs.map(index => {
      getDays(day.timelines, index)
    })
    this.setState({
      copyVisible: false,
    });
  };

  //关闭复制窗口
  handleCopyClose = () => {
    this.setState({
      copyVisible: false,
    });
  };

  //控制复制弹窗是否显示
  handleCopyVisible = (copyVisible) => {
    const { day } = this.props;
    if (_.isEmpty(day.timelines)) return;
    this.setState({
      copyVisible,
    });
  };

  changeTimeLine = (timelineIndex) => {
    const { day, getDays, dayIndex } = this.props;
    let time_sliders = day.timelines
    time_sliders.map(slider => {
      if(slider.border) slider.border = false
    })
    time_sliders[timelineIndex].border = true
    getDays(time_sliders, dayIndex)
    this.setState({
      timelineIndex,
      visible: true
    })
  }

  handleDelete = () => {
    const { timelineIndex } = this.state;
    const { day, dayIndex, getDays } = this.props;
    if (_.isEmpty(day.timelines) || timelineIndex === null) return;
    let time_sliders = day.timelines;
    time_sliders.splice(timelineIndex, 1);
    getDays(time_sliders, dayIndex);
    this.setState({
      timelineIndex: null,
    });
  }

  //弹窗点击保存
  handleOk = (value) => {
    value.validateFields((err, values) => {
      if (!err) {
        const { timelineIndex } = this.state;
        const { day, dayIndex, getDays } = this.props;
        let time_sliders = day.timelines;
        const startTime = moment(values.time.startTime).format("HH:mm");
        const endTime = moment(values.time.endTime).format("HH:mm");
        const startTimeString = startTime.split(':')
        const endTimeString = endTime.split(':')
        const startHour = parseInt(startTimeString[0]);
        const startMin = parseInt(startTimeString[1]);
        const endHour = parseInt(endTimeString[0]);
        const endMin = parseInt(endTimeString[1]);
        const offset = (startHour * 60 + startMin) / 2
        const length = (endHour * 60 + endMin) / 2 - offset
        time_sliders[timelineIndex] = {
          ...time_sliders[timelineIndex],
          offset,
          length,
          startTime,
          endTime,
          startHour,
          startMin,
          endHour,
          endMin,
          duration: values.duration ? values.duration : undefined,
          threshold: values.threshold ? values.threshold : undefined,
        }
        getDays(time_sliders, dayIndex);
        this.setState({
          visible: false,
        });
      }
    });
  };

  //弹窗关闭
  handleCancel = () => {
    this.setState({
      visible: false,
    });
  };
  render() {
    const { day, dayIndex, selectSingle } = this.props;
    const { copyVisible, timelineIndex, visible } = this.state;
    return (
      <div className='rc-day'>
        <Checkbox checked={day.checked} className="rc-checkbox" onChange={() => selectSingle(dayIndex)} />
        <div className="rc-date">{day.day}</div>
        <div className="rc-timeline">
          <div className='rc-time'>
            {range(0, 24).map(item => {
              return (
                <div className='rc-hour' key={item}>
                  <span>{item}</span>
                  <i className="rc-line"></i>
                </div>
              )
            })}
          </div>
          <div
            ref="slider"
            onMouseDown={this.onMouseDown}
            className="rc-slider"
          >
            {_.get(day, 'timelines').map((slider, i) => {
              return (
                <Track changeTimeLine={this.changeTimeLine} key={i} 
                  index={i} slider={slider}
                className="rc-slider-track" offset={slider.offset} length={slider.length}/>
              )
            })}
          
          </div>
        </div>
        <div className='rc-action'>
          <Popover
            content={
              <CopyContainer
                dayIndex={dayIndex}
                handleCopySave={this.handleCopySave}
                handleCloseCopy={this.handleCopyClose}
              />
            }
            title="复制到..."
            trigger="click"
            visible={copyVisible}
            onVisibleChange={this.handleCopyVisible}
          >
            <a
              className={_.isEmpty(day.timelines) ? "disabled" : "rc-copy"}
              style={{ marginLeft: 0 }}
            >
              复制
            </a>
          </Popover>
          <Popconfirm
            title="确定删除吗"
            onConfirm={this.handleDelete}
            okText="确定"
            cancelText="取消"
          >
            <a className={_.isEmpty(day.timelines) || !day.delete ? "disabled" : 'rc-del'}>删除</a>
          </Popconfirm>
        </div>
        <DetailModal
          visible={visible}
          handleCancel={this.handleCancel}
          handleOk={this.handleOk}
          day={day}
          timelineIndex={timelineIndex}
        />
      </div>
      
    )
  }
}

export default Slider;