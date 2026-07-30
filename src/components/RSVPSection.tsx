import { useState } from 'react';

export default function RSVPSection() {
  const [name, setName] = useState('');
  const [attendance, setAttendance] = useState('hadir');
  const [guests, setGuests] = useState('1');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const whatsappNumber = '6285823053679';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const attendanceText = attendance === 'hadir' ? 'Hadir ✅' : 'Tidak Hadir ❌';
    const text = `Assalamu'alaikum Wr. Wb.%0A%0ASaya mengonfirmasi kehadiran untuk pernikahan Andi & Dira:%0A%0ANama: ${encodeURIComponent(name)}%0AKehadiran: ${attendanceText}%0AJumlah Tamu: ${guests} orang%0APesan: ${encodeURIComponent(message || '-')}%0A%0ATerimakasih 🤲`;
    
    window.open(`https://wa.me/${whatsappNumber}?text=${text}`, '_blank');
    setSubmitted(true);
  };

  return (
    <section id="rsvp" className="py-section-gap px-gutter">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-12 scroll-trigger opacity-0 translate-y-10">
          <span className="font-inter text-[14px] tracking-[0.3em] text-secondary uppercase font-semibold block mb-4">
            Konfirmasi Kehadiran
          </span>
          <h2 className="font-playfair text-[40px] md:text-[48px] leading-[1.1] font-bold text-on-surface mb-4">
            RSVP
          </h2>
          <p className="font-inter text-[16px] text-on-surface-variant max-w-md mx-auto">
            Merupakan suatu kehormatan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu.
          </p>
        </div>

        <div className="max-w-lg mx-auto scroll-trigger opacity-0 translate-y-10" style={{ transitionDelay: '200ms' }}>
          {submitted ? (
            <div className="glass-card-static rounded-2xl p-10 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/20 mb-6">
                <span className="material-symbols-outlined text-secondary text-[32px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                  check_circle
                </span>
              </div>
              <h3 className="font-playfair text-[28px] text-secondary mb-3">Terima Kasih!</h3>
              <p className="font-inter text-[16px] text-on-surface-variant">
                Konfirmasi kehadiran Anda telah dikirim melalui WhatsApp.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-6 text-secondary underline font-inter text-[14px] hover:text-secondary/80 transition-colors cursor-pointer"
              >
                Kirim lagi
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="glass-card-static rounded-2xl p-8 md:p-10 space-y-6">
              {/* Name */}
              <div>
                <label className="font-inter text-[13px] tracking-[0.05em] text-on-surface-variant uppercase block mb-2 font-medium">
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  placeholder="Masukkan nama Anda"
                  className="w-full bg-surface-container border border-outline-variant/30 rounded-xl px-4 py-3 font-inter text-[16px] text-on-surface placeholder:text-on-surface-variant/40 transition-all"
                />
              </div>

              {/* Attendance */}
              <div>
                <label className="font-inter text-[13px] tracking-[0.05em] text-on-surface-variant uppercase block mb-2 font-medium">
                  Konfirmasi Kehadiran
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setAttendance('hadir')}
                    className={`flex items-center justify-center gap-2 py-3 rounded-xl border font-inter text-[14px] font-medium transition-all cursor-pointer ${
                      attendance === 'hadir'
                        ? 'bg-secondary/20 border-secondary text-secondary'
                        : 'bg-surface-container border-outline-variant/30 text-on-surface-variant hover:border-secondary/50'
                    }`}
                  >
                    <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                      check_circle
                    </span>
                    Hadir
                  </button>
                  <button
                    type="button"
                    onClick={() => setAttendance('tidak')}
                    className={`flex items-center justify-center gap-2 py-3 rounded-xl border font-inter text-[14px] font-medium transition-all cursor-pointer ${
                      attendance === 'tidak'
                        ? 'bg-error/10 border-error/50 text-error'
                        : 'bg-surface-container border-outline-variant/30 text-on-surface-variant hover:border-secondary/50'
                    }`}
                  >
                    <span className="material-symbols-outlined text-[18px]">cancel</span>
                    Tidak Hadir
                  </button>
                </div>
              </div>

              {/* Number of Guests */}
              {attendance === 'hadir' && (
                <div>
                  <label className="font-inter text-[13px] tracking-[0.05em] text-on-surface-variant uppercase block mb-2 font-medium">
                    Jumlah Tamu
                  </label>
                  <select
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                    className="w-full bg-surface-container border border-outline-variant/30 rounded-xl px-4 py-3 font-inter text-[16px] text-on-surface transition-all appearance-none cursor-pointer"
                  >
                    <option value="1">1 Orang</option>
                    <option value="2">2 Orang</option>
                    <option value="3">3 Orang</option>
                    <option value="4">4 Orang</option>
                    <option value="5">5 Orang</option>
                  </select>
                </div>
              )}

              {/* Message */}
              <div>
                <label className="font-inter text-[13px] tracking-[0.05em] text-on-surface-variant uppercase block mb-2 font-medium">
                  Ucapan & Doa
                </label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={3}
                  placeholder="Tuliskan ucapan & doa untuk kedua mempelai..."
                  className="w-full bg-surface-container border border-outline-variant/30 rounded-xl px-4 py-3 font-inter text-[16px] text-on-surface placeholder:text-on-surface-variant/40 transition-all resize-none"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-3 bg-secondary text-on-secondary py-4 rounded-xl font-inter text-[14px] tracking-[0.1em] font-semibold uppercase hover:opacity-90 active:scale-[0.98] transition-all cursor-pointer"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
                Kirim via WhatsApp
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
