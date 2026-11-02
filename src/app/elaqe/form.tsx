"use client";

import { useState } from "react";

const services = ["PPF", "Rəngsaz", "Polirovka", "Kimyəvi təmizləmə", "Çexol", "Bezshumka", "Məsləhət"];

export function QuickForm() {
  const [name, setName] = useState("");
  const [car, setCar] = useState("");
  const [svc, setSvc] = useState(services[0]);

  const href = `https://wa.me/994503256676?text=${encodeURIComponent(
    `Salam, mən ${name || "___"}. Maşın: ${car || "___"}. Maraqlandığım xidmət: ${svc}. Məlumat almaq istəyirəm.`
  )}`;

  const input =
    "w-full rounded-2xl border border-white/10 bg-black/50 px-4 py-3 text-sm text-neutral-100 placeholder:text-neutral-600 outline-none transition focus:border-[#d4af37]/70";

  return (
    <div className="card rounded-3xl gold-border p-6 md:p-8">
      <div className="text-xs font-bold tracking-[0.3em] text-[#d4af37]">TEZ SORĞU</div>
      <h2 className="mt-2 text-xl font-black">30 saniyəyə yazıl.</h2>
      <div className="mt-5 space-y-3">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Adın"
          className={input}
        />
        <input
          value={car}
          onChange={(e) => setCar(e.target.value)}
          placeholder="Maşının ili və modeli (məs: BMW G30 2020)"
          className={input}
        />
        <div className="flex flex-wrap gap-2">
          {services.map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => setSvc(s)}
              className={`rounded-full px-4 py-2 text-xs font-bold transition ${
                svc === s ? "bg-[#d4af37] text-black" : "gold-border text-neutral-400 hover:text-[#f5d76e]"
              }`}
            >
              {s}
            </button>
          ))}
        </div>
        <a href={href} className="gold-btn block rounded-2xl px-6 py-4 text-center">
          WhatsApp-a göndər
        </a>
        <p className="text-center text-xs text-neutral-500">
          Düymə WhatsApp-ı hazır mətnlə açır — göndər, vəssalam.
        </p>
      </div>
    </div>
  );
}
