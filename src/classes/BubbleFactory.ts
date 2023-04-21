import { BubbleBasic } from "../components/ChatBubble/BasicBubble";
import { BubbleDate } from "../components/ChatBubble/BubbleDate";
import { BubbleFont } from "../components/ChatBubble/BubbleFont";
import { BubbleEmoji } from "../components/ChatBubble/BubbleEmoji";
import { BubbleBold } from "../components/ChatBubble/BubbleBold";
import { BubbleAnimation } from "../components/ChatBubble/BubbleAnimation";

export const BubbleFactory = {
  simpleMessage: (message: string) => BubbleBasic({ message: message }),
  messageWithDate: (message: string) => BubbleDate({ message: message }),
  messageBold: (message: string, bold: boolean) =>
    BubbleBold({ message, bold }),
  messageFont: BubbleFont,
  messageEmoji: BubbleEmoji,
  messageAnimation: (message: string) => BubbleAnimation({ message: message })
};
