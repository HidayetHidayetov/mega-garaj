export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  img: string;
  tag: string;
  date: string;
  readTime: string;
  body: [string, string?][]; // [heading?, paragraph] — heading boşdursa düz mətn
};

export const posts: Post[] = [
  {
    slug: "ppf-nedir",
    title: "PPF nədir? Maşının boyasını illərlə necə qoruyur",
    excerpt:
      "Şəffaf poliuretan plyonka daş zərbəsini, cızıqları udur, özünü bərpa edir. PPF-in necə işlədiyini sadə dillə izah edirik.",
    img: "/images/hero-yellow.jpg",
    tag: "PPF",
    date: "2026-11-02",
    readTime: "4 dəq",
    body: [
      ["PPF nədir?", "PPF (Paint Protection Film) — maşının boyalı səthinə çəkilən şəffaf, elastik poliuretan plyonkadır. Gözlə görünmür, amma kapotu, bamperi, faraları və güzgüləri daş zərbələrindən, cızıqlardan, yol duzundan və günəşin ultrabənövşəyi şüalarından qoruyur."],
      ["", "Sadə dillə: maşına görünməz gödəkçə geyindirirsən. Zərbə boyaya yox, plyonkaya dəyir."],
      ["Özünübərpa (self-healing) nə deməkdir?", "Keyfiyyətli TPU plyonkalar istiyə məruz qalanda (günəş və ya isti su) xırda cızıqları öz-özünə düzəldir. Yuma zamanı yaranan mikro cızıqlar bir neçə saata yox olur — buna görə PPF vurulmuş maşın illərlə salon vəziyyətində görünür."],
      ["Hansı zonalar bağlanır?", "Ən çox zərbə alan yerlər: kapot, ön bamper, faralar, yan güzgülər, qapı kənarları və yükqapısı astanası. Buna “risk zona” deyilir. Büdcə imkan verirsə, tam kuzov bağlanır — onda boya tamamilə qoruma altında olur."],
      ["PPF kimə lazımdır?", "Yeni maşın almısansa, premium seqment sürürsənsə və ya maşını 3-5 ildən sonra yaxşı qiymətə satmaq istəyirsənsə — PPF ən ağıllı investisiyadır. Zavod boyası qorunduğu üçün satışda “boyalı detalı yoxdur” demək olur, bu da qiyməti hiss olunacaq qədər artırır."],
      ["Nəticə", "PPF kosmetika deyil, sığortadır — bir dəfə vurursan, 7-8 il başın dinc olur. Mega Garaj premium materialla işləyir və hər işə yazılı zəmanət verir. Pulsuz demədik — ödənişsiz baxış üçün WhatsApp-a yaz, maşına baxıb dəqiq variantı deyək."],
    ],
  },
  {
    slug: "ppf-vs-keramika",
    title: "PPF vs keramika: hansı sənə lazımdır?",
    excerpt:
      "Hər ikisi “qoruma” adlanır, amma tam fərqli iş görür. Hansının sənə uyğun olduğunu 2 dəqiqəyə aydınlaşdır.",
    img: "/images/ppf-panamera.jpg",
    tag: "MÜQAYİSƏ",
    date: "2026-11-02",
    readTime: "3 dəq",
    body: [
      ["Qısa cavab", "Zərbədən qorunmaq istəyirsənsə — PPF. Parıltı və asan yuma istəyirsənsə — keramika. İdeal variant çox vaxt ikisinin kombinasiyasıdır: PPF risk zonalara + keramika bütün kuzova."],
      ["PPF nə verir?", "Fiziki qalxandır: daş zərbəsi, cızıq, qum püskürməsi plyonkaya dəyir, boyaya yox. Özünübərpa funksiyası var. Ömrü 7-8 ildir. Qiyməti keramikadan yüksəkdir, amma qoruma səviyyəsi müqayisə olunmazdır."],
      ["Keramika nə verir?", "Maye şüşə kimi boyanın üstünə hopur: dərin parıltı, su itələmə (hidrofob), yuma asanlaşır, quş zibili və qatran boyaya yapışmır. Amma daş zərbəsinə qarşı qorumur — nazik kimyəvi qatdır, zireh deyil."],
      ["Bəs hansını seçim?", "Şəhərdə çox sürürsənsə, trasda daş zərbəsi yeyirsənsə, maşının yenidirsə — PPF. Maşının 3-5 yaşı var, boyası polirovkaya ehtiyac duyur və sadəcə parıltı istəyirsənsə — polirovka + keramika bəs edir. Qərarsızsansa, baxışa gəl — maşına baxıb dürüstünü deyirik: lazım olmayana PPF sırımıriq."],
    ],
  },
  {
    slug: "ppf-qiymeti-baki",
    title: "Bakıda PPF qiyməti nədən asılıdır?",
    excerpt:
      "Niyə bir yerdə 500, başqa yerdə 2000 deyirlər? Qiyməti formalaşdıran 5 faktor və doğru seçim üçün checklist.",
    img: "/images/gallery-night.jpg",
    tag: "QİYMƏT",
    date: "2026-11-02",
    readTime: "4 dəq",
    body: [
      ["Niyə qiymətlər bu qədər fərqlidir?", "Çünki “PPF” tək məhsul deyil: materialın seqmenti (TPU vs PVC), bağlanan zona, ustanın təcrübəsi və zəmanət şərtləri qiyməti 3-4 dəfə dəyişir. Ucuz təklif çox vaxt nazik PVC plyonka + zəmanətsiz iş deməkdir — 1 ildən sonra saralır və sökəndə boya ilə gedir."],
      ["Qiyməti formalaşdıran 5 faktor", "1) Material: premium TPU bahadır, amma saralmır və özünü bərpa edir. 2) Zona: risk zona (kapot, bamper, fara) tam kuzovdan qat-qat ucuzdur. 3) Maşının ölçüsü: SUV sedandan çox material aparır. 4) Hazırlıq: keyfiyyətli usta PPF-dən əvvəl səthi ideal vəziyyətə gətirir (yuma, gil, polirovka) — bu da işin içindədir. 5) Zəmanət: yazılı 7-8 il zəmanət verən usta materialına əmindir."],
      ["Ustaya hansı sualları ver?", "Hansı brend/seqment plyonkadır — TPU-durmu? Kəsim plotterladırmı, yoxsa bıçaqla maşının üstündə kəsilir? Zəmanət yazılı verilirmi, nəyə şamil olunur? Söküləndə boyaya zərər dəyməyəcəyinə kim cavabdehdir? Bu 4 sualın cavabı ustanın səviyyəsini dərhal göstərir."],
      ["Mega Garaj-da necədir?", "Premium seqment TPU, plotter kəsimi, 7-8 il yazılı zəmanət. Dəqiq rəqəm həmişə baxışdan sonra deyilir — çünki maşını görmədən qiymət demək vicdansızlıqdır. Baxış ödənişsizdir: WhatsApp-a maşının ilini və modelini yaz, təxmini aralığı dərhal deyək."],
    ],
  },
];

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}
