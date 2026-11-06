import { Moon, Sun } from "lucide-react";
import { useTheme } from "../context/useTheme";

export default function ThemeToggle() {
  const { mode, toggleMode } = useTheme();
  const isDark = mode === "dark";

  return (
    <button
      onClick={toggleMode}
      type="button"
      className="group relative flex items-center justify-center w-10 h-10 rounded-full bg-white/40 dark:bg-black/30 backdrop-blur-xl border border-black/10 dark:border-white/10 text-foreground shadow-sm hover:border-primary/50 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
      title={`Switch to ${isDark ? "Light" : "Dark"} mode`}
      aria-label="Toggle theme mode"
    >
      <Sun
        className={`w-4 h-4 text-amber-500 transition-all duration-500 absolute ${
          isDark ? "rotate-90 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100"
        }`}
      />
      <Moon
        className={`w-4 h-4 text-indigo-300 transition-all duration-500 absolute ${
          isDark ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-0 opacity-0"
        }`}
      />
    </button>
  );
}
