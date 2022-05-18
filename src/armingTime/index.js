import React, { Component } from "react";
import { Checkbox, Button, Popconfirm, Icon, message } from "antd";
import Slider from "./Slider";
import _ from "lodash";
import "../index.css";

class ArmingTimeNew extends Component {
  state = {
    days: [
      { day: "周一", timelines: [], checked: false, delete: false },
      { day: "周二", timelines: [], checked: false, delete: false },
      { day: "周三", timelines: [], checked: false, delete: false },
      { day: "周四", timelines: [], checked: false, delete: false },
      { day: "周五", timelines: [], checked: false, delete: false },
      { day: "周六", timelines: [], checked: false, delete: false },
      { day: "周日", timelines: [], checked: false, delete: false },
    ],
    indeterminate: false, //控制CheckBoxAll的样式
    checkAll: false,
  };

  getDays = (time_sliders, dayIndex) => {
    let days = this.state.days;
    const index = time_sliders.findIndex((slider) => slider.border === true);
    if (index > -1) {
      days[dayIndex].delete = true;
    } else {
      days[dayIndex].delete = false;
    }
    days[dayIndex].timelines = time_sliders;
    this.setState({
      days,
    });
  };

  selectAll = (e) => {
    let days = this.state.days;
    days.map((day) => {
      if (e.target.checked && !day.checked) {
        day.checked = true;
      }
      if (!e.target.checked) {
        day.checked = false;
      }
    });
    this.setState({
      days,
      indeterminate: false,
      checkAll: e.target.checked,
    });
  };

  selectSingle = (index) => {
    let days = this.state.days;
    let indeterminate = false;
    let checkAll = false;
    days[index].checked = !days[index].checked;
    days.map((day) => {
      if (day.checked) {
        indeterminate = true;
      }
    });
    if (!days.find((day) => !day.checked)) {
      indeterminate = false;
      checkAll = true;
    }
    this.setState({
      days,
      indeterminate,
      checkAll,
    });
  };

  batchDel = () => {
    let days = this.state.days,
      del = false;
    days.map((day) => {
      if (day.checked) {
        del = true;
        day.timelines = [];
        day.checked = false;
      }
    });
    if (!del) {
      message.error("请先选择一个数据");
    }
    this.setState({
      days,
      indeterminate: false,
      checkAll: false,
    });
  };

  save = () => {};

  render() {
    const { days, indeterminate, checkAll } = this.state;
    return (
      <>
        <div className="rc-batch-operation">
          <Popconfirm
            title="确定批量删除吗"
            onConfirm={this.batchDel}
            okText="确定"
            cancelText="取消"
          >
            <a className="rc-batch-delete">
              <Icon className="rc-icon" type="delete" />
              <span>批量删除</span>
            </a>
          </Popconfirm>
        </div>
        <div className="rc-table">
          <div className="rc-header">
            <Checkbox
              className="rc-checkbox"
              indeterminate={indeterminate}
              checked={checkAll}
              onChange={this.selectAll}
            ></Checkbox>
            <div className="rc-date">日期</div>
            <div className="rc-timeline-header">时间段</div>
            <div className="rc-action">操作</div>
          </div>
          {days.map((item, i) => {
            return (
              <Slider
                key={item.day}
                day={item}
                selectSingle={this.selectSingle}
                dayIndex={i}
                getDays={this.getDays}
              />
            );
          })}
        </div>
        <div className="rc-save">
          <Button type="primary" onClick={this.save}>
            保存
          </Button>
        </div>
      </>
    );
  }
}

export default ArmingTimeNew;
