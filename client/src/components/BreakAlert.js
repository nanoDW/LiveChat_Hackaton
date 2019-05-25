import React from "react";
import moment from "moment";
import { Modal } from "antd";
import "antd/dist/antd.css";
import "./BreakAlert.css";

class BreakAlert extends React.Component {
  state = {
    visible: false,
    nextBreak: moment()
      .add(1, "hour")
      .startOf("hour")
      .format()
  };

  watchTime = () => {
    setInterval(() => {
      const currentTime = moment();
      const diff = currentTime.diff(this.state.nextBreak, "seconds");
      console.log(diff);
      if (diff >= 0) {
        console.log("now!");
        this.showModal();
        this.setState({
          nextBreak: moment()
            .add(1, "hour")
            .startOf("hour")
            .format()
        });
      }
    }, 5000);
  };

  showModal = () => {
    this.setState({
      visible: true
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };

  render() {
    this.watchTime();
    return (
      <div>
        <Modal
          title=""
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <div className="modal-content">
            <div className="modal-text">
              <p>You have been working for 1 hour. </p>
              <p>Do you want to have a short break?</p>
            </div>
            <img className="modal-image" src="/Clippy.png" alt="clippy" />
          </div>
        </Modal>
      </div>
    );
  }
}

export default BreakAlert;
