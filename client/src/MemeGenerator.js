import React from 'react';
import axios from 'axios';
<<<<<<< HEAD
import { Spin } from 'antd';
import './style.css';

=======
import { Button } from 'antd';
>>>>>>> 4debd27df6ddbdd10a981413a25ffa34ac22d63a

class MemeGenerator extends React.Component{
    state = {
        memes: []
    };

<<<<<<< HEAD
    abortController = new AbortController();

=======
>>>>>>> 4debd27df6ddbdd10a981413a25ffa34ac22d63a
    componentDidMount(){
        this.getMeme();
    }
<<<<<<< HEAD
=======
    async getMeme() {
            const response = await axios.get('https://meme-api.herokuapp.com/gimme');
            this.setState({ memes: response.data });
            console.log(response.data.url);

        }
>>>>>>> 4debd27df6ddbdd10a981413a25ffa34ac22d63a

      async clicked() {
            const response = await axios.get('https://meme-api.herokuapp.com/gimme');
            this.setState({ memes: response.data });
            console.log(this.state.memes.url)
        }  

<<<<<<< HEAD
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
                    
=======
    render() {
            return(
                <div>
                    <div>
                        <img style={{maxWidth: 500, maxHeight:500 }} src={this.state.memes.url} />
                    </div>
                    <div>
                       <Button type = "primary" size = "large" onClick = {(e) => this.clicked()}>Give me next!</Button>
                    </div>
>>>>>>> 4debd27df6ddbdd10a981413a25ffa34ac22d63a
                </div>
            );
        }

}
export default MemeGenerator;