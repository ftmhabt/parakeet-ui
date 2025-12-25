export const buttonVariants = {
  primary: {
    background: "var(--pk-primary-500)",
    color: "#fff",
    border: "transparent",
    hoverBg: "var(--pk-primary-600)",
  },
  secondary: {
    background: "var(--pk-gray-100)",
    color: "var(--pk-gray-800)",
    border: "var(--pk-gray-200)",
    hoverBg: "var(--pk-gray-200)",
  },
  ghost: {
    background: "transparent",
    color: "var(--pk-primary-600)",
    border: "transparent",
    hoverBg: "var(--pk-primary-50)",
  },
} as const;

export type ButtonVariant = keyof typeof buttonVariants;

export const buttonSizes = {
  sm: {
    height: "32px",
    padding: "0 12px",
    fontSize: "0.75rem",
  },
  md: {
    height: "40px",
    padding: "0 16px",
    fontSize: "0.875rem",
  },
  lg: {
    height: "48px",
    padding: "0 20px",
    fontSize: "1rem",
  },
} as const;

export type ButtonSize = keyof typeof buttonSizes;
