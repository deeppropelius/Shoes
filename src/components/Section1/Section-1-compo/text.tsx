import { useTheme } from "../../../context/useTheme";

function Text() {
  const { currentTheme, mode } = useTheme();
  const isLight = mode === "light";

  return (
    <div
      className="
        absolute 
        top-1/2
        left-1/2
        -translate-x-1/2
        -translate-y-1/2
        w-full 
        text-center
        uppercase 
        whitespace-nowrap
        text-[28vh]
        font-bold
        scale-y-[2.8]
        scale-x-[2.8]
        tracking-[0.06em]
        pointer-events-none
        select-none
        z-[1]
        origin-center
        transition-all
        duration-700
      "
      style={{
        fontFamily: "MyFont",
        WebkitTextStroke: isLight
          ? "2.5px rgba(255, 255, 255, 0.95)"
          : "2.5px rgba(255, 255, 255, 0.9)",
        color: isLight
          ? "rgba(255, 255, 255, 0.04)"
          : "rgba(255, 255, 255, 0.02)",
        filter: isLight
          ? `drop-shadow(0 4px 15px rgba(0, 0, 0, 0.35)) drop-shadow(0 0 40px ${currentTheme.color}60)`
          : `drop-shadow(0 2px 12px rgba(0, 0, 0, 0.85)) drop-shadow(0 0 45px ${currentTheme.color})`,
      }}
    >
      Sneakers
    </div>
  );
}

export default Text;
