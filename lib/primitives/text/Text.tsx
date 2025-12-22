import React from "react";
import { TextVariant, textVariants } from "./text.variants";

type HtmlTextElement = keyof HTMLElementTagNameMap;

export type TextProps<T extends HtmlTextElement = "p"> = {
  as?: T;
  variant?: TextVariant;
  className?: string;
  style?: React.CSSProperties;
} & React.ComponentPropsWithoutRef<T>;

export function Text<T extends HtmlTextElement = "p">({
  as,
  variant = "body",
  className,
  style,
  ...props
}: TextProps<T>) {
  const Component = (as ?? "p") as React.ElementType;
  const variantStyle = textVariants[variant];

  return (
    <Component
      dir="rtl"
      className={className}
      style={{
        fontSize: variantStyle.fontSize,
        fontWeight: variantStyle.fontWeight,
        color: variantStyle.color,
        lineHeight: variantStyle.lineHeight,
        ...style,
      }}
      {...props}
    />
  );
}
