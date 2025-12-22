import { Text, TextProps } from "./text";

type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

const sizeMap: Record<HeadingLevel, string> = {
  1: "2rem",
  2: "1.75rem",
  3: "1.5rem",
  4: "1.25rem",
  5: "1.125rem",
  6: "1rem",
};

export type HeadingProps = {
  level?: HeadingLevel;
} & Omit<TextProps<`h${HeadingLevel}`>, "as">;

export function Heading({ level = 1, style, ...props }: HeadingProps) {
  const tag = `h${level}` as const;

  return (
    <Text
      as={tag}
      variant="body"
      style={{
        fontSize: sizeMap[level],
        fontWeight: 700,
        ...style,
      }}
      {...props}
    />
  );
}
