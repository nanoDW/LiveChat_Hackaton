import React from 'react';
import axios from 'axios';
import { Spin } from 'antd';
import './style.css';


class MemeGenerator extends React.Component{
    state = {
        meme: [],
        isMounted: false
    };

    abortController = new AbortController();

    componentDidMount(){
        this.setState({ isMounted: true});
        this.getMeme();
    }

    componentWillUnmount() {
        this.abortController.abort();
    }

    async getMeme (){
            const response = await axios.get('https://meme-api.herokuapp.com/gimme', { signal: this.abortController.signal });
            if (this.state.isMounted) {
                this.setState({ meme: response.data});
            }
        console.log(this.state.meme);
    }
    render() {
            return(
                <div>
                    {this.state.meme.url ?  <img className="meme-container" src={this.state.meme.url} alt="mem"/> : <div className="container"><Spin size="large"/></div>}
                    
                </div>
            );
        }

}
export default MemeGenerator;