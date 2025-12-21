import { HTMLAttributes } from "react";

export type TextProps = HTMLAttributes<HTMLParagraphElement> & {
  size?: "sm" | "md" | "lg";
  weight?: "normal" | "medium" | "bold";
  color?: "primary" | "secondary" | "muted" | "success" | "error";
};
