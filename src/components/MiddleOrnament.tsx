export default function MiddleOrnament() {
  return (
    <div
      className="flex flex-col items-center justify-center py-8 lg:py-0 scroll-trigger opacity-0 scale-75"
      style={{ transitionDelay: '500ms' }}
    >
      <div className="w-px h-24 bg-gradient-to-b from-transparent via-secondary/40 to-secondary hidden lg:block" />
      <div className="my-6 relative">
        <div className="absolute inset-0 bg-secondary/20 blur-xl rounded-full animate-pulse-glow" />
        <span className="font-playfair text-[64px] leading-[1.1] tracking-[-0.02em] font-bold text-secondary italic relative z-10">
          &amp;
        </span>
      </div>
      <div className="w-px h-24 bg-gradient-to-t from-transparent via-secondary/40 to-secondary hidden lg:block" />
      <div className="lg:hidden w-full h-px bg-gradient-to-r from-transparent via-secondary/40 to-transparent" />
    </div>
  );
}
