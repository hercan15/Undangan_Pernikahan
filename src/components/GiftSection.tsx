import { useState } from 'react';

export default function GiftSection() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('085823053679').then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <section id="gift" className="py-section-gap px-gutter">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-12 scroll-trigger opacity-0 translate-y-10">
          <span className="font-inter text-[14px] tracking-[0.3em] text-secondary uppercase font-semibold block mb-4">
            Amplop Digital
          </span>
          <h2 className="font-playfair text-[40px] md:text-[48px] leading-[1.1] font-bold text-on-surface mb-4">
            Hadiah Pernikahan
          </h2>
          <p className="font-inter text-[16px] text-on-surface-variant max-w-md mx-auto">
            Doa restu Anda merupakan karunia yang sangat berarti bagi kami. Namun jika Anda ingin memberikan tanda kasih, kami menyediakan amplop digital.
          </p>
        </div>

        <div className="max-w-sm mx-auto scroll-trigger opacity-0 translate-y-10" style={{ transitionDelay: '200ms' }}>
          <div className="glass-card-static rounded-2xl p-8 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent pointer-events-none" />
            
            <div className="relative z-10">
              {/* DANA Logo / Icon */}
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#108ee9]/10 border border-[#108ee9]/30 mb-5">
                <span className="material-symbols-outlined text-[#108ee9] text-[32px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                  account_balance_wallet
                </span>
              </div>

              <h3 className="font-playfair text-[24px] text-on-surface font-semibold mb-1">
                DANA
              </h3>
              <p className="font-inter text-[14px] text-on-surface-variant mb-4">
                a.n. Swandi
              </p>

              {/* Account Number */}
              <div className={`bg-surface-container rounded-xl px-5 py-4 flex items-center justify-between gap-3 border border-outline-variant/20 mb-4 transition-all ${copied ? 'flash-success' : ''}`}>
                <span className="font-inter text-[18px] md:text-[20px] text-on-surface font-medium tracking-wider">
                  085823053679
                </span>
                <button
                  onClick={handleCopy}
                  className="flex items-center gap-1 text-secondary hover:text-secondary/80 transition-colors cursor-pointer shrink-0"
                >
                  <span className="material-symbols-outlined text-[20px]">
                    {copied ? 'check' : 'content_copy'}
                  </span>
                </button>
              </div>

              {copied && (
                <p className="font-inter text-[13px] text-secondary animate-fade-in-up">
                  ✓ Nomor berhasil disalin!
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
