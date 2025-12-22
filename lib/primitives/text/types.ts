export type HtmlTextElement = keyof HTMLElementTagNameMap;

export type TextProps<T extends HtmlTextElement = "p"> = {
  as?: T;
  size?: "sm" | "md" | "lg";
  weight?: "normal" | "medium" | "bold";
  color?: "primary" | "secondary" | "muted";
  className?: string;
  style?: React.CSSProperties;
} & React.ComponentPropsWithoutRef<T>;
