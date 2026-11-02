import { WorksGrid } from "./gallery";
import { Reveal } from "@/components/ui";

const IG = "https://www.instagram.com/meqa_garaj/";

export default function Isler() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-14 md:py-20">
      <Reveal>
        <div className="text-xs font-bold tracking-[0.3em] text-[#d4af37]">İŞLƏR</div>
        <h1 className="mt-2 max-w-2xl text-4xl font-black md:text-6xl">
          Danışmaq yox, <span className="gold-text">göstərmək.</span>
        </h1>
        <p className="mt-4 max-w-xl leading-relaxed text-neutral-400">
          Nümunələrin bir hissəsi buradadır. Gündəlik işlərin hamısı
          Instagram-dadır — hər gün yeni nəticə paylaşılır.
        </p>
      </Reveal>

      <Reveal delay="reveal-d1" className="mt-10">
        <WorksGrid />
      </Reveal>

      <Reveal className="mt-12">
        <div className="card rounded-3xl gold-border p-8 text-center md:p-12">
          <h2 className="text-2xl font-black md:text-3xl">
            Sənin maşının <span className="gold-text">növbəti ola bilər.</span>
          </h2>
          <p className="mx-auto mt-3 max-w-md text-sm text-neutral-400">
            Şəkili yox, realı görmək istəyirsənsə — sexə gəl, bitmiş işlərə
            canlı bax, sonra qərar ver.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a href={IG} className="gold-btn rounded-full px-7 py-3.5">
              @meqa_garaj — hamısı
            </a>
            <a
              href="https://wa.me/994503256676?text=Salam%2C%20i%C5%9Fl%C9%99r%C9%99%20baxd%C4%B1m%2C%20yaz%C4%B1lmaq%20ist%C9%99yir%C9%99m"
              className="rounded-full gold-border px-7 py-3.5 text-[#f5d76e]"
            >
              Yazılmaq istəyirəm
            </a>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
