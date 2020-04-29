import React, { useCallback } from "react";
import Message from "./Message/Message";
import "./Messages.css";

interface user {
  id: string;
  name: string;
  room: string;
}

interface message {
  user: user;
  text: string;
}

export default function Messages({
  messages,
  name,
}: {
  messages: message[];
  name: string;
}) {
  const messagesEndRef = useCallback((node) => {
    if (node != null) node.scrollIntoView();
  }, []);

  return (
    <div className="messages">
      {messages.map((message, i) => (
        <div key={i} ref={messagesEndRef}>
          <Message message={message} name={name} />
        </div>
      ))}
    </div>
  );
}
