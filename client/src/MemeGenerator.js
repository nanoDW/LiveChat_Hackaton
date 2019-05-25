import React from 'react';
import axios from 'axios';


class MemeGenerator extends React.Component{
<<<<<<< HEAD
    state = {memes: []};
=======
    state = {
        meme: [],
        isMounted: false
    };

    abortController = new AbortController();
>>>>>>> textarea

    componentDidMount(){
        this.setState({ isMounted: true});
        this.getMeme();
    }
<<<<<<< HEAD
    async getMeme() {
            const response = await axios.get('https://meme-api.herokuapp.com/gimme');
            this.setState({ memes: response.data });
            console.log(response.data.url);
        }
=======

    componentWillUnmount() {
        this.abortController.abort();
    }

    async getMeme (){
            const response = await axios.get('https://api.imgflip.com/get_memes', { signal: this.abortController.signal });
            if (this.state.isMounted) {
                this.setState({ meme: response.data});
            }
        console.log(this.state.meme);
    }
>>>>>>> textarea
    render() {
            return(
                <div>
                    <img src={this.state.memes.url}/>
                </div>
            );
        }

}
export default MemeGenerator;