import { chat } from "../components/BubbleFactory";
import { BubbleComponentResult } from "../types/ChatBubble";

export function createMessage(): BubbleComponentResult {
  return chat.se({
    message: "Prueba de mensaje 🙏",
    bold: true
  });
}
