export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden px-gutter">
      {/* Background */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-primary-container/25 via-surface to-surface" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary-container/15 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-secondary/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center">
        {/* Bismillah */}
        <div className="animate-fade-in-up mb-8">
          <p className="font-playfair text-[20px] md:text-[24px] text-secondary/80 italic">
            بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ
          </p>
        </div>

        {/* Assalamualaikum */}
        <div className="animate-fade-in-up-delay-1 mb-6">
          <p className="font-inter text-[14px] tracking-[0.3em] text-on-surface-variant uppercase">
            Assalamu'alaikum Warahmatullahi Wabarakatuh
          </p>
        </div>

        {/* We Invite You */}
        <div className="animate-fade-in-up-delay-2 mb-10">
          <p className="font-inter text-[16px] md:text-[18px] text-on-surface/70 mb-4">
            Dengan memohon Rahmat dan Ridho Allah SWT,<br/>
            kami mengundang Bapak/Ibu/Saudara/i untuk hadir di acara pernikahan kami
          </p>
        </div>

        {/* Names */}
        <div className="animate-fade-in-up-delay-2 mb-4">
          <h1 className="font-playfair text-[48px] md:text-[80px] lg:text-[96px] leading-[1] tracking-[-0.02em] font-bold text-on-surface">
            Andi
          </h1>
          <div className="my-2 md:my-4 relative inline-block">
            <div className="absolute inset-0 bg-secondary/20 blur-xl rounded-full animate-pulse-glow" />
            <span className="font-playfair text-[48px] md:text-[64px] text-secondary italic relative z-10 leading-none">
              &amp;
            </span>
          </div>
          <h1 className="font-playfair text-[48px] md:text-[80px] lg:text-[96px] leading-[1] tracking-[-0.02em] font-bold text-on-surface">
            Dira
          </h1>
        </div>

        {/* Date */}
        <div className="animate-fade-in-up-delay-3 mt-6 mb-8">
          <div className="flex items-center gap-4 justify-center">
            <div className="h-px w-12 md:w-20 bg-gradient-to-r from-transparent to-secondary/50" />
            <p className="font-inter text-[14px] md:text-[16px] tracking-[0.2em] text-secondary uppercase font-semibold">
              10 — 11 Agustus 2026
            </p>
            <div className="h-px w-12 md:w-20 bg-gradient-to-l from-transparent to-secondary/50" />
          </div>
          <p className="font-inter text-[14px] text-on-surface-variant mt-2">
            Jeneponto & Makassar, Sulawesi Selatan
          </p>
        </div>

        {/* Save the Date Button */}
        <div className="animate-fade-in-up-delay-4">
          <button 
            onClick={() => {
              const el = document.getElementById('couple');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="group flex items-center gap-2 bg-secondary/10 border border-secondary/30 text-secondary px-8 py-3 rounded-full font-inter text-[14px] tracking-[0.1em] font-semibold uppercase hover:bg-secondary hover:text-on-secondary transition-all duration-300 cursor-pointer"
          >
            <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>
              favorite
            </span>
            Buka Undangan
            <span className="material-symbols-outlined text-[18px] group-hover:translate-y-1 transition-transform">
              keyboard_arrow_down
            </span>
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in-up-delay-4">
        <div className="w-6 h-10 rounded-full border-2 border-secondary/30 flex justify-center pt-2">
          <div className="w-1 h-3 bg-secondary/60 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
