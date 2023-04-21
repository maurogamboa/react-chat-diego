import react from "react";

export interface BubbleProps {
  message: string;
}

export type BubbleComponent<P extends BubbleProps = BubbleProps> = react.FC<P>;

export type BubbleComponentResult = react.ReactElement<any, any> | null;
