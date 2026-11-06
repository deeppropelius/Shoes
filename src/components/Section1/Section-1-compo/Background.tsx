function Background() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Dynamic luxury circular gradient:
          - Light mode: Shoe color in center -> White outside
          - Dark mode: Dark in center -> Shoe color outside */}
      <div
        className="absolute inset-0 transition-all duration-700 ease-in-out"
        style={{
          background: "var(--theme-gradient)",
        }}
      />
    </div>
  );
}

export default Background;
