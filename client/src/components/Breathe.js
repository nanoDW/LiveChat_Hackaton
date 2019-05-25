import React from "react";
import "antd/dist/antd.css";
import Anime from "react-anime";
import "./Breathe.css";

class Breathe extends React.Component {
  render() {
    let animeProps = {
      scale: 3,
      backgroundColor: ["#403A3E", "#BE5869"],
      loop: true,
      direction: "alternate",
      duration: 6000,
      easing: "easeInOutQuad"
    };
    return (
      <div className="breather-container">
        <Anime {...animeProps}>
          <div className="breather" />
        </Anime>
      </div>
    );
  }
}

export default Breathe;
