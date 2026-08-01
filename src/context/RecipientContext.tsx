import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

interface RecipientContextType {
  recipient: string;
  greeting: string;
  setRecipient: (name: string) => void;
}

const RecipientContext = createContext<RecipientContextType | undefined>(undefined);

export function useRecipient() {
  const ctx = useContext(RecipientContext);
  if (!ctx) {
    throw new Error("useRecipient must be used within a RecipientProvider");
  }
  return ctx;
}

function getUrlRecipient(): string {
  if (typeof window === "undefined") return "";
  const params = new URLSearchParams(window.location.search);
  return params.get("to") || params.get("name") || params.get("guest") || "";
}

function getStoredRecipient(): string {
  if (typeof window === "undefined") return "";
  return localStorage.getItem("recipient") || "";
}

function setStoredRecipient(name: string) {
  if (typeof window === "undefined") return;
  if (name) {
    localStorage.setItem("recipient", name);
  } else {
    localStorage.removeItem("recipient");
  }
}

function updateUrlRecipient(name: string) {
  if (typeof window === "undefined") return;
  const params = new URLSearchParams(window.location.search);
  if (name) {
    params.set("to", name);
  } else {
    params.delete("to");
  }
  const newQuery = params.toString();
  const newUrl = newQuery
    ? `${window.location.pathname}?${newQuery}`
    : window.location.pathname;
  window.history.replaceState({}, "", newUrl);
}

export function RecipientProvider({ children }: { children: ReactNode }) {
  const [recipient, setRecipientState] = useState("");

  useEffect(() => {
    const fromUrl = getUrlRecipient();
    const fromStorage = getStoredRecipient();
    const initial = fromUrl || fromStorage || "";
    setRecipientState(initial);
  }, []);

  useEffect(() => {
    if (recipient) {
      setStoredRecipient(recipient);
      updateUrlRecipient(recipient);
    }
  }, [recipient]);

  const setRecipient = (name: string) => {
    setRecipientState(name);
  };

  const greeting = recipient || "Bapak/Ibu/Saudara/i";

  return (
    <RecipientContext.Provider value={{ recipient, greeting, setRecipient }}>
      {children}
    </RecipientContext.Provider>
  );
}
