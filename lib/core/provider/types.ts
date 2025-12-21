export type ThemeMode = "light" | "dark" | "system";

export interface ParakeetThemeConfig {
  hue?: number; // 0 – 360
  saturation?: string; // "80%" | "70%"
}

export interface ParakeetProviderProps {
  theme?: ParakeetThemeConfig;
  mode?: ThemeMode;
  direction?: "rtl" | "ltr";
  children: React.ReactNode;
}
