import { TextProps } from "parakeet-ui";
import React from "react";
import { HtmlTextElement } from "./types";

export function Text<T extends HtmlTextElement = "p">({
  as,
  size = "md",
  weight = "normal",
  color = "secondary",
  className,
  style,
  ...props
}: TextProps<T>) {
  const Component = (as ?? "p") as React.ElementType;

  return (
    <Component
      dir="rtl"
      className={className}
      style={{
        fontSize:
          size === "sm" ? "0.75rem" : size === "lg" ? "1rem" : "0.875rem",
        fontWeight: weight === "bold" ? 700 : weight === "medium" ? 500 : 400,
        color:
          color === "primary"
            ? "var(--pk-primary-500)"
            : color === "muted"
            ? "var(--pk-gray-500)"
            : "var(--pk-gray-700)",
        ...style,
      }}
      {...props}
    />
  );
}
