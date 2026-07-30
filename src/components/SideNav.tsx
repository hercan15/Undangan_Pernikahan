interface SideNavProps {
  activeSection: string;
}

export default function SideNav({ activeSection }: SideNavProps) {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const items = [
    { id: 'couple', icon: 'favorite', label: 'Couple' },
    { id: 'akad', icon: 'mosque', label: 'Akad' },
    { id: 'resepsi', icon: 'celebration', label: 'Resepsi' },
    { id: 'rsvp', icon: 'mail', label: 'RSVP' },
    { id: 'gift', icon: 'redeem', label: 'Gift' },
  ];

  return (
    <aside className="hidden lg:flex fixed right-4 top-1/2 -translate-y-1/2 rounded-full w-14 bg-surface-container-lowest/60 backdrop-blur-2xl border border-secondary/15 flex-col items-center gap-1 py-4 shadow-2xl shadow-primary-container/20 z-50">
      {items.map((item) => (
        <button
          key={item.id}
          onClick={() => scrollTo(item.id)}
          title={item.label}
          className={`p-2.5 rounded-full transition-all duration-300 cursor-pointer ${
            activeSection === item.id
              ? 'bg-secondary text-on-secondary scale-110'
              : 'text-secondary/60 hover:bg-secondary/10 hover:text-secondary hover:scale-105'
          }`}
        >
          <span
            className="material-symbols-outlined text-[20px]"
            style={{ fontVariationSettings: activeSection === item.id ? "'FILL' 1" : "'FILL' 0" }}
          >
            {item.icon}
          </span>
        </button>
      ))}
    </aside>
  );
}
