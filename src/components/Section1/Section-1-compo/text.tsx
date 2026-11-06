import { useProgress } from "@react-three/drei";
import { useTheme } from "../../../context/useTheme";

function Text() {
  const { currentTheme, mode } = useTheme();
  const { active, progress } = useProgress();
  const isLight = mode === "light";
  const isLoading = active || progress < 100;

  const strokeColor = isLight ? "rgba(255, 255, 255, 0.95)" : "rgba(255, 255, 255, 0.9)";
  const dropShadowFilter = isLight
    ? `drop-shadow(0 4px 15px rgba(0, 0, 0, 0.35)) drop-shadow(0 0 40px ${currentTheme.color}60)`
    : `drop-shadow(0 2px 12px rgba(0, 0, 0, 0.85)) drop-shadow(0 0 45px ${currentTheme.color})`;

  return (
    <div className="absolute inset-0 z-[1] flex items-center justify-center pointer-events-none select-none overflow-hidden">
      <svg
        className="w-full h-full overflow-visible pointer-events-none select-none"
        viewBox="0 0 1600 500"
        preserveAspectRatio="xMidYMid meet"
      >
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dominantBaseline="central"
          className={`uppercase font-bold tracking-[0.06em] origin-center scale-x-[1.4] scale-y-[1.8] sm:scale-x-[2.0] sm:scale-y-[2.3] md:scale-x-[2.5] md:scale-y-[2.6] lg:scale-x-[2.8] lg:scale-y-[2.8] transition-all duration-700 ${
            isLoading ? "animate-stroke-loader" : ""
          }`}
          style={{
            fontFamily: "MyFont",
            fontSize: "135px",
            fill: isLoading
              ? "transparent"
              : isLight
              ? "rgba(255, 255, 255, 0.04)"
              : "rgba(255, 255, 255, 0.02)",
            stroke: strokeColor,
            strokeWidth: "2.5px",
            filter: dropShadowFilter,
            transition: "stroke-dashoffset 0.8s ease, fill 0.8s ease, filter 0.7s ease",
          }}
        >
          Sneakers
        </text>
      </svg>

      {/* Subtle Luxury Loading Indicator pill while model loads in background */}
      {isLoading && (
        <div className="absolute top-[66%] left-1/2 -translate-x-1/2 flex items-center gap-2 px-3.5 py-1 rounded-full bg-black/40 dark:bg-black/60 backdrop-blur-md border border-white/20 text-[10px] tracking-[0.25em] font-semibold text-white uppercase shadow-lg animate-pulse transition-opacity duration-500">
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-ping" />
          <span>Atelier Loading • {progress.toFixed(0)}%</span>
        </div>
      )}
    </div>
  );
}

export default Text;
