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
            const response = await axios.get('https://meme-api.herokuapp.com/gimme', { signal: this.abortController.signal });
            if (this.state.isMounted) {
                this.setState({ meme: response.data});
            }
        console.log(this.state.meme);
    }
    render() {
            return(
                <div>
                    <img src={this.state.meme.url}/>
                </div>
            );
        }

}
export default MemeGenerator;