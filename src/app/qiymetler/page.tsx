import { Calculator } from "./calc";
import { Reveal } from "@/components/ui";

const rows: [string, string, string][] = [
  ["Polirovka seti — sedan", "100 AZN", "Güzgü effekti, 1 günə"],
  ["Polirovka seti — SUV", "120 AZN", "Güzgü effekti, 1 günə"],
  ["Kimyəvi təmizləmə", "100 AZN-dən", "Dərindən salon + dəri qulluğu"],
  ["PPF — risk zona", "Baxışdan sonra", "7-8 il zəmanət"],
  ["PPF — tam kuzov", "Baxışdan sonra", "7-8 il zəmanət • 40% endirim dövrü"],
  ["Rəngsaz (detal)", "~600 AZN", "Nümunə: 3 detal + polirovka"],
  ["Dam qara PPF", "Aksiya ilə", "5 il zəmanət • hədiyyəli ola bilər"],
];

export default function Qiymetler() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-14 md:py-20">
      <Reveal>
        <div className="text-xs font-bold tracking-[0.3em] text-[#d4af37]">QİYMƏT</div>
        <h1 className="mt-2 text-4xl font-black md:text-6xl">
          Sadə və <span className="gold-text">aydın.</span>
        </h1>
        <p className="mt-4 max-w-xl leading-relaxed text-neutral-400">
          Gizli xərc yoxdur. Aşağıda təxmini hesabla, dəqiq rəqəmi baxışdan
          sonra deyirik — baxış ödənişsizdir.
        </p>
      </Reveal>

      <Reveal delay="reveal-d1" className="mt-10">
        <Calculator />
      </Reveal>

      <div className="mt-12">
        {rows.map(([a, b, c], i) => (
          <Reveal key={a} delay={i % 2 ? "reveal-d1" : ""}>
            <div className="group flex items-baseline justify-between gap-4 border-b border-white/10 py-5 transition hover:border-[#d4af37]/50">
              <div>
                <div className="font-bold transition group-hover:text-[#f5d76e]">{a}</div>
                <div className="mt-0.5 text-sm text-neutral-500">{c}</div>
              </div>
              <div className="gold-text shrink-0 text-xl font-black md:text-2xl">{b}</div>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-10 text-center">
        <p className="text-sm text-neutral-500">
          PPF qiyməti maşından maşına dəyişir — telefonda təxmini aralıq deyirik.
        </p>
        <div className="mt-4 flex flex-wrap justify-center gap-3">
          <a
            href="https://wa.me/994503256676?text=Salam%2C%20qiym%C9%99t%20%C3%B6yr%C9%99nm%C9%99k%20ist%C9%99yir%C9%99m"
            className="gold-btn rounded-full px-8 py-3.5"
          >
            WhatsApp-da soruş
          </a>
          <a href="tel:+994503256676" className="rounded-full gold-border px-8 py-3.5 text-[#f5d76e]">
            050 325 66 76
          </a>
        </div>
      </Reveal>
    </div>
  );
}
