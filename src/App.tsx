import { useEffect, useCallback, useState } from "react";
import Navbar from "./components/Navbar";
import SideNav from "./components/SideNav";
import Particles from "./components/Particles";
import HeroSection from "./components/HeroSection";
import ProfileCard from "./components/ProfileCard";
import MiddleOrnament from "./components/MiddleOrnament";
import QuoteSection from "./components/QuoteSection";
import CountdownTimer from "./components/CountdownTimer";
import EventSection from "./components/EventSection";
import RSVPSection from "./components/RSVPSection";
import GiftSection from "./components/GiftSection";
import MusicPlayer from "./components/MusicPlayer";
import Footer from "./components/Footer";
import BottomNav from "./components/BottomNav";
import { MusicProvider } from "./context/MusicContext";
import { MessagesProvider } from "./context/MessagesContext";
import UcapanSection from "./components/UcapanSection";
import GallerySection from "./components/GallerySection";
import GROOM_IMAGE from "@assets/Laki_laki.png";
import BRIDE_IMAGE from "@assets/Perempuan.png";

export default function App() {
  const [activeSection, setActiveSection] = useState("hero");
  const [opened, setOpened] = useState(false);

  const handleOpen = () => {
    setOpened(true);
  };

  // Scroll ke "couple" setelah konten selanjutnya mount & animasi dimulai
  useEffect(() => {
    if (!opened) return;
    const el = document.getElementById("couple");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [opened]);

  // Scroll observer for animations
  const setupScrollObserver = useCallback(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
    );

    document
      .querySelectorAll(".scroll-trigger")
      .forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Section tracking for active nav
  const setupSectionObserver = useCallback(() => {
    const sections = [
      "hero",
      "mempelai",
      "akad",
      "resepsi",
      "rsvp",
      "ucapan",
      "gift",
      "gallery",
    ];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3, rootMargin: "-80px 0px -30% 0px" },
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Parallax
  const setupParallax = useCallback(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const bloom = document.querySelector(".bloom-bg") as HTMLElement | null;
      if (bloom) {
        bloom.style.transform = `translate(-50%, ${scrolled * 0.15}px)`;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const c1 = setupScrollObserver();
    const c2 = setupSectionObserver();
    const c3 = setupParallax();
    return () => {
      c1();
      c2();
      c3();
    };
  }, [setupScrollObserver, setupSectionObserver, setupParallax, opened]);

  return (
    <MusicProvider>
      <MessagesProvider>
        <div className="font-inter text-[16px] leading-[1.6]">
          {/* ==================== HERO (tampilan awal) ==================== */}
          <HeroSection onOpen={handleOpen} />

          {/* ==================== SELURUH KONTEN — tampil setelah klik ==================== */}
          {opened && (
            <>
              <Navbar activeSection={activeSection} />

              {/* Side Navigation (Desktop) */}
              <SideNav activeSection={activeSection} />

              {/* Music Player */}
              <MusicPlayer />

              {/* Particles - global */}
              <div className="fixed inset-0 pointer-events-none z-0">
                <Particles />
              </div>

              {/* ==================== COUPLE ==================== */}
              <section
                id="couple"
                className="relative py-section-gap overflow-hidden"
              >
                {/* Background */}
                <div className="absolute inset-0 z-0 bg-gradient-to-b from-surface via-primary-container/5 to-surface" />
                <div className="bloom-bg absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary-container/8 blur-[120px] rounded-full pointer-events-none" />

                <div className="relative z-10 max-w-[1200px] mx-auto px-gutter">
                  {/* Section Header with Quote */}
                  <div className="text-center mb-16 md:mb-20 scroll-trigger opacity-0 translate-y-10">
                    <span className="font-inter text-[14px] leading-[1.2] tracking-[0.3em] font-semibold text-secondary uppercase block mb-4">
                      QS. Ar-Rum: 21
                    </span>
                    <h2 className="font-playfair text-[40px] md:text-[56px] leading-[1.1] tracking-[-0.02em] font-bold text-on-surface mb-8">
                      Calon Mempelai
                    </h2>
                  </div>

                  {/* Quote */}
                  <QuoteSection />

                  {/* Profiles Grid */}
                  <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] items-center gap-12 lg:gap-8 mt-16">
                    {/* Groom */}
                    <ProfileCard
                      name="Swandi"
                      role="Mempelai Pria"
                      roleLabel="Putra dari"
                      fatherName="Basri"
                      motherName="Yati"
                      childOrder="Mempelai Pria"
                      imageSrc={GROOM_IMAGE}
                      imageAlt="Portrait of Swandi, the groom"
                      align="right"
                      animationClass="-translate-x-10"
                      delay="300ms"
                    />

                    {/* Middle Ornament */}
                    <MiddleOrnament />

                    {/* Bride */}
                    <ProfileCard
                      name="Dirawati"
                      role="Mempelai Wanita"
                      roleLabel="Putri dari"
                      fatherName="Asri"
                      motherName="Radia"
                      childOrder="Mempelai Wanita"
                      imageSrc={BRIDE_IMAGE}
                      imageAlt="Portrait of Dirawati, the bride"
                      align="left"
                      animationClass="translate-x-10"
                      delay="700ms"
                    />
                  </div>

                  {/* Decorative Ornament */}
                  <div
                    className="mt-24 flex justify-center items-center gap-8 scroll-trigger opacity-0 translate-y-10"
                    style={{ transitionDelay: "1000ms" }}
                  >
                    <div className="h-px w-24 md:w-48 bg-gradient-to-r from-transparent to-secondary/30" />
                    <div className="text-secondary opacity-50">
                      <span
                        className="material-symbols-outlined text-4xl"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        star
                      </span>
                    </div>
                    <div className="h-px w-24 md:w-48 bg-gradient-to-l from-transparent to-secondary/30" />
                  </div>
                </div>
              </section>

              {/* ==================== COUNTDOWN ==================== */}
              <section className="py-16 px-gutter">
                <div className="max-w-[1200px] mx-auto">
                  <CountdownTimer />
                </div>
              </section>

              {/* ==================== EVENTS ==================== */}
              <section className="py-section-gap px-gutter">
                <div className="max-w-[1200px] mx-auto">
                  {/* Section Header */}
                  <div className="text-center mb-16 scroll-trigger opacity-0 translate-y-10">
                    <span className="font-inter text-[14px] tracking-[0.3em] text-secondary uppercase font-semibold block mb-4">
                      Rangkaian Acara
                    </span>
                    <h2 className="font-playfair text-[40px] md:text-[56px] leading-[1.1] tracking-[-0.02em] font-bold text-on-surface">
                      Save The Date
                    </h2>
                  </div>

                  {/* Events Grid */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                    <EventSection
                      id="akad"
                      label="Akad Nikah"
                      title="Akad Nikah"
                      date="Senin, 10 Agustus 2026"
                      time="Pukul 10:00 WITA"
                      location="Jeneponto"
                      address="Kambang, Kab. Jeneponto, Sulawesi Selatan"
                      mapsUrl="https://maps.app.goo.gl/Q5isD39EB8PeXJm57?g_st=aw"
                      icon="mosque"
                      delay="200ms"
                    />
                    <EventSection
                      id="resepsi"
                      label="Resepsi Pernikahan"
                      title="Resepsi"
                      date="Selasa, 11 Agustus 2026"
                      time="Pukul 10:00 WITA"
                      location="Makassar"
                      address="Jln. Bontoduri 10, Blok 3, Makassar, Sulawesi Selatan"
                      mapsUrl="https://maps.app.goo.gl/Q5isD39EB8PeXJm57?g_st=aw"
                      icon="celebration"
                      delay="400ms"
                    />
                  </div>
                </div>
              </section>

              {/* ==================== GALLERY ==================== */}
              <GallerySection />

              {/* ==================== RSVP ==================== */}
              <RSVPSection />

              {/* ==================== UCAPAN & DOA ==================== */}
              <UcapanSection />

              {/* ==================== GIFT ==================== */}
              <GiftSection />

              {/* ==================== FOOTER ==================== */}
              <Footer />

              {/* Bottom Navigation (Mobile) */}
              <BottomNav activeSection={activeSection} />
            </>
          )}
        </div>
      </MessagesProvider>
    </MusicProvider>
  );
}
