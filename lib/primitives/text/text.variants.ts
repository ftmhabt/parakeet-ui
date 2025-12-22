export const textVariants = {
  body: {
    fontSize: "0.875rem",
    fontWeight: 400,
    lineHeight: "1.6",
    color: "var(--pk-gray-800)",
  },
  caption: {
    fontSize: "0.75rem",
    fontWeight: 400,
    lineHeight: "1.4",
    color: "var(--pk-gray-600)",
  },
  muted: {
    fontSize: "0.875rem",
    fontWeight: 400,
    lineHeight: "1.6",
    color: "var(--pk-gray-500)",
  },
} as const;

export type TextVariant = keyof typeof textVariants;
