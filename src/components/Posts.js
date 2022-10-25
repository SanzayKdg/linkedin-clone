import { Avatar } from "@mui/material";
import React from "react";
import "./component-css/Posts.css";
import InputOptions from "./InputOptions";
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import { forwardRef } from "react";

const Posts = forwardRef(({ name, description, message, photoUrl }, ref) => {
  return (
    <div ref={ref} className="post">
      <div className="post__header">
        <Avatar src={photoUrl}> {name[0].toUpperCase()} </Avatar>
        <div className="post__info">
            <h2>{name}</h2>
            <p>{description}</p>
        </div>
      </div>

      <div className="post__body">
        <p>{message}</p>
      </div>

      <div className="post__buttons">
            <InputOptions Icon={ThumbUpOutlinedIcon} title="Like" color="gray"/>
            <InputOptions Icon={ChatOutlinedIcon} title="Comment" color="gray"/>
            <InputOptions Icon={ShareOutlinedIcon} title="Share" color="gray"/>
            <InputOptions Icon={SendOutlinedIcon} title="Send" color="gray"/>
      </div>
    </div>
  );
});

export default Posts;
