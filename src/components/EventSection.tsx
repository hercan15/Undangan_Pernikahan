interface EventSectionProps {
  id: string;
  label: string;
  title: string;
  date: string;
  time: string;
  location: string;
  address: string;
  mapsUrl: string;
  icon: string;
  delay?: string;
}

export default function EventSection({
  id,
  label,
  title,
  date,
  time,
  location,
  address,
  mapsUrl,
  icon,
  delay = '0ms',
}: EventSectionProps) {
  return (
    <div
      id={id}
      className="scroll-trigger opacity-0 translate-y-10 w-full max-w-lg mx-auto"
      style={{ transitionDelay: delay }}
    >
      <div className="glass-card-static rounded-2xl p-8 md:p-10 text-center relative overflow-hidden gold-shimmer">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-container/5 to-transparent pointer-events-none" />

        <div className="relative z-10">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/10 border border-secondary/20 mb-6">
            <span
              className="material-symbols-outlined text-secondary text-[32px]"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              {icon}
            </span>
          </div>

          {/* Label */}
          <span className="font-inter text-[12px] tracking-[0.3em] text-secondary uppercase font-semibold block mb-2">
            {label}
          </span>

          {/* Title */}
          <h3 className="font-playfair text-[32px] md:text-[36px] leading-[1.2] font-semibold text-on-surface mb-6">
            {title}
          </h3>

          {/* Divider */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-secondary/30" />
            <span className="material-symbols-outlined text-secondary text-[16px] opacity-50" style={{ fontVariationSettings: "'FILL' 1" }}>
              star
            </span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-secondary/30" />
          </div>

          {/* Details */}
          <div className="space-y-4">
            <div className="flex items-center justify-center gap-3">
              <span className="material-symbols-outlined text-secondary/70 text-[20px]">calendar_month</span>
              <p className="font-inter text-[16px] md:text-[18px] text-on-surface font-medium">{date}</p>
            </div>
            <div className="flex items-center justify-center gap-3">
              <span className="material-symbols-outlined text-secondary/70 text-[20px]">schedule</span>
              <p className="font-inter text-[16px] md:text-[18px] text-on-surface font-medium">{time}</p>
            </div>
            <div className="flex items-center justify-center gap-3">
              <span className="material-symbols-outlined text-secondary/70 text-[20px]">location_on</span>
              <p className="font-inter text-[16px] md:text-[18px] text-on-surface font-medium">{location}</p>
            </div>
            <p className="font-inter text-[14px] text-on-surface-variant leading-relaxed mt-2">
              {address}
            </p>
          </div>

          {/* Google Maps Button */}
          <a
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-8 bg-secondary/10 border border-secondary/30 text-secondary px-6 py-3 rounded-full font-inter text-[13px] tracking-[0.1em] font-semibold uppercase hover:bg-secondary hover:text-on-secondary transition-all duration-300"
          >
            <span className="material-symbols-outlined text-[18px]">map</span>
            Buka Google Maps
          </a>
        </div>
      </div>
    </div>
  );
}
