import { BubbleComponent } from "../../types/ChatBubble";
import type { BubbleProps } from "../../types/ChatBubble";

export interface BubbleBoldProps extends BubbleProps {
  bold?: boolean;
}

export const BubbleBold: BubbleComponent<BubbleBoldProps> = ({
  message,
  bold
}) => {
  return (
    <div className="chat-bubble">
      <p className={bold ? "bubble-font" : ""}>{message}</p>
      <p className="{bubble-date}">{new Date().toLocaleTimeString()}</p>
    </div>
  );
};
