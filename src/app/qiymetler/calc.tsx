"use client";

import { useState } from "react";

type Car = "Sedan" | "SUV";
type Svc = "polirovka" | "kimyevi" | "ppf-risk" | "ppf-tam" | "rengsaz" | "dam";

const services: { id: Svc; t: string }[] = [
  { id: "polirovka", t: "Polirovka" },
  { id: "kimyevi", t: "Kimyəvi təmizləmə" },
  { id: "ppf-risk", t: "PPF — risk zona" },
  { id: "ppf-tam", t: "PPF — tam kuzov" },
  { id: "rengsaz", t: "Rəngsaz" },
  { id: "dam", t: "Dam qara PPF" },
];

function estimate(car: Car, svc: Svc): [string, string] {
  switch (svc) {
    case "polirovka":
      return [car === "Sedan" ? "100 AZN" : "120 AZN", "Detallı set • 1 günə hazır"];
    case "kimyevi":
      return ["100 AZN-dən", "Detallı salon • dəri qulluğu daxil"];
    case "ppf-risk":
      return ["Baxışdan sonra", "Kapot + bamper + fara + güzgü • 7-8 il zəmanət"];
    case "ppf-tam":
      return ["Baxışdan sonra", "Bütün kuzov • 7-8 il zəmanət • 40% endirim dövrü"];
    case "rengsaz":
      return ["~600 AZN", "Real nümunə: 3 detal kraska + polirovka"];
    case "dam":
      return ["Aksiya ilə", "5 il zəmanət • fara + polirovka hədiyyəli ola bilər"];
  }
}

export function Calculator() {
  const [car, setCar] = useState<Car>("Sedan");
  const [svc, setSvc] = useState<Svc>("polirovka");
  const [price, note] = estimate(car, svc);

  const pill = (active: boolean) =>
    `rounded-full px-5 py-2.5 text-sm font-bold transition ${
      active
        ? "bg-[#d4af37] text-black"
        : "gold-border text-neutral-300 hover:text-[#f5d76e]"
    }`;

  return (
    <div className="card rounded-3xl gold-border p-6 md:p-10">
      <div className="text-xs font-bold tracking-[0.3em] text-[#d4af37]">TƏXMİNİ HESABLAMA</div>
      <h2 className="mt-2 text-2xl font-black md:text-3xl">30 saniyəyə qiyməti öyrən.</h2>

      <div className="mt-6">
        <div className="text-sm text-neutral-400">1 — Maşının tipi</div>
        <div className="mt-2 flex flex-wrap gap-2">
          {(["Sedan", "SUV"] as Car[]).map((c) => (
            <button key={c} onClick={() => setCar(c)} className={pill(car === c)}>
              {c}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-5">
        <div className="text-sm text-neutral-400">2 — Xidmət</div>
        <div className="mt-2 flex flex-wrap gap-2">
          {services.map((s) => (
            <button key={s.id} onClick={() => setSvc(s.id)} className={pill(svc === s.id)}>
              {s.t}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-8 flex flex-col items-start justify-between gap-5 border-t border-white/10 pt-6 sm:flex-row sm:items-center">
        <div>
          <div className="text-sm text-neutral-400">Təxmini qiymət</div>
          <div className="gold-text text-4xl font-black md:text-5xl">{price}</div>
          <div className="mt-1 text-sm text-neutral-400">{note}</div>
        </div>
        <a
          href={`https://wa.me/994503256676?text=Salam%2C%20${car}%20%C3%BC%C3%A7%C3%BCn%20t%C9%99xmini%20qiym%C9%99t%20${encodeURIComponent(price)}%20g%C3%B6rd%C3%BCm%2C%20d%C9%99qiq%20%C3%B6yr%C9%99nm%C9%99k%20ist%C9%99yir%C9%99m`}
          className="gold-btn shrink-0 rounded-full px-7 py-3.5"
        >
          Dəqiq qiymət al
        </a>
      </div>
    </div>
  );
}
