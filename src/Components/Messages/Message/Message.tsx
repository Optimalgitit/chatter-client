import React from "react";
import "./Message.css";
const ReactEmoji = require("react-emoji");

interface user {
  id: string;
  name: string;
  room: string;
}

interface message {
  user: user;
  text: string;
}

export default function Message({
  message: { text, user },
  name,
}: {
  message: message;
  name: string;
}) {
  let isSentByCurUser = false;

  if (user.name === name) isSentByCurUser = true;
  return isSentByCurUser ? (
    <div className="messageContainer justifyEnd">
      <p className="sentText pr-10">{name}</p>
      <div className="messageBox backgroundBlue">
        <p className="messageText colorWhite">{ReactEmoji.emojify(text)}</p>
      </div>
    </div>
  ) : (
    <div className="messageContainer justifyStart">
      <div className="messageBox backgroundLight">
        <p className="messageText colorDark">{ReactEmoji.emojify(text)}</p>
      </div>
      <p className="sentText pl-10 ">{user.name}</p>
    </div>
  );
}
