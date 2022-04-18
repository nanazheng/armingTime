import { Component } from "react";
import { Button, Checkbox, Row, Col } from "antd";
import _ from "lodash";

class CopyContent extends Component {
  state = {
    indeterminate: true,
    checkAll: false,
    copyDays: [
      {
        day: "周一",
        checked: false,
      },
      {
        day: "周二",
        checked: false,
      },
      {
        day: "周三",
        checked: false,
      },
      {
        day: "周四",
        checked: false,
      },
      {
        day: "周五",
        checked: false,
      },
      {
        day: "周六",
        checked: false,
      },
      {
        day: "周日",
        checked: false,
      },
    ],
  };

  onCheckAllChange = (value) => {
    let copyDays = this.state.copyDays;
    copyDays.map((item) => {
      if (value.target.checked && !item.checked) {
        item.checked = true;
      }
      if (!value.target.checked) {
        item.checked = false;
      }
    });
    this.setState({
      copyDays,
      indeterminate: false,
      checkAll: value.target.checked,
    });
  };

  changeSingle = (e, index) => {
    let copyDays = this.state.copyDays;
    let indeterminate = true;
    let checkAll = false;
    copyDays[index].checked = e.target.checked;
    if (!copyDays.find((item) => !item.checked)) {
      indeterminate = false;
      checkAll = true;
    }
    this.setState({
      copyDays,
      indeterminate,
      checkAll,
    });
  };

  confirm = () => {
    let copyDays = this.state.copyDays;
    const { handleCopySave, dayIndex } = this.props;
    let copyIndexs = [];
    copyDays.map((item, i) => {
      if (item.checked && i !== dayIndex) {
        copyIndexs.push(i);
        item.checked = false;
      }
    });
    this.setState({
      copyDays,
    });
    handleCopySave(copyIndexs);
  };

  render() {
    const { indeterminate, checkAll, copyDays } = this.state;
    const { dayIndex, handleCloseCopy } = this.props;
    return (
      <div>
        <div style={{ borderBottom: "1px solid #E9E9E9" }}>
          <Checkbox
            indeterminate={indeterminate}
            onChange={this.onCheckAllChange}
            checked={checkAll}
          >
            全选
          </Checkbox>
        </div>
        <br />

        <Row>
          {copyDays.map((item, i) => {
            if (i === dayIndex) {
              item.checked = true;
            }
            return (
              <Col span={8} key={i}>
                <Checkbox
                  disabled={i === dayIndex}
                  checked={item.checked}
                  onChange={(e) => this.changeSingle(e, i)}
                >
                  {item.day}
                </Checkbox>
              </Col>
            );
          })}
        </Row>
        <div className="popFooter">
          <Button
            size="small"
            type="default"
            style={{ marginRight: "10px" }}
            onClick={handleCloseCopy}
          >
            取消
          </Button>
          <Button size="small" type="primary" onClick={this.confirm}>
            确认
          </Button>
        </div>
      </div>
    );
  }
}

export default CopyContent;
