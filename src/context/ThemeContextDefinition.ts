import { createContext } from "react";
import type { ThemeColor, ThemeConfig, ThemeMode } from "./themeData";

export interface ThemeContextType {
  theme: ThemeColor;
  setTheme: (theme: ThemeColor) => void;
  mode: ThemeMode;
  setMode: (mode: ThemeMode) => void;
  toggleMode: () => void;
  currentTheme: ThemeConfig;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

