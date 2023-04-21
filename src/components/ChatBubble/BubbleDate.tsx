import { BubbleComponent } from "../../types/ChatBubble";

export const BubbleDate: BubbleComponent = ({ message }) => {
  return (
    <div className="chat-bubble">
      <p>{message}</p>
      <p className="bubble-date">{new Date().toLocaleTimeString()}</p>
    </div>
  );
};
