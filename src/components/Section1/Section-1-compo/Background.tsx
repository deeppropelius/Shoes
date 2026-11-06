import { useTheme } from "../../../context/useTheme";
import { THEMES, type ThemeColor } from "../../../context/themeData";

const THEME_KEYS = Object.keys(THEMES) as ThemeColor[];

function Background() {
  const { theme } = useTheme();

  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Dynamic luxury circular gradient with hardware-accelerated crossfade:
          - Light mode: Shoe color in center -> White outside
          - Dark mode: Dark in center -> Shoe color outside */}
      {THEME_KEYS.map((themeKey) => (
        <div
          key={themeKey}
          data-theme={themeKey}
          className="absolute inset-0 transition-opacity duration-700 ease-out will-change-[opacity]"
          style={{
            background: "var(--theme-gradient)",
            opacity: theme === themeKey ? 1 : 0,
          }}
        />
      ))}
    </div>
  );
}

export default Background;
