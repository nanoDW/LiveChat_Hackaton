import React from "react";
import axios from "axios";
import { Button } from "antd";
import "antd/dist/antd.css";
import "./MemeGenerator.css";

class MemeGenerator extends React.Component {
  state = {
    memes: []
  };

  componentDidMount() {
    this.getMeme();
  }
  async getMeme() {
    const response = await axios.get("https://meme-api.herokuapp.com/gimme");
    this.setState({ memes: response.data });
    console.log(response.data.url);
  }

  async clicked() {
    const response = await axios.get("https://meme-api.herokuapp.com/gimme");
    this.setState({ memes: response.data });
    console.log(this.state.memes.url);
  }

  render() {
    return (
      <div className="meme-wrapper">
        <img className="meme-image" src={this.state.memes.url} alt="meme" />

        <Button
          className="meme-button"
          type="primary"
          size="large"
          onClick={e => this.clicked()}
        >
          Give me next!
        </Button>
      </div>
    );
  }
}
export default MemeGenerator;
