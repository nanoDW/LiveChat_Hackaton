import React from "react";
import { Comment, Tooltip, Avatar, Input, Icon } from "antd";
import moment from "moment";
import "antd/dist/antd.css";

const { TextArea } = Input;

export class Wall extends React.Component {
  state = {
    likes: 0,
    dislikes: 0,
    action: null,
    file: ""
  };

  like = () => {
    this.setState({
      likes: 1,
      dislikes: 0,
      action: "liked"
    });
  };

  dislike = () => {
    this.setState({
      likes: 0,
      dislikes: 1,
      action: "disliked"
    });
  };

  uploadFile = file => {
    // uploadPreset: 'b8m7soad'
    console.log(file);
    const url = `https://api.cloudinary.com/v1_1/hackaton/upload`;
    const xhr = new XMLHttpRequest();
    const fd = new FormData();
    fd.append("userfile", file);
    xhr.open("POST", url, true);
    xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
    xhr.send(fd);
  };

  render() {
    const { action, likes, dislikes } = this.state;
    const actions = [
      <span>
        <Tooltip title="Like">
          <Icon
            type="like"
            theme={action === "liked" ? "filled" : "outlined"}
            onClick={this.like}
          />
        </Tooltip>
        <span style={{ paddingLeft: 8, cursor: "auto" }}>{likes}</span>
      </span>,
      <span>
        <Tooltip title="Dislike">
          <Icon
            type="dislike"
            theme={action === "disliked" ? "filled" : "outlined"}
            onClick={this.dislike}
          />
        </Tooltip>
        <span style={{ paddingLeft: 8, cursor: "auto" }}>{dislikes}</span>
      </span>,
      <span>Reply to</span>
    ];
    return (
      <div className="wall-wrapper" style={{ padding: 20 }}>
        <Comment
          actions={actions}
          author={<a>Han Solo</a>}
          avatar={
            <Avatar
              src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
              alt="Han Solo"
            />
          }
          content={
            <p>
              We supply a series of design principles, practical patterns and
              high quality design resources (Sketch and Axure), to help people
              create their product prototypes beautifully and efficiently.
            </p>
          }
          datetime={
            <Tooltip title={moment().format("YYYY-MM-DD HH:mm:ss")}>
              <span>{moment().fromNow()}</span>
            </Tooltip>
          }
          style={{ width: "100%" }}
        />
        <TextArea rows={4} style={{ width: "100%", resize: "none" }} />
        <input
          type="file"
          id="fileElem"
          multiple
          accept="image/*"
          onChange="uploadFile"
        />
      </div>
    );
  }
}
