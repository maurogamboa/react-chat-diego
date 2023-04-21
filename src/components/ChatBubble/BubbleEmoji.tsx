import { BubbleComponent } from "../../types/ChatBubble";
import type { BubbleProps } from "../../types/ChatBubble";

export interface BubbleEmojiProps extends BubbleProps {
  emoji: "smile" | "angry" | "cry" | "clap";
}

const emojiSource: Record<BubbleEmojiProps["emoji"], string> = {
  smile:
    "https://cdn.iconscout.com/icon/free/png-256/smile-3581684-3019000.png",
  angry:
    "https://i.pinimg.com/736x/7a/0c/ef/7a0cefb4405ccc0ad7371a0be57dd713.jpg",
  cry:
    "https://www.pngitem.com/pimgs/m/528-5289792_crying-face-emoji-gif-hd-png-download.png",
  clap:
    "https://logowik.com/content/uploads/images/clapping-hands-emoji5223.logowik.com.webp"
};

export const BubbleEmoji: BubbleComponent<BubbleEmojiProps> = (props) => {
  return (
    <div className="chat-bubble">
      <p>{props.message}</p>
      <img
        alt="emoji"
        src={emojiSource[props.emoji]}
        height="72"
        width="72"
      ></img>
      <p className="bubble-date">{new Date().toLocaleTimeString()}</p>
    </div>
  );
};
