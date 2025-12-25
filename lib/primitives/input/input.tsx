import clsx from "clsx";
import React from "react";
import "./input.css";
import {
  InputSize,
  inputSizeClasses,
  InputVariant,
  inputVariantClasses,
} from "./input.variants";

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  variant?: InputVariant;
  size?: InputSize;
  invalid?: boolean;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      variant = "outline",
      size = "md",
      invalid = false,
      dir = "rtl",
      ...props
    },
    ref
  ) => {
    return (
      <input
        ref={ref}
        dir={dir}
        data-invalid={invalid || undefined}
        className={clsx(
          "pk-input",
          inputVariantClasses[variant],
          inputSizeClasses[size],
          className
        )}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";
