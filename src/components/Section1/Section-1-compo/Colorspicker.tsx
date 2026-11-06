import Color from "./Color";
import { THEMES, type ThemeColor } from "../../../context/themeData";
import { useTheme } from "../../../context/useTheme";

function ColorPicker() {
  const { theme, setTheme, currentTheme } = useTheme();

  return (
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3 pointer-events-auto">
      {/* Frosted Luxury Swatch Bar */}
      <div className="flex items-center gap-3.5 px-6 py-3 rounded-full bg-white/40 dark:bg-black/40 backdrop-blur-2xl border border-black/10 dark:border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.12)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all duration-500">
        {(Object.keys(THEMES) as ThemeColor[]).map((themeKey) => {
          const config = THEMES[themeKey];
          return (
            <Color
              key={themeKey}
              color={config.color}
              name={config.name}
              isSelected={theme === themeKey}
              onClick={() => setTheme(themeKey)}
            />
          );
        })}
      </div>

      {/* Luxury Edition Label */}
      <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/30 dark:bg-black/30 backdrop-blur-md border border-black/5 dark:border-white/10 shadow-sm transition-all duration-300">
        <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
        <span className="text-[10px] font-semibold tracking-[0.22em] uppercase text-foreground/80 select-none">
          {currentTheme.edition}
        </span>
      </div>
    </div>
  );
}

export default ColorPicker;
