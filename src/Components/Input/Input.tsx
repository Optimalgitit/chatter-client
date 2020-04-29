import React from "react";
import "./Input.css";

export default function Input({
  message,
  setMessage,
  sendMessage,
}: {
  message: string;
  setMessage: (arg0: string) => void;
  sendMessage: (arg0?: any) => void;
}) {
  return (
    <form className="form">
      <input
        type="text"
        value={message}
        onChange={(event) => setMessage(event.target.value)}
        onKeyPress={(event) =>
          event.key === "Enter" ? sendMessage(event) : null
        }
        placeholder="Type a message..."
        className="input"
      />
      <button className="sendButton" data-testid="send-message" onClick={event => sendMessage(event)}>Send</button>
    </form>
  );
}
