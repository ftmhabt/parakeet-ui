import { TextProps } from "./types";

export const Text: React.FC<TextProps> = ({
  size = "md",
  weight = "normal",
  color = "secondary",
  className = "",
  children,
  ...props
}) => {
  const sizeMap = {
    sm: "0.75rem",
    md: "0.875rem",
    lg: "1rem",
  };

  const weightMap = {
    normal: 400,
    medium: 500,
    bold: 700,
  };

  const colorMap = {
    primary: "var(--pk-primary-500)",
    secondary: "var(--pk-gray-700)",
    muted: "var(--pk-gray-500)",
    success: "var(--pk-success)",
    error: "var(--pk-error)",
  };

  return (
    <p
      style={{
        fontSize: sizeMap[size],
        fontWeight: weightMap[weight],
        color: colorMap[color],
        direction: "rtl",
      }}
      className={className}
      {...props}
    >
      {children}
    </p>
  );
};
