import React from 'react';
import axios from 'axios';

class MemeGenerator extends React.Component{
    state = {meme: []};

    componentDidMount(){
        this.getMeme();
    }

    async getMeme (){
        const response = await axios.get('https://api.imgflip.com/get_memes');
        this.setState({ meme: response.data});
        console.log(this.state.meme);
    }
    render() {
        return(
            <div>fgh</div>
        )
    }
}
export default MemeGenerator;