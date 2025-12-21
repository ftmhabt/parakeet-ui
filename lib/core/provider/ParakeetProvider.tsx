import { useEffect } from "react";
import type { ParakeetProviderProps } from "./types";

export function ParakeetProvider({
  theme,
  mode = "light",
  direction = "rtl",
  children,
}: ParakeetProviderProps) {
  useEffect(() => {
    const root = document.documentElement;

    // Direction
    root.setAttribute("dir", direction);

    // Theme mode
    if (mode === "system") {
      const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      root.setAttribute("data-theme", isDark ? "dark" : "light");
    } else {
      root.setAttribute("data-theme", mode);
    }

    // Theme colors
    if (theme?.hue !== undefined) {
      root.style.setProperty("--pk-hue", String(theme.hue));
    }

    if (theme?.saturation) {
      root.style.setProperty("--pk-saturation", theme.saturation);
    }
  }, [theme?.hue, theme?.saturation, mode, direction]);

  return children;
}
