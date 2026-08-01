import { useRef } from "react";
import photo1 from "@assets/WhatsApp Image 2026-07-27 at 05.05.49.jpeg";
import photo2 from "@assets/WhatsApp Image 2026-07-27 at 05.05.24 (1).jpeg";
import photo3 from "@assets/WhatsApp Image 2026-07-27 at 05.05.24.jpeg";
import photo4 from "@assets/WhatsApp Image 2026-07-27 at 05.05.48.jpeg";

interface Photo {
  id: string;
  src: string;
  alt: string;
}

const photos: Photo[] = [
  { id: "photo1", src: photo1, alt: "Foto prewedding Andi & Dira" },
  { id: "photo2", src: photo2, alt: "Foto momen andai ini Andi & Dira" },
  { id: "photo3", src: photo3, alt: "Foto momen Andi & Dira" },
  { id: "photo4", src: photo4, alt: "Foto prewedding Andi & Dira" },
];

export default function GallerySection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollByDir = (dir: number) => {
    const el = scrollRef.current;
    if (!el) return;
    const first = el.querySelector(".snap-start") as HTMLElement | null;
    const step = first ? first.offsetWidth + 16 : el.clientWidth * 0.75;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  return (
    <section
      id="gallery"
      className="py-section-gap px-gutter scroll-trigger opacity-0 translate-y-10"
    >
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-12">
          <span className="font-inter text-[14px] tracking-[0.3em] text-secondary uppercase font-semibold block mb-4">
            Galeri Photo
          </span>
          <h2 className="font-playfair text-[40px] md:text-[48px] leading-[1.1] font-bold text-on-surface mb-4">
            Momen &amp; Kenangan
          </h2>
        </div>

        <div className="relative">
          {/* Navigasi kiri */}
          <button
            type="button"
            onClick={() => scrollByDir(-1)}
            aria-label="Sebelumnya"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 hidden sm:flex items-center justify-center w-11 h-11 md:w-12 md:h-12 rounded-full bg-surface-container-lowest/70 border border-secondary/20 text-on-surface-variant hover:bg-secondary hover:text-on-secondary transition-all cursor-pointer"
          >
            <span
              className="material-symbols-outlined text-[22px]"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              chevron_left
            </span>
          </button>

          {/* Slider */}
          <div
            ref={scrollRef}
            className="no-scrollbar flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-px-6 pb-2"
            style={{ touchAction: "pan-y" }}
          >
            {photos.map((photo, idx) => (
              <div
                key={photo.id}
                className="snap-start flex-none w-[calc(46%-0.5rem)]"
                style={{ transitionDelay: `${idx * 60}ms` }}
              >
                <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden bg-surface-container border border-outline-variant/20 shadow-lg shadow-primary-container/10">
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
                </div>
              </div>
            ))}
          </div>

          {/* Navigasi kanan */}
          <button
            type="button"
            onClick={() => scrollByDir(1)}
            aria-label="Berikutnya"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 hidden sm:flex items-center justify-center w-11 h-11 md:w-12 md:h-12 rounded-full bg-surface-container-lowest/70 border border-secondary/20 text-on-surface-variant hover:bg-secondary hover:text-on-secondary transition-all cursor-pointer"
          >
            <span
              className="material-symbols-outlined text-[22px]"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              chevron_right
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
