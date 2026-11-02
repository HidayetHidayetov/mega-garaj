import type { Metadata } from "next";
import "./globals.css";
import { MobileNav } from "./mobile-nav";

export const metadata: Metadata = {
  title: "Mega Garaj — PPF, Rəngsaz, Detailing | Bakı",
  description:
    "Mega Garaj Bakı: PPF qoruyucu plyonka (7-8 il zəmanət), rəngsaz, polirovka, kimyəvi təmizləmə, avto çexol, bezshumka. Zəng: 050 325 66 76",
};

const PHONE = "050 325 66 76";
const WA = "https://wa.me/994503256676";

function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#d4af37]/20 bg-black/85 backdrop-blur">
      <div className="relative mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <a href="/" className="flex items-center gap-2 text-xl font-black tracking-wide">
          <img src="/mg-logo.svg" alt="Mega Garaj" className="h-9 w-9" />
          <span className="gold-text">MEGA GARAJ</span>
          <span className="ml-1 hidden text-xs font-medium text-neutral-400 sm:inline">
            detailing • Bakı
          </span>
        </a>
        <nav className="hidden gap-5 text-sm text-neutral-300 md:flex">
          <a href="/xidmetler/ppf">PPF</a>
          <a href="/qiymetler">Qiymətlər</a>
          <a href="/isler">İşlər</a>
          <a href="/blog">Blog</a>
          <a href="/elaqe">Əlaqə</a>
        </nav>
        <div className="flex items-center gap-2">
          <a href={`tel:+994503256676`} className="gold-btn rounded-full px-4 py-2 text-sm">
            {PHONE}
          </a>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}

function Footer() {
  const cols: [string, [string, string][]][] = [
    [
      "Xidmətlər",
      [
        ["PPF qoruyucu plyonka", "/xidmetler/ppf"],
        ["Rəngsaz / kuzov", "/qiymetler"],
        ["Polirovka / cilalanma", "/qiymetler"],
        ["Kimyəvi təmizləmə", "/qiymetler"],
        ["Avto çexol / bezshumka", "/qiymetler"],
      ],
    ],
    [
      "Sayt",
      [
        ["Qiymətlər", "/qiymetler"],
        ["Görülən işlər", "/isler"],
        ["Blog", "/blog"],
        ["Əlaqə", "/elaqe"],
      ],
    ],
  ];
  return (
    <footer className="border-t border-[#d4af37]/20 bg-[#070705]">
      {/* üst zolaq */}
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-[1.3fr_1fr_1fr_1.3fr]">
        <div>
          <div className="text-2xl font-black tracking-wide gold-text">MEGA GARAJ</div>
          <p className="mt-1 text-xs tracking-widest text-neutral-500">DETAILING • BAKI</p>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-neutral-400">
            PPF, rəngsaz, polirovka, kimyəvi təmizləmə, çexol, bezshumka —
            maşının bütün qayğısı bir ünvanda.
          </p>
          <div className="mt-5 flex gap-3">
            <a
              href="https://www.instagram.com/meqa_garaj/"
              aria-label="Instagram"
              className="flex h-10 w-10 items-center justify-center rounded-full gold-border text-[#f5d76e] transition hover:bg-[#d4af37] hover:text-black"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>
            </a>
            <a
              href="https://www.tiktok.com/@megagaraj1"
              aria-label="TikTok"
              className="flex h-10 w-10 items-center justify-center rounded-full gold-border text-[#f5d76e] transition hover:bg-[#d4af37] hover:text-black"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/></svg>
            </a>
            <a
              href={WA}
              aria-label="WhatsApp"
              className="flex h-10 w-10 items-center justify-center rounded-full gold-border text-[#f5d76e] transition hover:bg-[#d4af37] hover:text-black"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.5 14.4c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.5 0 1.47 1.07 2.89 1.22 3.09.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.7.63.71.22 1.36.19 1.87.11.57-.08 1.76-.72 2-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35M12.04 21.79h-.01a9.87 9.87 0 0 1-5-1.37l-.36-.21-3.74.98 1-3.65-.24-.37a9.86 9.86 0 0 1-1.51-5.26c0-5.45 4.44-9.88 9.9-9.88a9.83 9.83 0 0 1 6.99 2.9 9.82 9.82 0 0 1 2.9 7c0 5.45-4.45 9.86-9.89 9.86m8.42-18.29A11.82 11.82 0 0 0 12.05 0C5.5 0 .16 5.34.16 11.9c0 2.1.55 4.14 1.59 5.95L.06 24l6.3-1.65a11.9 11.9 0 0 0 5.68 1.45h.01c6.55 0 11.89-5.34 11.89-11.9 0-3.18-1.24-6.16-3.48-8.4"/></svg>
            </a>
          </div>
        </div>

        {cols.map(([title, links]) => (
          <div key={title}>
            <div className="text-sm font-black tracking-widest text-[#f5d76e]">{title}</div>
            <ul className="mt-4 space-y-2.5 text-sm text-neutral-400">
              {links.map(([t, h]) => (
                <li key={t}>
                  <a href={h} className="transition hover:text-[#f5d76e]">
                    {t}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <div className="text-sm font-black tracking-widest text-[#f5d76e]">ƏLAQƏ</div>
          <p className="mt-4 text-sm text-neutral-400">Tel / WhatsApp</p>
          <a href="tel:+994503256676" className="gold-text text-xl font-black">
            050 325 66 76
          </a>
          <p className="mt-3 text-sm text-neutral-400">
            Ünvan IG biodakı Waze linkində.
            <br />
            Hər gün aktivik — yaz, cavablayaq.
          </p>
          <a href={WA} className="gold-btn mt-4 inline-block rounded-full px-6 py-2.5 text-sm">
            WhatsApp-a yaz
          </a>
        </div>
      </div>

      {/* alt zolaq */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 py-5 text-xs text-neutral-500 sm:flex-row">
          <span>© 2026 Mega Garaj • Bütün hüquqlar qorunur</span>
          <a href="https://hidayetov.com" className="transition hover:text-[#f5d76e]">
            Created by <span className="font-bold text-[#f5d76e]">hidayetov.com</span>
          </a>
          <span className="flex items-center gap-1.5">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#d4af37]" />
            PPF • Rəngsaz • Detailing — Bakı
          </span>
        </div>
      </div>
    </footer>
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="az" suppressHydrationWarning>
      <body>
        <Nav />
        <main className="min-h-[70vh]">{children}</main>
        <Footer />
        <a
          href={WA}
          aria-label="WhatsApp ilə yaz"
          className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_rgba(37,211,102,0.45)] transition hover:scale-110"
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M17.5 14.4c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.5 0 1.47 1.07 2.89 1.22 3.09.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.7.63.71.22 1.36.19 1.87.11.57-.08 1.76-.72 2-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35M12.04 21.79h-.01a9.87 9.87 0 0 1-5-1.37l-.36-.21-3.74.98 1-3.65-.24-.37a9.86 9.86 0 0 1-1.51-5.26c0-5.45 4.44-9.88 9.9-9.88a9.83 9.83 0 0 1 6.99 2.9 9.82 9.82 0 0 1 2.9 7c0 5.45-4.45 9.86-9.89 9.86m8.42-18.29A11.82 11.82 0 0 0 12.05 0C5.5 0 .16 5.34.16 11.9c0 2.1.55 4.14 1.59 5.95L.06 24l6.3-1.65a11.9 11.9 0 0 0 5.68 1.45h.01c6.55 0 11.89-5.34 11.89-11.9 0-3.18-1.24-6.16-3.48-8.4"/></svg>
        </a>
      </body>
    </html>
  );
}
