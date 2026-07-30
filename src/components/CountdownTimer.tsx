import { useState, useEffect } from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const targetDate = new Date('2026-08-10T10:00:00+08:00').getTime();

    const update = () => {
      const now = new Date().getTime();
      const diff = targetDate - now;

      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((diff % (1000 * 60)) / 1000),
      });
    };

    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  const blocks = [
    { value: timeLeft.days, label: 'Hari' },
    { value: timeLeft.hours, label: 'Jam' },
    { value: timeLeft.minutes, label: 'Menit' },
    { value: timeLeft.seconds, label: 'Detik' },
  ];

  return (
    <div className="scroll-trigger opacity-0 translate-y-10">
      <div className="text-center mb-8">
        <span className="font-inter text-[14px] tracking-[0.3em] text-secondary uppercase font-semibold">
          Menghitung Hari
        </span>
      </div>
      <div className="flex justify-center gap-4 md:gap-6">
        {blocks.map((block, i) => (
          <div key={i} className="flex flex-col items-center">
            <div className="glass-card-static rounded-xl w-16 h-16 md:w-20 md:h-20 flex items-center justify-center mb-2">
              <span className="font-playfair text-[28px] md:text-[36px] font-bold text-secondary leading-none">
                {String(block.value).padStart(2, '0')}
              </span>
            </div>
            <span className="font-inter text-[11px] md:text-[12px] text-on-surface-variant uppercase tracking-wider">
              {block.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
