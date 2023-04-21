import { BubbleBasic } from "./ChatBubble/BasicBubble";
import { BubbleDate } from "./ChatBubble/BubbleDate";
import { BubbleBold } from "./ChatBubble/BubbleBold";

export const BubbleFactory = {
  simpleMessage: (message: string) => BubbleBasic({ message: message }),
  messageWithDate: (message: string) => BubbleDate({ message: message }),
  messageBold: BubbleBold
};
