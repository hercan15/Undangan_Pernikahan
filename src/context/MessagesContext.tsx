import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

export type Attendance = "hadir" | "tidak";

export interface GuestMessage {
  id: string;
  name: string;
  attendance: Attendance;
  guests?: string;
  message: string;
  time: number;
}

const STORAGE_KEY = "rsvp_messages";

function loadMessages(): GuestMessage[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as GuestMessage[]) : [];
  } catch {
    return [];
  }
}

function saveMessages(msgs: GuestMessage[]) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(msgs));
  } catch {}
}

interface MessagesContextType {
  messages: GuestMessage[];
  addMessage: (msg: {
    name: string;
    attendance: Attendance;
    guests?: string;
    message: string;
  }) => void;
}

const MessagesContext = createContext<MessagesContextType | undefined>(undefined);

export function useMessages() {
  const ctx = useContext(MessagesContext);
  if (!ctx) {
    throw new Error("useMessages must be used within a MessagesProvider");
  }
  return ctx;
}

export function MessagesProvider({ children }: { children: ReactNode }) {
  const [messages, setMessages] = useState<GuestMessage[]>(() => loadMessages());

  useEffect(() => {
    saveMessages(messages);
  }, [messages]);

  const addMessage = (msg: {
    name: string;
    attendance: Attendance;
    guests?: string;
    message: string;
  }) => {
    const entry: GuestMessage = {
      id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
      name: msg.name.trim(),
      attendance: msg.attendance,
      guests: msg.guests,
      message: msg.message.trim() || "-",
      time: Date.now(),
    };
    setMessages((prev) => [entry, ...prev]);
  };

  return (
    <MessagesContext.Provider value={{ messages, addMessage }}>
      {children}
    </MessagesContext.Provider>
  );
}
