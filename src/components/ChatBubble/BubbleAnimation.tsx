import { BubbleComponent } from "../../types/ChatBubble";
import type { BubbleProps } from "../../types/ChatBubble";

export interface BubbleAnimationProps extends BubbleProps {}

export const BubbleAnimation: BubbleComponent<BubbleAnimationProps> = (
  props
) => {
  return (
    <div className="fade-in-image chat-bubble">
      <p>{props.message}</p>
      <p className="bubble-date">{new Date().toLocaleTimeString()}</p>
    </div>
  );
};
