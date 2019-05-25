import React from 'react';
import axios from 'axios';


class MemeGenerator extends React.Component{
<<<<<<< HEAD
    state = {
        memes: []
    };
=======
<<<<<<< HEAD
    state = {memes: []};
=======
    state = {
        meme: [],
        isMounted: false
    };

    abortController = new AbortController();
>>>>>>> textarea
>>>>>>> 58315796e2353ef49de9a457e3273990195383b4

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
<<<<<<< HEAD

      async clicked() {
            const response = await axios.get('https://meme-api.herokuapp.com/gimme');
            this.setState({ memes: response.data });
            console.log(this.state.memes.url)
        }  

=======
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
>>>>>>> 58315796e2353ef49de9a457e3273990195383b4
    render() {
            return(
                <div>
                    <div>
                        <img style={{maxWidth: 500, maxHeight:500 }} src={this.state.memes.url} />
                    </div>
                    <div>
                       <button onClick = {(e) => this.clicked()}>Gvie me next!</button>
                    </div>
                </div>
            );
        }

}
export default MemeGenerator;