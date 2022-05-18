import { useState, useEffect } from "react";
import { TimePicker } from "antd";
import moment from "moment";

function range(start, end) {
  let result = [];
  for (var i = start; i <= end; i++) {
    result.push(i);
  }
  return result;
}

const ArmingTime = (props) => {
  const {
    value,
    form,
    data,
    prevHour,
    prevMin,
    nextHour,
    nextMin,
    timelineIndex,
    timelinersLength,
  } = props;
  const [startTime, setStartTime] = useState(value.startTime);
  const [endTime, setEndTime] = useState(value.endTime);

  const onChangeStartTime = (value) => {
    setStartTime(value);
    form.setFieldsValue({
      time: {
        ...form.getFieldValue("time"),
        startTime: value,
      },
    });
  };
  const onChangeEndTime = (value) => {
    setEndTime(value);
    form.setFieldsValue({
      time: {
        ...form.getFieldValue("time"),
        endTime: value,
      },
    });
  };
  const disabledStartHours = () => {
    let disabledHours = range(0, 23);
    const _endTime = moment(endTime).format("HH:mm").split(":");
    if (timelineIndex === 0) {
      disabledHours.splice(0, parseInt(_endTime[0]) + 1);
    } else {
      disabledHours.splice(prevHour, parseInt(_endTime[0]) - prevHour + 1);
    }
    return disabledHours;
  };
  const disabledStartMinutes = (value) => {
    const _endTime = moment(endTime).format("HH:mm").split(":");
    let disabledMins = [];
    if (value === prevHour) {
      disabledMins = range(0, 59).splice(0, prevMin + 1);
    }
    if (value === parseInt(_endTime[0])) {
      disabledMins = range(0, 59).splice(_endTime[1], 59);
    }
    return disabledMins;
  };
  const disabledEndHours = () => {
    let disabledHours = range(0, 23);
    const _startTime = moment(startTime).format("HH:mm").split(":");
    if (timelineIndex === timelinersLength - 1) {
      disabledHours.splice(parseInt(_startTime[0]), 59);
    } else {
      disabledHours.splice(
        parseInt(_startTime[0]),
        nextHour - parseInt(_startTime[0]) + 1
      );
    }
    return disabledHours;
  };
  const disabledEndMinutes = (value) => {
    const _startTime = moment(startTime).format("HH:mm").split(":");
    let disabledMins = [];
    if (value === nextHour) {
      disabledMins = range(0, 59).splice(nextMin, 59);
    }
    if (value === parseInt(_startTime[0])) {
      disabledMins = range(0, 59).splice(0, parseInt(_startTime[1]) + 1);
    }
    return disabledMins;
  };
  return (
    <>
      <TimePicker
        onChange={onChangeStartTime}
        defaultOpenValue={moment(startTime, "HH:mm")}
        value={startTime}
        placeholder="请选择时间"
        format={"HH:mm"}
        disabledHours={disabledStartHours}
        disabledMinutes={disabledStartMinutes}
      />
      <span style={{ margin: "0px 8px" }}>至</span>
      <TimePicker
        onChange={onChangeEndTime}
        defaultOpenValue={moment(endTime, "HH:mm")}
        value={endTime}
        placeholder="请选择时间"
        format={"HH:mm"}
        disabledHours={disabledEndHours}
        disabledMinutes={disabledEndMinutes}
      />
    </>
  );
};

export default ArmingTime;
