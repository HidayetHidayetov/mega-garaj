"use client";

import { useEffect, useRef, useState } from "react";

/* Scroll-reveal wrapper */
export function Reveal({
  children,
  className = "",
  delay = "",
}: {
  children: React.ReactNode;
  className?: string;
  delay?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      el.classList.add("is-visible");
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} className={`reveal ${delay} ${className}`}>
      {children}
    </div>
  );
}

/* Animated counter */
export function Counter({
  to,
  suffix = "",
  duration = 1600,
}: {
  to: number;
  suffix?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [val, setVal] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const run = () => {
      if (started.current) return;
      started.current = true;
      const t0 = performance.now();
      const tick = (t: number) => {
        const p = Math.min((t - t0) / duration, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        setVal(Math.round(eased * to));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };
    if (typeof IntersectionObserver === "undefined") {
      run();
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          run();
          io.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [to, duration]);

  return (
    <span ref={ref}>
      {val}
      {suffix}
    </span>
  );
}

/* Before / After slider — "before" is the same photo dulled with CSS */
export function BeforeAfter({ src, alt }: { src: string; alt: string }) {
  const [pos, setPos] = useState(50);
  const [w, setW] = useState<number | null>(null);
  const wrap = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = wrap.current;
    if (!el || typeof ResizeObserver === "undefined") return;
    const ro = new ResizeObserver(() => setW(el.offsetWidth));
    setW(el.offsetWidth);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const move = (clientX: number) => {
    const r = wrap.current?.getBoundingClientRect();
    if (!r) return;
    setPos(Math.min(96, Math.max(4, ((clientX - r.left) / r.width) * 100)));
  };

  return (
    <div
      ref={wrap}
      className="ba-wrap relative aspect-[16/10] cursor-ew-resize overflow-hidden rounded-3xl gold-border"
      onMouseMove={(e) => e.buttons === 1 && move(e.clientX)}
      onTouchMove={(e) => move(e.touches[0].clientX)}
      onMouseDown={(e) => move(e.clientX)}
    >
      {/* AFTER — vivid */}
      <img src={src} alt={alt} className="absolute inset-0 h-full w-full object-cover" draggable={false} />
      {/* BEFORE — dull/oxidized look */}
      <div className="absolute inset-0 overflow-hidden" style={{ width: `${pos}%` }}>
        <img
          src={src}
          alt=""
          aria-hidden
          draggable={false}
          className="h-full w-full object-cover"
          style={{
            width: w ? `${w}px` : "100%",
            maxWidth: "none",
            filter: "saturate(0.25) brightness(0.55) contrast(0.8)",
          }}
        />
        <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent_0_3px,rgba(0,0,0,0.25)_3px_4px)]" />
      </div>
      {/* handle */}
      <div className="absolute inset-y-0" style={{ left: `${pos}%` }}>
        <div className="absolute inset-y-0 -left-px w-0.5 bg-[#d4af37]" />
        <div className="ba-handle absolute top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d4af37] px-3 py-2 text-xs font-black text-black">
          ◀ ▶
        </div>
      </div>
      <span className="absolute left-4 top-4 rounded-full bg-black/70 px-3 py-1 text-xs font-bold text-neutral-300">
        ƏVVƏL
      </span>
      <span className="absolute right-4 top-4 rounded-full bg-[#d4af37] px-3 py-1 text-xs font-black text-black">
        SONRA
      </span>
    </div>
  );
}

/* FAQ accordion */
export function Faq({ items }: { items: [string, string][] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="space-y-3">
      {items.map(([q, a], i) => {
        const isOpen = open === i;
        return (
          <div key={q} className={`card rounded-2xl gold-border overflow-hidden ${isOpen ? "border-[#d4af37]/70" : ""}`}>
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-bold"
            >
              <span>{q}</span>
              <span className={`gold-text text-xl transition-transform ${isOpen ? "rotate-45" : ""}`}>+</span>
            </button>
            <div
              className="grid transition-all duration-300"
              style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
            >
              <div className="overflow-hidden">
                <p className="px-5 pb-5 text-sm leading-relaxed text-neutral-400">{a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
