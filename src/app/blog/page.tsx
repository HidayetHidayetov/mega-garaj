const posts = [
  {
    t: "PPF nədir və niyə 7-8 il zəmanət verilir?",
    d: "Şəffaf poliuretan plyonka daş zərbəsini, cızıqları udur, özünü bərpa edir. Keyfiyyətli material + düzgün quraşdırma = illərlə zavod boyası.",
    tag: "PPF",
  },
  {
    t: "Bakıda PPF qiyməti nədən asılıdır?",
    d: "Risk zona, tam kuzov, detal sayı, material seqmenti. Dəqiq rəqəm həmişə baxışdan sonra — telefonda təxmini qiymət deyirik.",
    tag: "QİYMƏT",
  },
];

export default function Blog() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <div className="text-xs font-bold tracking-[0.3em] text-[#d4af37]">BLOQ</div>
      <h1 className="mt-2 text-3xl font-black md:text-4xl">
        Faydalı <span className="gold-text">yazılar.</span>
      </h1>
      <p className="mt-3 max-w-xl text-neutral-400">
        PPF, rəngsaz və detailing haqqında qısa və konkret — sualın olsa
        WhatsApp-a yaz, cavablayaq.
      </p>
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {posts.map((p) => (
          <article key={p.t} className="card rounded-3xl gold-border p-6">
            <span className="inline-block rounded-full bg-[#d4af37]/15 px-3 py-1 text-[11px] font-bold tracking-widest text-[#f5d76e]">
              {p.tag}
            </span>
            <h2 className="mt-3 text-lg font-black leading-snug">{p.t}</h2>
            <p className="mt-2 text-sm leading-relaxed text-neutral-400">{p.d}</p>
            <a
              href="https://wa.me/994503256676?text=Salam%2C%20bu%20m%C3%B6vzu%20haqq%C4%B1nda%20sual%C4%B1m%20var"
              className="mt-4 inline-block text-sm font-bold text-[#f5d76e]"
            >
              Sual ver →
            </a>
          </article>
        ))}
      </div>
    </div>
  );
}
