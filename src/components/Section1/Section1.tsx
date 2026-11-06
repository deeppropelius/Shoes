import Background from "./Section-1-compo/Background";
import ColorPicker from "./Section-1-compo/Colorspicker";
import Model from "./Section-1-compo/model";
import Text from "./Section-1-compo/text";
import { useTheme } from "../../context/useTheme";

function Section1() {
  const { currentTheme } = useTheme();

  return (
    <section className="relative w-full h-screen overflow-hidden flex items-center justify-center select-none">
      {/* Dynamic luxury gradient background */}
      <Background />

      {/* Haute Couture Architectural Background Typography */}
      <Text />

      {/* Corner Luxury Metadata Badges */}
      <div className="absolute top-28 left-[4%] z-20 hidden lg:flex flex-col gap-1 pointer-events-none">
        <span className="text-[10px] tracking-[0.3em] font-semibold uppercase text-foreground/50">
          Atelier Collection
        </span>
        <span className="text-xs tracking-[0.2em] font-bold uppercase text-foreground/80">
          {currentTheme.name}
        </span>
      </div>

      <div className="absolute top-28 right-[4%] z-20 hidden lg:flex flex-col items-end gap-1 pointer-events-none">
        <span className="text-[10px] tracking-[0.3em] font-semibold uppercase text-foreground/50">
          Interactive View
        </span>
        <span className="text-xs tracking-[0.2em] font-bold uppercase text-foreground/80">
          360° Drag & Zoom
        </span>
      </div>

      {/* Interactive 3D Model Canvas */}
      <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-auto">
        <Model />
      </div>

      {/* Luxury Color Selection Atelier */}
      <ColorPicker />
    </section>
  );
}

export default Section1;
