import { useMessages } from "../context/MessagesContext";

function initials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((n) => n[0]?.toUpperCase())
    .join("") || "🙋";
}

function formatTime(ts: number) {
  return new Date(ts).toLocaleTimeString("id-ID", {
    hour: "2-digit",
    minute: "2-digit",
  });
}

export default function UcapanSection() {
  const { messages } = useMessages();

  return (
    <section id="ucapan" className="py-section-gap px-gutter">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-8 scroll-trigger opacity-0 translate-y-10">
          <span className="font-inter text-[14px] tracking-[0.3em] text-secondary uppercase font-semibold block mb-4">
            Ucapan & Doa
          </span>
          <h2 className="font-playfair text-[36px] md:text-[44px] leading-[1.1] font-bold text-on-surface mb-3">
            {messages.length > 0
              ? `Dari Para Tamu (${messages.length})`
              : "Berikan Ucapan & Doa"}
          </h2>
          <p className="font-inter text-[15px] text-on-surface-variant max-w-md mx-auto">
            Pesan doa dan ucapan tamu yang telah mengirimkan konfirmasi kehadiran.
          </p>
        </div>

        {messages.length === 0 ? (
          <p className="font-inter text-[15px] text-on-surface-variant text-center max-w-lg mx-auto">
            Belum ada ucapan. Jadilah tamu pertama yang memberikan doa melalui
            form RSVP di atas.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className="glass-card-static rounded-2xl p-5 flex flex-col h-full scroll-trigger opacity-0 translate-y-10"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-secondary/20 border border-secondary/30 flex items-center justify-center">
                    <span className="font-inter text-[13px] font-semibold text-secondary">
                      {initials(msg.name)}
                    </span>
                  </div>
                  <div className="min-w-0">
                    <p className="font-inter text-[15px] font-semibold text-on-surface truncate">
                      {msg.name}
                    </p>
                    <p className="font-inter text-[12px] text-on-surface-variant">
                      {formatTime(msg.time)}
                    </p>
                  </div>
                </div>

                <span
                  className={`inline-flex items-center self-start px-2.5 py-1 rounded-full font-inter text-[11px] font-semibold mb-3 ${
                    msg.attendance === "hadir"
                      ? "bg-secondary/10 text-secondary border border-secondary/20"
                      : "bg-error/10 text-error border border-error/20"
                  }`}
                >
                  {msg.attendance === "hadir" ? "Hadir ✅" : "Tidak Hadir ❌"}
                  {msg.guests && ` · ${msg.guests} tamu`}
                </span>

                <p className="font-inter text-[14px] text-on-surface/80 leading-relaxed mt-auto break-words">
                  {msg.message}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
