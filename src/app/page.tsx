import { BeforeAfter, Counter, Faq, Reveal } from "@/components/ui";

const WA =
  "https://wa.me/994503256676?text=Salam%2C%20Mega%20Garaj%20—%20m%C9%99lumat%20almaq%20ist%C9%99yir%C9%99m";
const IG = "https://www.instagram.com/meqa_garaj/";

const marquee = [
  "PPF QORUYUCU",
  "RƏNGSAZ",
  "POLİROVKA",
  "KİMYƏVİ TƏMİZLƏMƏ",
  "AVTO ÇEXOL",
  "BEZSHUMKA",
  "VİNİL",
  "FARA PLYONKASI",
];

const services = [
  {
    t: "PPF qoruyucu plyonka",
    d: "Premium material, plotter kəsim, 7-8 il rəsmi zəmanət. Daş zərbəsi, cızıq, günəş — hamısına qalxan.",
    img: "/images/ppf-panamera.jpg",
    href: "/xidmetler/ppf",
    tag: "ƏSAS XİDMƏT",
  },
  {
    t: "Rəngsaz / kuzov",
    d: "Detaldan tam kuzova qədər — W221/W223, G-Class təcrübəsi, zavod rəngi ilə tam uyğunluq.",
    img: "/images/gallery-red.jpg",
    href: "/qiymetler",
    tag: "KUZA",
  },
  {
    t: "Polirovka / cilalanma",
    d: "Detallı set: sedan 100 / SUV 120 AZN. Güzgü effekti, fara + polirovka hədiyyəli aksiyalar.",
    img: "/images/hero-yellow.jpg",
    href: "/qiymetler",
    tag: "PARLAQLIQ",
  },
  {
    t: "Kimyəvi təmizləmə",
    d: "Salon dərindən — oturacaq, tavan, döşəmə. 100 AZN-dən başlayan detallı paketlər.",
    img: "/images/gallery-night.jpg",
    href: "/qiymetler",
    tag: "SALON",
  },
  {
    t: "Avto çexol / interyer",
    d: "Salonun dəri ilə yığılması — oturacaqlar, qapı üzlükləri, sükan.",
    img: "/images/showroom-ferrari.jpg",
    href: "/qiymetler",
    tag: "DƏRİ",
  },
  {
    t: "Bezshumka",
    d: "Səs izolyasiyası — yol səsini kəsir, sürüşü sakit və premium edir.",
    img: "/images/gallery-blue.jpg",
    href: "/qiymetler",
    tag: "KOMFORT",
  },
];

const steps = [
  ["01", "Baxış + məsləhət", "Maşına baxırıq, ehtiyacı deyirik. Lazımsız işi sırımıriq — nə lazımdırsa onu."],
  ["02", "Hazırlıq", "Yuma, gil təmizliyi, dəmir tozu — səth ideal vəziyyətə gətirilir."],
  ["03", "Tətbiq", "PPF / rəng / polirovka — tozsuz sexdə, peşəkar əllə."],
  ["04", "Təhvil + zəmanət", "Birlikdə yoxlayırıq, qulluq qaydalarını deyirik, zəmanəti yazırıq."],
];

const faqs: [string, string][] = [
  ["PPF nədir, keramikadan fərqi nədir?", "PPF fiziki plyonkadır — daş zərbəsini, cızıqları həqiqətən udur və özünü bərpa edir (self-healing). Keramika parıltı + su itələmə verir, amma zərbədən qorumur. Maksimum qoruma istəyirsinizsə — PPF."],
  ["PPF saralırmı?", "Keyfiyyətli TPU PPF-də saralma minimaldır. Mega Garaj ən yüksək seqment materialdan istifadə etdiyini bildirir və 7-8 il rəsmi zəmanət verir — şərti ustadan yazılı alın."],
  ["Qiymət necə hesablanır?", "Risk zona (kapot, bamper, fara, güzgü) / tam kuzov / ayrı-ayrı detallar ilə. Dəqiq rəqəm üçün WhatsApp-a maşının ilini, modelini və istədiyiniz zonanı yazın — 10 dəqiqəyə cavab."],
  ["Nə qədər vaxt aparır?", "Risk zona adətən 1 gün, tam kuzov PPF 3-5 gün, polirovka seti 1 gün. Dəqiq müddət baxışdan sonra deyilir."],
  ["Zəmanətə nə daxildir?", "Qabarma, qopma, kənar açılma, saralma (şərtlər materialdan asılı). Hər işə zəmanət verilir — yazılı götürməyi unutmayın."],
];

