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
      <Form {...formItemLayout} className="login-form">
        <Form.Item label="布防时间">
          {getFieldDecorator("time", {
            rules: [{ required: true, message: "" }],
            initialValue: {
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
      </Form>
    </div>
  );
}

export default Form.create()(FormContainer);
