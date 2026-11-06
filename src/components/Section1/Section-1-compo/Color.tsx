interface ColorProps {
  color: string;
  name?: string;
  isSelected?: boolean;
  onClick?: () => void;
}

function Color({ color, name, isSelected = false, onClick }: ColorProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      title={name || color}
      aria-label={`Select ${name || color} edition`}
      className={`group relative flex items-center justify-center p-1.5 rounded-full transition-all duration-300 cursor-pointer ${
        isSelected
          ? "scale-110"
          : "hover:scale-105 opacity-75 hover:opacity-100"
      }`}
    >
      {/* Outer Luxury Ring */}
      <div
        className={`absolute inset-0 rounded-full transition-all duration-300 ${
          isSelected
            ? "ring-2 ring-primary shadow-[0_0_18px_var(--primary)] scale-105"
            : "ring-1 ring-black/10 dark:ring-white/15 group-hover:ring-primary/50"
        }`}
      />

      {/* Swatch Body */}
      <div
        className="w-9 h-4 rounded-full shadow-[inset_0_1px_2px_rgba(255,255,255,0.4),0_2px_6px_rgba(0,0,0,0.25)] relative overflow-hidden"
        style={{ backgroundColor: color }}
      >
        {/* Subtle metallic sheen reflection */}
        <div className="absolute top-0 left-0 w-full h-1/2 bg-white/25 rounded-t-full" />
      </div>
    </button>
  );
}

export default Color;
