import { useState, useEffect } from "react";
import { Button, Modal, Descriptions } from "antd";
import { coordinateToTime } from "./coordinateToTime";
import FormContainer from "./FormContainer";
import _ from "lodash";

function DetailModal(props) {
  const { visible, handleOk, handleCancel, day, timelineIndex } = props;
  const time_liners = day.timelines;
  const selectedTimeline = time_liners[timelineIndex];
  const startTime = selectedTimeline?.startTime;
  const endTime = selectedTimeline?.endTime;
  const [updateValue, setUpdateValue] = useState(null);
  const [prevHour, setPrevHour] = useState("");
  const [prevMin, setPrevMin] = useState("");
  const [nextHour, setNextHour] = useState("");
  const [nextMin, setNextMin] = useState("");

  useEffect(() => {
    if (timelineIndex === null || !visible) return;
    //提取当前时间条的上一个时间条的endTime和下一个时间条的startTime
    const prevIndex = timelineIndex - 1 >= 0 ? timelineIndex - 1 : undefined;
    const nextIndex =
      timelineIndex + 1 < time_liners.length ? timelineIndex + 1 : undefined;
    if (prevIndex !== undefined) {
      setPrevHour(time_liners[prevIndex].endHour);
      setPrevMin(time_liners[prevIndex].endMin);
    }
    if (nextIndex !== undefined) {
      setNextHour(time_liners[nextIndex].startHour);
      setNextMin(time_liners[nextIndex].startMin);
    }
  }, [day, timelineIndex, visible]);

  return (
    <Modal
      title="修改时间"
      visible={visible}
      footer={
        <Button type="primary" onClick={() => handleOk(updateValue)}>
          保存
        </Button>
      }
      onCancel={handleCancel}
      destroyOnClose
    >
      <FormContainer
        categoryName=""
        setForm={(form) => {
          setUpdateValue(form);
        }}
        startTime={startTime}
        endTime={endTime}
        prevHour={prevHour}
        prevMin={prevMin}
        nextHour={nextHour}
        nextMin={nextMin}
        timelineIndex={timelineIndex}
        timelinersLength={time_liners.length}
        data={selectedTimeline}
      />
    </Modal>
  );
}

export default DetailModal;
