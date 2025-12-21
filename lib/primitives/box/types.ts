import type { CSSProperties, ElementType, ReactNode } from "react";

export interface BoxProps {
  as?: ElementType;
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
}
