import React from 'react';
import axios from 'axios';

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
            const response = await axios.get('https://api.imgflip.com/get_memes', { signal: this.abortController.signal });
            if (this.state.isMounted) {
                this.setState({ meme: response.data});
            }
        console.log(this.state.meme);
    }
    render() {
        return(
            <div>fgh</div>
        )
    }
}
export default MemeGenerator;