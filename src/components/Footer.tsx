export default function Footer() {
  return (
    <footer className="w-full py-stack-lg border-t border-secondary/10 bg-surface-container-lowest">
      <div className="max-w-[1200px] mx-auto flex flex-col items-center justify-center text-center px-gutter pb-16 lg:pb-0">
        {/* Names */}
        <div className="font-playfair text-[32px] md:text-[36px] leading-[1.3] font-medium text-secondary mb-2">
          Andi &amp; Dira
        </div>

        {/* Date */}
        <p className="font-inter text-[14px] text-on-surface-variant mb-6 tracking-wider">
          10 — 11 Agustus 2026
        </p>

        {/* Divider */}
        <div className="flex items-center gap-3 mb-6">
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-secondary/20" />
          <span
            className="material-symbols-outlined text-secondary/30 text-[14px]"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            star
          </span>
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-secondary/20" />
        </div>

        {/* Thank you message */}
        <p className="font-inter text-[14px] text-on-surface-variant/80 mb-6 max-w-md italic">
          "Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila
          Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan doa restu."
        </p>

        {/* Wassalamu'alaikum */}
        <p className="font-inter text-[13px] text-secondary/70 mb-8 tracking-wider uppercase">
          Wassalamu'alaikum Warahmatullahi Wabarakatuh
        </p>

        <div className="h-px w-full max-w-xs bg-gradient-to-r from-transparent via-secondary/10 to-transparent mb-6" />

        {/* Copyright */}
        <p className="text-on-surface-variant font-inter text-[13px] leading-[1.6] opacity-40">
          © 2026 Andi &amp; Dira — Baarakallahu lakumaa wa baaraka 'alaikumaa wa
          jama'a bainakumaa fii khair.
        </p>

        {/* Divider */}
        <div className="flex items-center gap-3 mt-8 mb-6 justify-center">
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-secondary/20" />
          <span
            className="material-symbols-outlined text-secondary/40 text-[14px]"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            star
          </span>
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-secondary/20" />
        </div>

        {/* Designed by BTAFAMS */}
        <div className="text-center mb-2">
          <p className="font-playfair text-[18px] md:text-[20px] text-secondary font-medium tracking-wider">
            Designed by BTAFAMS
          </p>
          <p className="font-inter text-[13px] text-on-surface-variant/70">
            Custom Wedding Invitation Website
          </p>
        </div>

        {/* Contact */}
        <a
          href="https://wa.me/6287760698669"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 font-inter text-[14px] text-on-surface-variant hover:text-secondary transition-colors"
        >
          WhatsApp : 0877-6069-8669
        </a>
      </div>
    </footer>
  );
}
