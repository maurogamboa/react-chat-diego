import React, { useState } from "react";
import { createMessage } from "./classes/Message";
import "./styles.css";
import { BubbleComponentResult } from "./types/ChatBubble";

export default function App() {
  const [messages, setMessages] = useState<BubbleComponentResult[]>([]);
  const [input, setInput] = useState("");

  const handleClick: React.FormEventHandler = (e) => {
    e.preventDefault();
    e.stopPropagation();

    const comp = createMessage(input);
    setMessages((prev) => [...prev, comp]);
    setInput("");
  };

  return (
    <div>
      <form onSubmit={handleClick}>
        <input onChange={(e) => setInput(e.target.value)} value={input} />
        <button type="submit">New message</button>
      </form>
      <div className="chat-list">
        {messages.map(function (bubble, i) {
          return <React.Fragment key={`bubble${i}`}>{bubble}</React.Fragment>;
        })}
      </div>
    </div>
  );
}
