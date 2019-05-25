import React from 'react';
import { Menu, Icon, Comment, Tooltip, Avatar } from 'antd';
import moment from 'moment'
import 'antd/dist/antd.css';

export class Wall extends React.Component {
  state = {
    current: 'wall',
    likes: 0,
    dislikes: 0,
    action: null,
  };

  handleClick = e => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  };

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

  renderView = () => {
      switch(this.state.current) {
          case 'wall': 
          { 
            const { action, likes, dislikes } = this.state;
            const actions = [
                <span>
                  <Tooltip title="Like">
                    <Icon
                      type="like"
                      theme={action === 'liked' ? 'filled' : 'outlined'}
                      onClick={this.like}
                    />
                  </Tooltip>
                  <span style={{ paddingLeft: 8, cursor: 'auto' }}>{likes}</span>
                </span>,
                <span>
                  <Tooltip title="Dislike">
                    <Icon
                      type="dislike"
                      theme={action === 'disliked' ? 'filled' : 'outlined'}
                      onClick={this.dislike}
                    />
                  </Tooltip>
                  <span style={{ paddingLeft: 8, cursor: 'auto' }}>{dislikes}</span>
                </span>,
                <span>Reply to</span>,
              ];  
            return (
            <Comment
                actions={actions}
                author={<a>Han Solo</a>}
                avatar={
                    <Avatar
                    src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                    alt="Han Solo"/>}
                    content={
                        <p>
                            We supply a series of design principles, practical patterns and high quality design
                            resources (Sketch and Axure), to help people create their product prototypes beautifully
                            and efficiently.
                        </p>
                    }
                    datetime={
                        <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
                        <span>{moment().fromNow()}</span>
                        </Tooltip>
                    }
                    style = {{ width: '50%', minWidth: 400 }}
                    />
            )
          }
          default:
              {
                  return null;
              }
      }
  }

  render() {
    return (
        <>
            <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal" style= {{ display: 'flex' }}>
                <Menu.Item key="wall" style={{ width: '20%', minWidth: 150, textAlign: 'center' }}>
                <Icon type="container" />
                    Wall
                </Menu.Item>
                <Menu.Item key="memes" style={{ width: '20%', minWidth: 150, textAlign: 'center' }}>
                <Icon type="snippets" />
                    Memes
                </Menu.Item>
            </Menu>
            {this.renderView()}
        </>
        );
    }
}   
