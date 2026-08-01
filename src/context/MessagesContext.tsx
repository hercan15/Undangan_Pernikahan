import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { supabase } from "../utils/supabase";

export type Attendance = "hadir" | "tidak";

export interface GuestMessage {
  id: string;
  name: string;
  attendance: Attendance;
  guests?: string;
  message: string;
  time: number;
}

interface MessagesContextType {
  messages: GuestMessage[];
  addMessage: (msg: {
    name: string;
    attendance: Attendance;
    guests?: string;
    message: string;
  }) => Promise<void>;
  loading: boolean;
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
  const [messages, setMessages] = useState<GuestMessage[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    try {
      const { data, error } = await supabase
        .from("guest_messages")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;

      const formatted: GuestMessage[] = (data || []).map((row: any) => ({
        id: row.id,
        name: row.name,
        attendance: row.attendance,
        guests: row.guests || undefined,
        message: row.message,
        time: new Date(row.created_at).getTime(),
      }));

      setMessages(formatted);
    } catch (err) {
      console.error("Failed to fetch messages:", err);
    } finally {
      setLoading(false);
    }
  };

  const addMessage = async (msg: {
    name: string;
    attendance: Attendance;
    guests?: string;
    message: string;
  }) => {
    const entry = {
      name: msg.name.trim(),
      attendance: msg.attendance,
      guests: msg.attendance === "hadir" ? msg.guests || "1" : null,
      message: msg.message.trim() || "-",
    };

    const { data, error } = await supabase
      .from("guest_messages")
      .insert([entry])
      .select()
      .single();

    if (error) throw error;

    const newMessage: GuestMessage = {
      id: data.id,
      name: data.name,
      attendance: data.attendance,
      guests: data.guests || undefined,
      message: data.message,
      time: new Date(data.created_at).getTime(),
    };

    setMessages((prev) => [newMessage, ...prev]);
  };

  return (
    <MessagesContext.Provider value={{ messages, addMessage, loading }}>
      {children}
    </MessagesContext.Provider>
  );
}
