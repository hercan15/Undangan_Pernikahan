interface BottomNavProps {
  activeSection: string;
}

export default function BottomNav({ activeSection }: BottomNavProps) {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const items = [
    { id: 'couple', icon: 'favorite', label: 'Couple' },
    { id: 'akad', icon: 'mosque', label: 'Akad' },
    { id: 'resepsi', icon: 'celebration', label: 'Resepsi' },
    { id: 'rsvp', icon: 'mail', label: 'RSVP' },
    { id: 'gallery', icon: 'photo_library', label: 'Galeri' },
    { id: 'ucapan', icon: 'forum', label: 'Ucapan' },
    { id: 'gift', icon: 'redeem', label: 'Gift' },
  ];

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-surface/85 backdrop-blur-xl border-t border-secondary/20 flex justify-around items-center py-2 px-2">
      {items.map((item) => (
        <button
          key={item.id}
          onClick={() => scrollTo(item.id)}
          className={`flex flex-col items-center gap-0.5 px-2 py-1 rounded-lg transition-colors cursor-pointer ${
            activeSection === item.id
              ? 'text-secondary'
              : 'text-on-surface-variant hover:text-secondary'
          }`}
        >
          <span
            className="material-symbols-outlined text-[22px]"
            style={{ fontVariationSettings: activeSection === item.id ? "'FILL' 1" : "'FILL' 0" }}
          >
            {item.icon}
          </span>
          <span className="text-[9px] uppercase tracking-tighter font-medium">{item.label}</span>
        </button>
      ))}
    </div>
  );
}
