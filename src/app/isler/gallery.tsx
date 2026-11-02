"use client";

import { useState } from "react";

type Cat = "Hamısı" | "PPF" | "Rəngsaz" | "Polirovka" | "Salon";

const cats: Cat[] = ["Hamısı", "PPF", "Rəngsaz", "Polirovka", "Salon"];

const works: { src: string; t: string; s: string; cat: Exclude<Cat, "Hamısı">; wide?: boolean }[] = [
  { src: "/images/gallery-red.jpg", t: "Tam kuzov rəngsaz + PPF", s: "AMG GT • 7 gün", cat: "Rəngsaz", wide: true },
  { src: "/images/ppf-panamera.jpg", t: "Risk zona PPF", s: "Panamera • 1 gün", cat: "PPF" },
  { src: "/images/hero-yellow.jpg", t: "Polirovka + faralar", s: "AMG GT • güzgü effekti", cat: "Polirovka" },
  { src: "/images/showroom-ferrari.jpg", t: "Showroom təhvili", s: "LaFerrari • tam paket", cat: "PPF" },
  { src: "/images/gallery-night.jpg", t: "Polirovka + keramika", s: "BMW 7 • dərin parıltı", cat: "Polirovka" },
  { src: "/images/gallery-blue.jpg", t: "Rəng dəyişimi — vinil", s: "Camaro • mat qara dam", cat: "Rəngsaz" },
  { src: "/images/hero-garage.jpg", t: "Seximizdən kadr", s: "Bakıda tozsuz sex", cat: "Salon", wide: true },
];

export function WorksGrid() {
  const [cat, setCat] = useState<Cat>("Hamısı");
  const list = works.filter((w) => cat === "Hamısı" || w.cat === cat);

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {cats.map((c) => (
          <button
            key={c}
            onClick={() => setCat(c)}
            className={`rounded-full px-5 py-2.5 text-sm font-bold transition ${
              cat === c
                ? "bg-[#d4af37] text-black"
                : "gold-border text-neutral-300 hover:text-[#f5d76e]"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <div key={cat} className="anim-fade-up mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((w) => (
          <div
            key={w.src}
            className={`zoom-img group relative overflow-hidden rounded-3xl gold-border ${
              w.wide ? "h-72 sm:col-span-2 lg:col-span-2" : "h-72"
            }`}
          >
            <img src={w.src} alt={`${w.t} — ${w.s}`} className="h-full w-full object-cover" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent" />
            <span className="absolute left-4 top-4 rounded-full bg-black/70 px-3 py-1 text-[11px] font-bold tracking-widest text-[#f5d76e] backdrop-blur">
              {w.cat.toUpperCase()}
            </span>
            <div className="absolute bottom-4 left-4 right-4">
              <div className="font-black">{w.t}</div>
              <div className="text-xs text-[#f5d76e]">{w.s}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
