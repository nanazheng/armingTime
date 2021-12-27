import { Tooltip } from 'antd'

const Track = ({
  className,
  offset,
  length,
  changeTimeLine,
  index,
  slider,
}) => {
  const style = {
    visibility: "visible",
    left: offset + "px",
    width: length + "px",
  };
  if (slider.border) {
    style.height = "14px";
    style.border = "1px dotted rgb(34 103 0)";
  }
  return (
    <div
      onClick={() => changeTimeLine(index)}
      className={className}
      style={style}
    >
      {/* <Tooltip title={<span>{slider.startTime} - {slider.endTime}</span>} defaultVisible={!slider.time}>
        <span className="rc-showtime" style={{width: length, height: 14,}}></span>
      </Tooltip> */}
      {slider.showTime && (
        <div style={{ position: "relative" }}>
          <Tooltip title={slider.startTime} defaultVisible={true}>
            <span className='rc-track-time' style={{ left: 0 }}></span>
          </Tooltip>
          <Tooltip title={slider.endTime} defaultVisible={true}>
            <span className='rc-track-time' style={{ left: length - 1 }}></span>
          </Tooltip>
        </div>
      )}
      
      
    </div>
  );
};

export default Track;
