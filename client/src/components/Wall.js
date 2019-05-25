import React from 'react';
import { Comment, Tooltip, Avatar, Input, Icon } from 'antd';
import moment from 'moment';
import 'antd/dist/antd.css';
import api from '../api/api';

const { TextArea } = Input;

export class Wall extends React.Component {
  state = {
    likes: 0,
    dislikes: 0,
    action: null,
    file: "",
    posts: []
  };

  componentDidMount() {
    this.fetchPosts();
  }

  fetchPosts = async () => {
    const res = await api.get('http://localhost:3001/api/posts/');
    this.setState({ posts: res.data });
    console.log(res);
  }

  like = () => {
    this.setState({
      likes: 1,
      dislikes: 0,
      action: 'liked',
    });
  };

  dislike = () => {
    this.setState({
      likes: 0,
      dislikes: 1,
      action: 'disliked',
    });
  };

 uploadFile = (file) => {
    // uploadPreset: 'b8m7soad'
    console.log(file);
    const url = `https://api.cloudinary.com/v1_1/hackaton/upload`;
    const xhr = new XMLHttpRequest();
    const fd = new FormData();
    fd.append("userfile", file);
    xhr.open('POST', url, true);
    xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
    xhr.send(fd);
 };
            

  render() {
    const actions = (value) => { 
         return (
            <span>
          <Tooltip title="Like">
            <Icon
              type="like"
              onClick={this.like}
            />
          </Tooltip>
          <span style={{ paddingLeft: 8, cursor: 'auto' }}>{value}</span>
         </span>)
      }

    return (
        <>
        {this.state.posts.map(post => {
            return (
            <>
            <Comment
                actions={actions(post.likesCount)}
                author={<a>{post.name}</a>}
                avatar={
                    <Avatar
                    src={post.avatar}
                    alt="Han Solo"/>}
                    content={
                        <p>{post.text}</p>
                    }
                    datetime={
                        <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
                        <span>{moment().from(post.date)}</span>
                        </Tooltip>
                    }
                    style = {{ width: '50%', minWidth: 400 }}
                    />
                    <span>
          <Tooltip title="Like">
            <Icon
              type="like"
              onClick={this.like}
            />
          </Tooltip>
          <span style={{ paddingLeft: 8, cursor: 'auto' }}>{post.likesCount}</span>
         </span>
         </>
            )  
        })}
        <TextArea rows={4} style={{ maxWidth: 500, resize: 'none' }}/>
                    <input type="file" id="fileElem" multiple accept="image/*" onChange="uploadFile"></input>)
        </>
        );
    }
}