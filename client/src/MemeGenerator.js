import React from 'react';
import axios from 'axios';


class MemeGenerator extends React.Component{
    state = {
        memes: []
    };

    componentDidMount(){
        this.getMeme();
    }
    async getMeme() {
            const response = await axios.get('https://meme-api.herokuapp.com/gimme');
            this.setState({ memes: response.data });
            console.log(response.data.url);

        }

      async clicked() {
            const response = await axios.get('https://meme-api.herokuapp.com/gimme');
            this.setState({ memes: response.data });
            console.log(this.state.memes.url)
        }  

    render() {
            return(
                <div>
                    <div>
                        <img style={{maxWidth: 500, maxHeight:500 }} src={this.state.memes.url} />
                    </div>
                    <div>
                       <button onClick = {(e) => this.clicked()}>Click</button>
                    </div>
                </div>
            );
        }

}
export default MemeGenerator;