export default function Home() {
  return (
    <div>
      {/* ============ HERO ============ */}
      <section className="relative flex min-h-[92vh] items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/hero-garage.jpg"
            alt="Mega Garaj — premium detailing sexi"
            className="kenburns h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-black/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-transparent" />
        </div>

        <div className="relative mx-auto w-full max-w-6xl px-4 py-24 text-center md:py-28">
          <div className="inline-flex items-center gap-2 rounded-full gold-border bg-black/60 px-4 py-1.5 text-xs tracking-widest text-[#f5d76e] backdrop-blur">
            <span className="pulse-dot inline-block h-2 w-2 rounded-full bg-green-400" />
            BAKI • BUGÜN QƏBUL VAR • 050 325 66 76
          </div>
          <h1 className="mx-auto mt-5 max-w-3xl text-5xl font-black leading-[1.02] md:text-7xl">
            Maşının <span className="gold-text">zirihi</span>
            <br />
            burada geyilir.
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-neutral-300 md:text-lg">
            Mega Garaj — PPF, rəngsaz, polirovka, kimyəvi təmizləmə, çexol,
            bezshumka. Məşhurların maşınları bura əmanət olunur. Səninki də ola bilər.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <a href={WA} className="gold-btn rounded-full px-8 py-4 text-base">
              Ödənişsiz baxış üçün yaz
            </a>
            <a
              href="/xidmetler/ppf"
              className="rounded-full gold-border bg-black/50 px-8 py-4 text-base text-[#f5d76e] backdrop-blur transition hover:bg-black/80"
            >
              PPF-i kəşf et
            </a>
          </div>
          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-2 gap-3 sm:grid-cols-4">
            {[
              { v: 8, s: " il", l: "PPF zəmanət" },
              { v: 500, s: "+", l: "Məmnun müştəri" },
              { v: 9, s: "", l: "xidmət istiqaməti" },
              { v: 40, s: "%", l: "endirim kampaniyası" },
            ].map((x) => (
              <div key={x.l} className="rounded-2xl border border-white/10 bg-black/55 p-4 backdrop-blur">
                <div className="text-3xl font-black gold-text">
                  <Counter to={x.v} suffix={x.s} />
                </div>
                <div className="mt-1 text-xs text-neutral-400">{x.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ MARQUEE ============ */}
      <div className="overflow-hidden border-y border-[#d4af37]/25 bg-[#0d0c07] py-3">
        <div className="marquee-track gap-0">
          {[0, 1].map((k) => (
            <div key={k} className="flex shrink-0 items-center">
              {marquee.map((m) => (
                <span key={`${k}-${m}`} className="flex items-center whitespace-nowrap px-6 text-sm font-bold tracking-widest text-[#d4af37]">
                  {m} <span className="ml-12 text-[#d4af37]/40">◆</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ============ SERVICES ============ */}
      <section className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <Reveal>
          <div className="text-xs font-bold tracking-[0.3em] text-[#d4af37]">XİDMƏTLƏR</div>
          <h2 className="mt-2 max-w-2xl text-3xl font-black md:text-5xl">
            Bir qaraj. <span className="gold-text">Bütün qayğı.</span>
          </h2>
          <p className="mt-3 max-w-xl text-neutral-400">
            PPF-dən rəngsaza qədər — maşını bir ünvanda təhvil alıb hazır veririk.
          </p>
        </Reveal>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.t} delay={i % 3 === 1 ? "reveal-d1" : i % 3 === 2 ? "reveal-d2" : ""} className="h-full">
              <a
                href={s.href}
                className="zoom-img group flex h-full flex-col overflow-hidden rounded-3xl gold-border bg-[#111]"
              >
                <div className="relative h-52 shrink-0 overflow-hidden">
                  <img src={s.img} alt={s.t} className="h-full w-full object-cover" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
                  <span className="absolute left-4 top-4 rounded-full bg-black/70 px-3 py-1 text-[11px] font-bold tracking-widest text-[#f5d76e] backdrop-blur">
                    {s.tag}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <div className="text-lg font-black">{s.t}</div>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-neutral-400">{s.d}</p>
                  <div className="mt-3 text-sm font-bold text-[#f5d76e] transition group-hover:translate-x-1">
                    Ətraflı →
                  </div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ============ PPF SPOTLIGHT ============ */}
      <section className="relative overflow-hidden border-y border-[#d4af37]/20">
        <div className="absolute inset-0">
          <img src="/images/ppf-panamera.jpg" alt="" aria-hidden className="h-full w-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-black/40" />
        </div>
        <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-2 md:py-24">
          <Reveal>
            <div className="text-xs font-bold tracking-[0.3em] text-[#d4af37]">Flaqman — PPF</div>
            <h2 className="mt-2 text-3xl font-black leading-tight md:text-5xl">
              Daş zərbəsi?
              <br />
              <span className="gold-text">Artıq dərd deyil.</span>
            </h2>
            <p className="mt-4 leading-relaxed text-neutral-300">
              Premium TPU plyonka kapotu, bamperi, faraları illərlə zavod
              vəziyyətində saxlayır. Cızıqlar günəşdə öz-özünə düzəlir
              (self-healing). Satanda maşının qiyməti də qorunur.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "Premium material + plotter (kompüter) kəsimi",
                "7-8 il rəsmi yazılı zəmanət",
                "40% endirim kampaniyası (dövri)",
                "Risk zona və ya tam kuzov — büdcənə uyğun",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3 text-neutral-200">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#d4af37] text-sm font-black text-black">✓</span>
                  {t}
                </li>
              ))}
            </ul>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href="/xidmetler/ppf" className="gold-btn rounded-full px-7 py-3.5">PPF səhifəsi</a>
              <a href={WA} className="rounded-full gold-border px-7 py-3.5 text-[#f5d76e]">Qiymət soruş</a>
            </div>
          </Reveal>
          <Reveal delay="reveal-d1" className="hidden md:block">
            <div className="floaty overflow-hidden rounded-3xl gold-border">
              <img src="/images/hero-yellow.jpg" alt="PPF-dən sonra güzgü kimi parıltı" className="h-[520px] w-full object-cover" loading="lazy" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ BEFORE / AFTER ============ */}
      <section className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <Reveal>
          <div className="text-xs font-bold tracking-[0.3em] text-[#d4af37]">NƏTİCƏ</div>
          <h2 className="mt-2 text-3xl font-black md:text-5xl">
            Sürüşdür. <span className="gold-text">Fərqi gör.</span>
          </h2>
          <p className="mt-3 max-w-xl text-neutral-400">
            Solda — yorgun, solğun boya. Sağda — Mega Garaj-dan çıxan maşın.
            Barmağınla sürüşdür.
          </p>
        </Reveal>
        <Reveal delay="reveal-d1" className="mt-8">
          <BeforeAfter src="/images/showroom-ferrari.jpg" alt="Polirovka və PPF-dən əvvəl və sonra" />
        </Reveal>
      </section>

      {/* ============ PROCESS ============ */}
      <section className="border-y border-[#d4af37]/20 bg-[#0d0c07]">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
          <Reveal>
            <div className="text-xs font-bold tracking-[0.3em] text-[#d4af37]">PROSES</div>
            <h2 className="mt-2 text-3xl font-black md:text-5xl">
              4 addımda <span className="gold-text">təhvil.</span>
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-4">
            {steps.map(([n, t, d], i) => (
              <Reveal key={n} delay={i === 1 ? "reveal-d1" : i === 2 ? "reveal-d2" : i === 3 ? "reveal-d3" : ""} className="h-full">
                <div className="card relative h-full rounded-3xl gold-border p-6">
                  <div className="gold-text text-5xl font-black opacity-90">{n}</div>
                  <div className="mt-3 font-black">{t}</div>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-400">{d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ GALLERY ============ */}
      <section className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <div className="text-xs font-bold tracking-[0.3em] text-[#d4af37]">QALEREYA</div>
              <h2 className="mt-2 text-3xl font-black md:text-5xl">
                Bu səviyyə <span className="gold-text">standartımızdır.</span>
              </h2>
            </div>
            <a href={IG} className="rounded-full gold-border px-6 py-3 text-sm text-[#f5d76e]">
              @meqa_garaj — hamısı →
            </a>
          </div>
        </Reveal>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["/images/gallery-red.jpg", "Rəngsaz + PPF", "AMG GT"],
            ["/images/gallery-blue.jpg", "Vinil / rəng dəyişimi", "Camaro"],
            ["/images/gallery-night.jpg", "Polirovka + keramika", "BMW 7"],
            ["/images/showroom-ferrari.jpg", "Showroom təhvili", "LaFerrari"],
          ].map(([src, t, s], i) => (
            <Reveal key={src} delay={i === 1 ? "reveal-d1" : i === 2 ? "reveal-d2" : i === 3 ? "reveal-d3" : ""}>
              <div className="zoom-img group relative h-72 overflow-hidden rounded-3xl gold-border">
                <img src={src} alt={`${t} — ${s}`} className="h-full w-full object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <div className="font-black">{t}</div>
                  <div className="text-xs text-[#f5d76e]">{s} • Mega Garaj işi</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ============ SOCIAL PROOF ============ */}
      <section className="border-y border-[#d4af37]/20 bg-[#0d0c07]">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
          <Reveal className="text-center">
            <div className="text-xs font-bold tracking-[0.3em] text-[#d4af37]">ETİBAR</div>
            <h2 className="mx-auto mt-2 max-w-2xl text-3xl font-black md:text-4xl">
              Onların maşınları <span className="gold-text">bizə əmanət olunur.</span>
            </h2>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              {["Tofiq Musayev", "Faiq Ağayev", "və onlarla tanınmış sima"].map((n) => (
                <span key={n} className="rounded-full gold-border bg-black px-5 py-2 text-sm text-neutral-300">
                  ★ {n}
                </span>
              ))}
            </div>
            <p className="mx-auto mt-6 max-w-xl text-sm text-neutral-400">
              64K+ Instagram və 100K+ TikTok izləyicisi hər işi canlı görür —
              gizlədəcək heç nə yoxdur. Rəyləri IG-də oxu, sonra qərar ver.
            </p>
            <a href={IG} className="gold-btn mt-6 inline-block rounded-full px-7 py-3.5">
              Rəyləri oxu — Instagram
            </a>
          </Reveal>
        </div>
      </section>

      {/* ============ PRICING PREVIEW ============ */}
      <section className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <Reveal>
          <div className="text-xs font-bold tracking-[0.3em] text-[#d4af37]">QİYMƏT</div>
          <h2 className="mt-2 text-3xl font-black md:text-5xl">
            Aydın rəqəmlər. <span className="gold-text">Gizli xərc yox.</span>
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {[
            {
              n: "Parlaqlıq seti",
              p: "100 AZN-dən",
              d: "Detallı polirovka (sedan). SUV 120 AZN. 1 günə güzgü effekti.",
              hot: false,
            },
            {
              n: "PPF qoruma",
              p: "40% endirim",
              d: "Risk zona və ya tam kuzov. 7-8 il zəmanət. Dəqiq rəqəm baxışdan sonra.",
              hot: true,
            },
            {
              n: "Kimyəvi + salon",
              p: "100 AZN-dən",
              d: "Dərindən salon təmizliyi + dəri qulluğu. Qoxusu da təzələnir.",
              hot: false,
            },
          ].map((c, i) => (
            <Reveal key={c.n} delay={i === 1 ? "reveal-d1" : i === 2 ? "reveal-d2" : ""} className="h-full">
              <div className={`relative h-full rounded-3xl p-7 ${c.hot ? "bg-gradient-to-b from-[#d4af37] to-[#8a6d1c] text-black" : "card gold-border"}`}>
                {c.hot && (
                  <span className="absolute -top-3 left-6 rounded-full bg-black px-4 py-1 text-xs font-black text-[#f5d76e]">
                    ƏN ÇOX SEÇİLƏN
                  </span>
                )}
                <div className="font-bold">{c.n}</div>
                <div className={`mt-2 text-4xl font-black ${c.hot ? "" : "gold-text"}`}>{c.p}</div>
                <p className={`mt-3 text-sm leading-relaxed ${c.hot ? "text-black/75" : "text-neutral-400"}`}>{c.d}</p>
                <a
                  href={WA}
                  className={`mt-5 inline-block rounded-full px-6 py-3 text-sm font-bold ${c.hot ? "bg-black text-[#f5d76e]" : "gold-btn"}`}
                >
                  Yaz
                </a>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-6 text-center">
          <a href="/qiymetler" className="text-sm text-[#f5d76e] underline-offset-4 hover:underline">
            Tam qiymət cədvəli →
          </a>
        </Reveal>
      </section>

      {/* ============ FAQ ============ */}
      <section className="mx-auto max-w-3xl px-4 pb-16 md:pb-24">
        <Reveal>
          <div className="text-xs font-bold tracking-[0.3em] text-[#d4af37]">SUALLAR</div>
          <h2 className="mt-2 text-3xl font-black md:text-4xl">
            Verməzdən əvvəl <span className="gold-text">oxu.</span>
          </h2>
        </Reveal>
        <Reveal delay="reveal-d1" className="mt-8">
          <Faq items={faqs} />
        </Reveal>
      </section>

      {/* ============ FINAL CTA ============ */}
      <section className="relative overflow-hidden">
        <img src="/images/hero-garage.jpg" alt="" aria-hidden className="absolute inset-0 h-full w-full object-cover opacity-25" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black" />
        <div className="relative mx-auto max-w-3xl px-4 py-20 text-center md:py-28">
          <Reveal>
            <h2 className="text-4xl font-black leading-tight md:text-6xl">
              Maşının sabah da
              <br />
              <span className="gold-text">bugünkü kimi görünsün.</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-neutral-300">
              Ödənişsiz baxış — 10 dəqiqə. Nə lazımdır, deyirik; nə lazım deyil, demirik.
              demirik. Qərar sənindir.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a href={WA} className="gold-btn rounded-full px-9 py-4 text-base">
                WhatsApp — 050 325 66 76
              </a>
              <a href="tel:+994503256676" className="rounded-full gold-border bg-black/60 px-9 py-4 text-base text-[#f5d76e]">
                Zəng et
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
