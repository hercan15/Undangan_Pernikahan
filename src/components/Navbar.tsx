import { useState, useEffect } from 'react';

interface NavbarProps {
  activeSection: string;
}

export default function Navbar({ activeSection }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'couple', label: 'The Couple' },
    { id: 'akad', label: 'Akad Nikah' },
    { id: 'resepsi', label: 'Resepsi' },
    { id: 'rsvp', label: 'RSVP' },
    { id: 'gallery', label: 'Galeri Photo' },
    { id: 'ucapan', label: 'Ucapan & Doa' },
  ];

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 border-b transition-all duration-500 ${
      scrolled 
        ? 'bg-surface/80 backdrop-blur-xl border-secondary/20' 
        : 'bg-transparent backdrop-blur-sm border-transparent'
    }`}>
      <div className="flex justify-between items-center px-gutter py-4 max-w-[1200px] mx-auto">
        <button 
          onClick={() => scrollTo('hero')}
          className="font-playfair text-[24px] md:text-[28px] leading-[1.3] font-medium text-secondary tracking-widest cursor-pointer"
        >
          Andi & Dira
        </button>
        <div className="hidden md:flex gap-6 items-center">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className={`font-inter text-[13px] leading-[1.2] tracking-[0.1em] font-semibold uppercase transition-colors cursor-pointer ${
                activeSection === link.id
                  ? 'text-secondary border-b-2 border-secondary pb-1'
                  : 'text-on-surface/70 hover:text-secondary'
              }`}
            >
              {link.label}
            </button>
          ))}
          <button 
            onClick={() => scrollTo('rsvp')}
            className="bg-secondary text-on-secondary px-6 py-2 rounded-full font-inter text-[13px] leading-[1.2] tracking-[0.1em] font-semibold uppercase active:scale-95 transition-transform hover:opacity-90 cursor-pointer"
          >
            RSVP
          </button>
        </div>
        <div className="md:hidden cursor-pointer" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          <span className="material-symbols-outlined text-secondary text-[28px]">
            {mobileMenuOpen ? 'close' : 'menu'}
          </span>
        </div>
      </div>
      {/* Mobile Menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${
        mobileMenuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="bg-surface/95 backdrop-blur-xl border-b border-secondary/20 px-gutter py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className={`text-left font-inter text-[14px] tracking-[0.1em] uppercase transition-colors cursor-pointer ${
                activeSection === link.id ? 'text-secondary font-bold' : 'text-on-surface/80 hover:text-secondary'
              }`}
            >
              {link.label}
            </button>
          ))}
          <button 
            onClick={() => scrollTo('rsvp')}
            className="bg-secondary text-on-secondary px-6 py-2 rounded-full font-inter text-[14px] tracking-[0.1em] font-semibold uppercase w-fit cursor-pointer"
          >
            RSVP
          </button>
        </div>
      </div>
    </nav>
  );
}
