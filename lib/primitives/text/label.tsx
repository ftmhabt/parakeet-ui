import { Text, TextProps } from "./text";

export type LabelProps = {
  htmlFor?: string;
} & Omit<TextProps<"label">, "as">;

export function Label({ style, ...props }: LabelProps) {
  return (
    <Text
      as="label"
      variant="caption"
      style={{
        fontWeight: 500,
        ...style,
      }}
      {...props}
    />
  );
}
