import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import MUSIC_SRC from "@assets/Lagu1.weba";

interface MusicContextType {
  isPlaying: boolean;
  hasInteracted: boolean;
  play: () => void;
  pause: () => void;
  toggle: () => void;
}

const MusicContext = createContext<MusicContextType | undefined>(undefined);

export function useMusic() {
  const ctx = useContext(MusicContext);
  if (!ctx) {
    throw new Error("useMusic must be used within a MusicProvider");
  }
  return ctx;
}

export function MusicProvider({ children }: { children: ReactNode }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = new Audio(MUSIC_SRC);
    audio.loop = true;
    audio.volume = 0.3;
    audioRef.current = audio;

    return () => {
      audio.pause();
      audio.src = "";
    };
  }, []);

  const play = () => {
    if (!hasInteracted) {
      setHasInteracted(true);
    }
    audioRef.current?.play().catch(() => {});
    setIsPlaying(true);
  };

  const pause = () => {
    audioRef.current?.pause();
    setIsPlaying(false);
  };

  const toggle = () => {
    if (isPlaying) {
      pause();
    } else {
      play();
    }
  };

  return (
    <MusicContext.Provider
      value={{ isPlaying, hasInteracted, play, pause, toggle }}
    >
      {children}
    </MusicContext.Provider>
  );
}
