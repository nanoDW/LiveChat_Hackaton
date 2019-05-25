import React from 'react';
import axios from 'axios';
import { Spin, Button } from 'antd';
import './style.css';
import "antd/dist/antd.css";
import "./MemeGenerator.css";

class MemeGenerator extends React.Component {
  state = {
    memes: []
  };

    abortController = new AbortController();

    componentDidMount(){
        this.getMeme();
    }
    async getMeme() {
            const response = await axios.get('https://meme-api.herokuapp.com/gimme');
            this.setState({ memes: response.data });
            console.log(response.data.url);
    }
       clicked = async () => {
            const response = await axios.get('https://meme-api.herokuapp.com/gimme');
            this.setState({ memes: response.data });
            console.log(this.state.memes.url)
        }  
    render() {
            return(
                <>
                <div>
                    {this.state.meme.url ?  <img className="meme-container" src={this.state.meme.url} alt="mem"/> : <div className="container"><Spin size="large"/></div>}
                </div>
                    <div>
                       <Button type = "primary" size = "large" onClick = {(e) => this.clicked()}>Give me next!</Button>
                    </div>

        <Button
          className="meme-button"
          type="primary"
          size="large"
          onClick={e => this.clicked()}
        >
          Give me next!
        </Button>
      </>
            )
  }
}

export default MemeGenerator;
