import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PPF Bakı — Qiymət, 7-8 il zəmanət | Mega Garaj",
  description:
    "Bakıda PPF qoruyucu plyonka: premium material, plotter kəsim, 7-8 il rəsmi zəmanət, 40% endirim. Mega Garaj — 050 325 66 76",
};

const WA = "https://wa.me/994503256676?text=Salam%2C%20PPF%20qiym%C9%99t%20almaq%20ist%C9%99yir%C9%99m";

export default function PPF() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="text-3xl font-black md:text-5xl">
        PPF qoruyucu plyonka <span className="gold-text">Bakıda</span>
      </h1>
      <p className="mt-4 text-neutral-300">
        PPF (Paint Protection Film) — daş zərbələri, cızıqlar və günəşdən
        qoruyan şəffaf poliuretan plyonka. Mega Garaj premium material + peşəkar
        quraşdırma (plotter kəsim, ideal yapışma) ilə <b>7-8 il rəsmi zəmanət</b> verir.
      </p>
      <div className="mt-6 grid gap-3 md:grid-cols-3">
        {[
          ["Premium PPF", "Ən yüksək seqment material"],
          ["Plotter kəsim", "Qiq/kompüter kəsimi, izsiz"],
          ["7-8 il zəmanət", "Rəsmi, yazılı"],
        ].map(([a, b]) => (
          <div key={a} className="card gold-border rounded-2xl p-4">
            <div className="font-bold gold-text">{a}</div>
            <div className="text-sm text-neutral-400">{b}</div>
          </div>
        ))}
      </div>
      <h2 className="mt-10 text-2xl font-black">Tez-tez verilən suallar</h2>
      <div className="mt-4 space-y-3 text-neutral-300">
        <p><b>PPF saralırmı?</b> — Keyfiyyətli PPF-də bəli funksiyası olur, saralma minimaldır. Materialı soruşun.</p>
        <p><b>Qiymət necə hesablanır?</b> — Risk zona / tam kuzov / detal sayı ilə. Dəqiq qiymət üçün WhatsApp-a maşının ili + modelini yazın.</p>
        <p><b>Zəmanətə nə daxildir?</b> — Qabarma, qopma, saralma (şərtlər usta ilə dəqiqləşir, yazılı alın).</p>
      </div>
      <div className="mt-8 flex flex-wrap gap-3">
        <a href={WA} className="gold-btn rounded-full px-6 py-3">PPF qiyməti al</a>
        <a href="https://www.instagram.com/meqa_garaj/" className="rounded-full gold-border px-6 py-3 text-[#f5d76e]">
          PPF işlərinə bax (IG)
        </a>
      </div>
      <p className="mt-6 text-xs text-neutral-500">
        Qeyd: qiymət və kampaniyalar (40% endirim) dövri dəyişir — aktual qiyməti telefonda dəqiqləşdirin: 050 325 66 76.
      </p>
    </div>
  );
}
