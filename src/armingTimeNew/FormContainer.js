import { useEffect, useState } from "react";
import { Form, InputNumber, TimePicker } from "antd";
import ArmingTime from "./ArmingTime";
import moment from "moment";
import _ from "lodash";

const formItemLayout = {
  labelCol: { span: 5 },
  wrapperCol: { span: 16 },
};

function FormContainer(props) {
  const {
    startTime,
    endTime,
    form,
    prevHour,
    prevMin,
    nextHour,
    nextMin,
    timelineIndex,
    timelinersLength,
    data,
  } = props;
  const { getFieldDecorator } = form;

  useEffect(() => {
    props.setForm(props.form);
  }, []);

  return (
    <div>
      <Form
        {...formItemLayout}
        /* onSubmit={handleSubmit} */ className="login-form"
      >
        <Form.Item label="布防时间">
          {getFieldDecorator("time", {
            rules: [{ required: true, message: "" }],
            initialValue: {
              // startTime: startTime,
              // endTime: endTime,
              startTime: moment(startTime, "HH:mm"),
              endTime: moment(endTime, "HH:mm"),
            },
          })(
            <ArmingTime
              form={form}
              data={data}
              prevHour={prevHour}
              prevMin={prevMin}
              nextHour={nextHour}
              nextMin={nextMin}
              timelineIndex={timelineIndex}
              timelinersLength={timelinersLength}
            />
          )}
        </Form.Item>
        <Form.Item label="持续时间">
          {getFieldDecorator("duration", {
            // rules: [{ required: true, message: "请输入持续时间" }],
            initialValue: data.duration ?? null,
          })(<InputNumber min={1} suffix="秒" />)}
          <span style={{ marginLeft: "8px" }}>秒</span>
        </Form.Item>
        <Form.Item label="灵敏度" help="数值为0~100，数值越大灵敏度越高。">
          {getFieldDecorator("threshold", {
            // rules: [{ required: true, message: "请输入灵敏度" }],
            initialValue: data.threshold ?? null,
          })(<InputNumber min={0} max={100} />)}
        </Form.Item>
      </Form>
    </div>
  );
}

export default Form.create()(FormContainer);
