import { chat } from "./Chat";
import { BubbleComponentResult } from "../types/ChatBubble";

export function createMessage(userInput: string): BubbleComponentResult {
  return chat.simpleMessage("Holis");
}
