import React, { useEffect, useState } from "react";
import { THEMES, type ThemeColor, type ThemeMode } from "./themeData";
import { ThemeContext } from "./ThemeContextDefinition";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<ThemeColor>(() => {
    const saved = localStorage.getItem("tweakcn-theme");
    return (saved === "blue" || saved === "green" || saved === "purple") ? saved : "red";
  });

  const [mode, setModeState] = useState<ThemeMode>(() => {
    const saved = localStorage.getItem("tweakcn-mode");
    if (saved === "light" || saved === "dark") return saved;
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  });

  const setTheme = (newTheme: ThemeColor) => {
    setThemeState(newTheme);
    localStorage.setItem("tweakcn-theme", newTheme);
  };

  const setMode = (newMode: ThemeMode) => {
    setModeState(newMode);
    localStorage.setItem("tweakcn-mode", newMode);
  };

  const toggleMode = () => {
    setMode(mode === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute("data-theme", theme);
    if (mode === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [theme, mode]);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
        mode,
        setMode,
        toggleMode,
        currentTheme: THEMES[theme],
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
