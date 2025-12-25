export type InputVariant = "outline" | "filled";
export type InputSize = "sm" | "md" | "lg";

export const inputVariantClasses: Record<InputVariant, string> = {
  outline: "pk-input--outline",
  filled: "pk-input--filled",
};

export const inputSizeClasses: Record<InputSize, string> = {
  sm: "pk-input--sm",
  md: "pk-input--md",
  lg: "pk-input--lg",
};
