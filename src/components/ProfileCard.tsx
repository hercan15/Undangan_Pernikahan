import InstagramIcon from './InstagramIcon';

interface ProfileCardProps {
  name: string;
  role: string;
  roleLabel: string;
  fatherName: string;
  motherName: string;
  childOrder: string;
  imageSrc: string;
  imageAlt: string;
  align: 'left' | 'right';
  animationClass: string;
  delay: string;
}

export default function ProfileCard({
  name,
  role,
  roleLabel,
  fatherName,
  motherName,
  childOrder,
  imageSrc,
  imageAlt,
  align,
  animationClass,
  delay,
}: ProfileCardProps) {
  const isGroom = align === 'right';

  return (
    <div
      className={`flex flex-col items-center ${
        isGroom ? 'lg:items-end' : 'lg:items-start'
      } text-center ${
        isGroom ? 'lg:text-right' : 'lg:text-left'
      } scroll-trigger opacity-0 ${animationClass}`}
      style={{ transitionDelay: delay }}
    >
      <div className="group relative mb-8">
        <div className="absolute -inset-1 bg-gradient-to-tr from-secondary/50 to-primary/30 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000" />
        <div className="glass-card relative rounded-2xl overflow-hidden w-64 h-80 md:w-72 md:h-96 gold-shimmer">
          <img
            className="w-full h-full object-cover relative z-0"
            alt={imageAlt}
            src={imageSrc}
          />
        </div>
        <a
          className={`absolute bottom-4 ${
            isGroom ? 'right-4' : 'left-4'
          } bg-surface-container-high/80 backdrop-blur-md p-2 rounded-full border border-secondary/30 hover:bg-secondary hover:text-on-secondary transition-all z-10`}
          href="#"
        >
          <InstagramIcon />
        </a>
      </div>

      {/* Name */}
      <h2 className="font-playfair text-[36px] md:text-[40px] leading-[1.2] font-semibold text-secondary mb-2">
        {name}
      </h2>

      {/* Role */}
      <p className="font-inter text-[13px] leading-[1.2] tracking-[0.15em] font-semibold text-on-surface-variant mb-1 uppercase">
        {role}
      </p>

      {/* Child order */}
      <p className="font-inter text-[14px] text-on-surface/50 mb-2 italic">
        {childOrder}
      </p>

      {/* Parents */}
      <div className="font-inter text-[15px] leading-[1.7] text-on-surface/60 max-w-xs">
        <p>{roleLabel}</p>
        <p>Bapak <span className="text-on-surface/80 font-medium">{fatherName}</span></p>
        <p>&amp; Ibu <span className="text-on-surface/80 font-medium">{motherName}</span></p>
      </div>
    </div>
  );
}
