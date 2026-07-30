import { useState, useRef, useEffect } from 'react';

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Create audio element
    const audio = new Audio();
    // Use a placeholder - in production this would be the actual song URL
    // "Selamanya Cinta" by Bunga Citra Lestari
    audio.loop = true;
    audio.volume = 0.3;
    audioRef.current = audio;

    return () => {
      audio.pause();
      audio.src = '';
    };
  }, []);

  const togglePlay = () => {
    if (!hasInteracted) {
      setHasInteracted(true);
    }

    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(() => {
          // Audio play failed, likely no source
        });
      }
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <button
      onClick={togglePlay}
      className="fixed bottom-20 md:bottom-6 left-4 md:left-6 z-50 group cursor-pointer"
      title={isPlaying ? 'Pause Music' : 'Play Music - Selamanya Cinta (BCL)'}
    >
      <div className="relative flex items-center gap-2">
        {/* Main button */}
        <div className={`w-12 h-12 rounded-full flex items-center justify-center border transition-all duration-300 ${
          isPlaying 
            ? 'bg-secondary/20 border-secondary/50 shadow-lg shadow-secondary/20' 
            : 'bg-surface-container border-secondary/30 hover:border-secondary/60'
        }`}>
          {isPlaying ? (
            <div className="flex items-center gap-[3px] h-5">
              <div className="music-bar" />
              <div className="music-bar" />
              <div className="music-bar" />
              <div className="music-bar" />
            </div>
          ) : (
            <span className="material-symbols-outlined text-secondary text-[22px]" style={{ fontVariationSettings: "'FILL' 1" }}>
              music_note
            </span>
          )}
        </div>

        {/* Song label - hidden on mobile for space */}
        {!hasInteracted && (
          <div className="hidden md:block bg-surface-container/90 backdrop-blur-md border border-secondary/20 rounded-lg px-3 py-2 animate-pulse">
            <p className="font-inter text-[11px] text-secondary whitespace-nowrap">
              🎵 Putar Musik
            </p>
          </div>
        )}
      </div>
    </button>
  );
}
