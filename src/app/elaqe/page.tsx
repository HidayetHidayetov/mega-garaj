import { QuickForm } from "./form";
import { Reveal } from "@/components/ui";

const WA = "https://wa.me/994503256676";
const IG = "https://www.instagram.com/meqa_garaj/";

const channels: [string, string, string, string][] = [
  ["Zəng et", "050 325 66 76", "Birbaşa danışaq", "tel:+994503256676"],
  ["WhatsApp", "Tez cavab", "Adətən 10 dəqiqəyə", WA],
  ["Instagram", "@meqa_garaj", "İşlərə bax, sonra yaz", IG],
];

export default function Elaqe() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-14 md:py-20">
      <Reveal>
        <div className="text-xs font-bold tracking-[0.3em] text-[#d4af37]">ƏLAQƏ</div>
        <h1 className="mt-2 max-w-2xl text-4xl font-black md:text-6xl">
          Gəl, bax, <span className="gold-text">sonra qərar ver.</span>
        </h1>
        <p className="mt-4 max-w-xl leading-relaxed text-neutral-400">
          Baxış ödənişsizdir. Sənə uyğun kanal seç — hansı rahatdırsa ordan yaz.
        </p>
      </Reveal>

      <div className="mt-10 grid gap-5 lg:grid-cols-2">
        <div className="flex flex-col gap-4">
          {channels.map(([t, b, s, h], i) => (
            <Reveal key={t} delay={i === 1 ? "reveal-d1" : i === 2 ? "reveal-d2" : ""} className="flex-1">
              <a
                href={h}
                className="group flex h-full items-center justify-between gap-4 rounded-3xl gold-border bg-[#111] p-6 transition hover:border-[#d4af37]/70"
              >
                <div>
                  <div className="text-sm text-neutral-400">{t}</div>
                  <div className="gold-text mt-0.5 text-2xl font-black">{b}</div>
                  <div className="mt-1 text-sm text-neutral-500">{s}</div>
                </div>
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#d4af37] text-xl font-black text-black transition group-hover:translate-x-1">
                  →
                </div>
              </a>
            </Reveal>
          ))}

          <Reveal delay="reveal-d1">
            <div className="flex items-center justify-between gap-4 rounded-3xl border border-white/10 bg-[#0d0c07] p-6">
              <div>
                <div className="text-sm text-neutral-400">Ünvan</div>
                <div className="mt-0.5 font-bold">Bakı — dəqiq lokasiya üçün yaz</div>
                <div className="mt-1 text-sm text-neutral-500">Hər gün • zəng və WhatsApp aktivdir</div>
              </div>
              <div className="flex shrink-0 gap-2">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=meqa+garaj+baku+detailing"
                  className="rounded-full gold-border px-4 py-2 text-xs font-bold text-[#f5d76e]"
                >
                  Maps
                </a>
                <a
                  href={IG}
                  className="rounded-full gold-border px-4 py-2 text-xs font-bold text-[#f5d76e]"
                >
                  Waze (bio-da)
                </a>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay="reveal-d1" className="h-full">
          <QuickForm />
        </Reveal>
      </div>
    </div>
  );
}
