import { BubbleComponent } from "../../types/ChatBubble";
import type { BubbleProps } from "../../types/ChatBubble";

export interface BubbleBoldProps extends BubbleProps {
  fontColor?: "red" | "blue" | "black";
  fontSize?: number;
}

export const BubbleFont: BubbleComponent<BubbleBoldProps> = (props) => {
  const style: any = {};
  if (props.fontSize) style["fontSize"] = `${props.fontSize}px`;
  if (props.fontColor) style["color"] = props.fontColor;
  return (
    <div className="chat-bubble">
      <p style={style}>{props.message}</p>
      <p className="bubble-date">{new Date().toLocaleTimeString()}</p>
    </div>
  );
};
