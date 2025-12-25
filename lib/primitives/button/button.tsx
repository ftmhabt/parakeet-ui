import React from "react";
import "./button.css";
import {
  ButtonSize,
  buttonSizes,
  ButtonVariant,
  buttonVariants,
} from "./button.variants";

export type ButtonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  className?: string;
  style?: React.CSSProperties;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({
  variant = "primary",
  size = "md",
  loading = false,
  disabled,
  className,
  style,
  children,
  ...props
}: ButtonProps) {
  const v = buttonVariants[variant];
  const s = buttonSizes[size];

  return (
    <button
      dir="rtl"
      disabled={disabled || loading}
      className={`pk-button ${className ?? ""}`}
      style={{
        backgroundColor: v.background,
        color: v.color,
        borderColor: v.border,
        height: s.height,
        padding: s.padding,
        fontSize: s.fontSize,
        opacity: disabled || loading ? 0.6 : 1,
        cursor: disabled || loading ? "not-allowed" : "pointer",
        ...style,
      }}
      data-variant={variant}
      {...props}
    >
      {loading ? "…" : children}
    </button>
  );
}
