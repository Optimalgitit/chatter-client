import React, { useState, useEffect } from "react";
import queryString from "query-string";
import io from "socket.io-client";
import InfoBar from '../InfoBar/InfoBar'
import Input from "../Input/Input";
import Messages from "../Messages/Messages";

import "./Chat.css";

interface user {
  id: string;
  name: string;
  room: string;
}

interface message {
  user: user;
  text: string;
}
let socket: SocketIOClient.Socket;

function Chat({ location }: { location: any }) {
  const [name, setName] = useState<string>("");
  const [room, setRoom] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [messages, setMessages] = useState<message[]>([]);
  let ENDPOINT = process.env.API_URL || "http://localhost:5000";

  // Joining

  useEffect(() => {
    const { name, room } = queryString.parse(location.search);

    socket = io(ENDPOINT);

    setName(name as string);
    setRoom(room as string);

    socket.emit("join", { name, room }, (err: string) => {
      alert(err);
      window.location.href = `/`
    });

    return () => {
      socket.emit("disconnect");

      socket.close();
    };
  }, [ENDPOINT, location.search]);

  // Messages

  useEffect(() => {
    socket.on("message", (sentMessage: message) => {
      setMessages([...messages, sentMessage]);
    });
  }, [messages]);

  function sendMessage(event?: any) {
    event?.preventDefault();

    if (message) {
      socket.emit("sendMessage", message, () => setMessage(""));
    }
  }
  return (
    <div className="outerContainer">
      <div className="container">
        <InfoBar room={room} />
        <Messages messages={messages} name={name} />
        <Input message={message} setMessage={setMessage} sendMessage={sendMessage}></Input>
      </div>
    </div>
  );
}

export default Chat;
