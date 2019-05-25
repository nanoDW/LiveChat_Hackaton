import React from "react";
import moment from "moment";
import { Modal } from "antd";
import "antd/dist/antd.css";
import "./BreakAlert.css";
import Breathe from "./Breathe";

class BreakAlert extends React.Component {
  state = {
    visible: true,
    nextBreak: moment()
      .add(1, "hour")
      .startOf("hour")
      .format(),
    breathe: false
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
    if (!this.state.breathe) {
      this.setState({
        breathe: true
      });
    } else {
      this.setState({
        visible: false
      });
    }
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };

  displayContent = () => {
    if (this.state.breathe) {
      return (
        <div className="modal-breathe">
          <p>Breathe...</p>
          <Breathe />
        </div>
      );
    } else {
      return (
        <div className="modal-content">
          <div className="modal-text">
            <p>You have been working for 1 hour. </p>
            <p>Do you want to have a short break?</p>
          </div>
          <img className="modal-image" src="/Clippy.png" alt="clippy" />
        </div>
      );
    }
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
          {this.displayContent()}
        </Modal>
      </div>
    );
  }
}

export default BreakAlert;
