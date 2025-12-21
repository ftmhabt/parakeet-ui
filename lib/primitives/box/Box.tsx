import { clsx } from "clsx";
import type { BoxProps } from "./types";

export function Box({
  as: Component = "div",
  className,
  style,
  children,
}: BoxProps) {
  return (
    <Component className={clsx("pk-box", className)} style={style}>
      {children}
    </Component>
  );
}
