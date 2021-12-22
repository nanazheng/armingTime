import React from 'react';

const Track = ({className, offset, length, changeTimeLine, index, slider}) => {
  const style = {
    visibility: 'visible',
    left: offset + 'px',
    width: length + 'px',
  };
  if(slider.border) {
    style.height = "14px"
    style.border = "1px dotted rgb(34 103 0)"
  }
  return <div onClick={() => changeTimeLine(index)} className={className} style={style} />;
};

export default Track;
