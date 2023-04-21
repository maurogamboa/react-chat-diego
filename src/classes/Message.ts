import { chat } from "./Chat";
import { BubbleComponentResult } from "../types/ChatBubble";

export function createMessage(text: string): BubbleComponentResult {
  return chat.messageFont({
    message: text,
    fontColor: "red",
    fontSize: 19,
  });
}
