import { BubbleComponent } from "../../types/ChatBubble";

export const BubbleBasic: BubbleComponent = ({ message }) => {
  return (
    <div className="chat-bubble">
      <p>{message}</p>
    </div>
  );
};
