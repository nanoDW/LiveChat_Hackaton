import React from 'react';
import axios from 'axios';


class MemeGenerator extends React.Component{
    state = {memes: []};

    componentDidMount(){
        this.getMeme();
    }
    async getMeme() {
            const response = await axios.get('https://meme-api.herokuapp.com/gimme');
            this.setState({ memes: response.data });
            console.log(response.data.url);
        }
    render() {
            return(
                <div>
                    <img src={this.state.memes.url}/>
                </div>
            );
        }

}
export default MemeGenerator;