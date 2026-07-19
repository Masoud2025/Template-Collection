// Base path of this template. All internal links must be prefixed with this
// so they resolve correctly under /Templates/FilmShow.
export const BASE = "/Templates/FilmShow";

export type Movie = {
  id: number;
  title: string;
  year: number;
  rating: number;
  genre: string;
  genres: string[];
  quality: "HD" | "4K" | "DV";
  image: string;
  link: string;
  duration: number;
  country: string;
  director: string;
  description: string;
};

export const movies: Movie[] = [
  {
    id: 1,
    title: "افسانه‌های کهکشان",
    year: 2024,
    rating: 8.7,
    genre: "علمی تخیلی",
    genres: ["علمی تخیلی", "اکشن", "حماسی"],
    quality: "4K",
    image: "https://static.filmnet.ir/images/ba/03/ba03d3b52ad244a38b5df275fb2ad4d7.jpg",
    link: "/movies/1",
    duration: 142,
    country: "ایران",
    director: "آرمان رضایی",
    description:
      "در اعماق فضا، یک نبرد حماسی بین کهکشان‌ها در جریان است. این بار سرنوشت جهان در دستان یک قهرمان ناشناخته است که باید میراثی باستانی را پیش از سقوط تاریکی پیدا کند.",
  },
  {
    id: 2,
    title: "شهر سایه‌ها",
    year: 2023,
    rating: 7.9,
    genre: "هیجان‌انگیز",
    genres: ["هیجان‌انگیز", "جنایی"],
    quality: "HD",
    image: "https://static.filmnet.ir/images/06/af/06af70611a9e49b48393fc4a3b47d609.jpg",
    link: "/movies/2",
    duration: 118,
    country: "ایران",
    director: "مریم کاوه",
    description:
      "تهران زیرزمینی، پر از رازهای پنهان و جاسوس‌های بین‌المللی. یک مأمور مخفی باید حقیقت را قبل از فروپاشی شهر کشف کند.",
  },
  {
    id: 3,
    title: "آخرین امپراتور",
    year: 2024,
    rating: 8.2,
    genre: "حماسی",
    genres: ["حماسی", "درام", "تاریخی"],
    quality: "4K",
    image: "https://static.filmnet.ir/images/6a/d8/6ad807f131f94dbbbc22f7fd141c8eb3.jpg",
    link: "/movies/3",
    duration: 156,
    country: "ایران",
    director: "سعید نوری",
    description:
      "داستان یک امپراتور قدرتمند که برای نجات امپراتوری خود در برابر دشمنان بیرونی و خیانت‌های داخلی می‌جنگد.",
  },
  {
    id: 4,
    title: "راز اقیانوس",
    year: 2023,
    rating: 7.5,
    genre: "ماجراجویی",
    genres: ["ماجراجویی", "علمی تخیلی"],
    quality: "HD",
    image: "https://static.filmnet.ir/images/a7/5d/a75de2493420465cbedbb16ab4dfe827.jpg",
    link: "/movies/4",
    duration: 124,
    country: "ایران",
    director: "لیلا صادقی",
    description:
      "سفری به اعماق اقیانوس و کشف تمدنی گمشده که رازهایی درباره منشأ حیات در اختیار انسان‌ها می‌گذارد.",
  },
  {
    id: 5,
    title: "شب بی‌پایان",
    year: 2024,
    rating: 8.9,
    genre: "ترسناک",
    genres: ["ترسناک", "هیجان‌انگیز"],
    quality: "DV",
    image: "https://static.filmnet.ir/images/84/41/84414c9829b2417fbe08e0503b637586.jpg",
    link: "/movies/5",
    duration: 101,
    country: "ایران",
    director: "کوروش آذر",
    description:
      "در شبی که زمان از حرکت باز می‌ایستد، گروهی از دوستان در خانه‌ای متروک گرفتار نیرویی مرموز می‌شوند.",
  },
  {
    id: 6,
    title: "سفر به مریخ",
    year: 2023,
    rating: 7.8,
    genre: "علمی تخیلی",
    genres: ["علمی تخیلی", "ماجراجویی"],
    quality: "4K",
    image: "https://static.filmnet.ir/images/d9/20/d920abf37b7f42cc827b7e94d249d34e.jpg",
    link: "/movies/6",
    duration: 133,
    country: "ایران",
    director: "هومن فرزان",
    description:
      "نخستین مأموریت سرنشین‌دار به مریخ با شکستی غیرمنتظره روبرو می‌شود و خدمه برای بقا باید رازی را فاش کنند.",
  },
  {
    id: 7,
    title: "دژ تاریکی",
    year: 2024,
    rating: 8.1,
    genre: "اکشن",
    genres: ["اکشن", "هیجان‌انگیز"],
    quality: "HD",
    image: "https://static.filmnet.ir/images/15/46/15466f2bf5a8457c85ff248586b4003e.jpg",
    link: "/movies/7",
    duration: 109,
    country: "ایران",
    director: "بهرام کیان",
    description:
      "یک مزدور بازنشسته برای نجات دخترش باید به قلعه‌ای تاریک نفوذ کند که توسط قدرتمندترین باند شهر اداره می‌شود.",
  },
  {
    id: 8,
    title: "عصر طلایی",
    year: 2023,
    rating: 7.6,
    genre: "درام",
    genres: ["درام", "تاریخی"],
    quality: "HD",
    image: "https://static.filmnet.ir/images/6f/ac/6fac545bedc6469992157387c30de887.jpg",
    link: "/movies/8",
    duration: 127,
    country: "ایران",
    director: "نازنین بهرامی",
    description:
      "روایتی از روزهای شکوه یک خانواده هنرمند که در میان تحولات اجتماعی با انتخاب‌های دشواری روبرو می‌شوند.",
  },
  {
    id: 9,
    title: "شکارچی روح",
    year: 2024,
    rating: 8.4,
    genre: "اکشن",
    genres: ["اکشن", "فانتزی"],
    quality: "4K",
    image: "https://static.filmnet.ir/images/eb/06/eb0637861a394c57bde966b8f9d49bee.jpg",
    link: "/movies/9",
    duration: 138,
    country: "ایران",
    director: "آرش مهر",
    description:
      "جوانی با استعدادی ماورایی مأموریت می‌یابد تا ارواح سرگردان شهر را آرام کند، اما با نیرویی تاریک روبرو می‌شود.",
  },
  {
    id: 10,
    title: "پادشاه شمال",
    year: 2023,
    rating: 7.3,
    genre: "حماسی",
    genres: ["حماسی", "اکشن"],
    quality: "HD",
    image: "https://static.filmnet.ir/images/be/68/be68ff9643b84229853ca7ca0a28afac.jpg",
    link: "/movies/10",
    duration: 149,
    country: "ایران",
    director: "رامین سپهر",
    description:
      "در سرزمین‌های یخ‌زده شمال، وارثی جوان برای بازپس‌گیری تاج‌وتخت خاندانش قیام می‌کند.",
  },
  {
    id: 11,
    title: "مهاجرت",
    year: 2024,
    rating: 8.0,
    genre: "انیمیشن",
    genres: ["انیمیشن", "ماجراجویی", "خانوادگی"],
    quality: "4K",
    image: "https://static.filmnet.ir/images/b9/e8/b9e828769baa4af59b827c2334757af7.jpg",
    link: "/movies/11",
    duration: 96,
    country: "ایران",
    director: "سارا زاهدی",
    description:
      "گروهی از پرندگان کوچک در سفری بزرگ به سوی سرزمینی امن حرکت می‌کنند و با چالش‌های شگفت‌انگیزی روبرو می‌شوند.",
  },
  {
    id: 12,
    title: "سایه‌های گذشته",
    year: 2023,
    rating: 7.7,
    genre: "درام",
    genres: ["درام", "رازآلود"],
    quality: "HD",
    image: "https://static.filmnet.ir/images/d1/be/d1bee2ee5ee94673b0512806f3ea3b95.jpg",
    link: "/movies/12",
    duration: 115,
    country: "ایران",
    director: "مهدی روشن",
    description:
      "زنی پس از سال‌ها به خانه کودکی‌اش بازمی‌گردد و رازهایی از گذشته خانواده‌اش را کشف می‌کند که همه‌چیز را تغییر می‌دهد.",
  },
  {
    id: 13,
    title: "طلوع دوباره",
    year: 2024,
    rating: 8.5,
    genre: "الهام‌بخش",
    genres: ["درام", "الهام‌بخش"],
    quality: "4K",
    image: "https://static.filmnet.ir/images/2c/8d/2c8dbe17b43543fd86c5b476904d6bea.jpg",
    link: "/movies/13",
    duration: 121,
    country: "ایران",
    director: "الناز فرهادی",
    description:
      "مردی پس از یک سانحه بزرگ، از نو زندگی را آغاز می‌کند و با اراده‌ای آهنین به الگویی برای دیگران تبدیل می‌شود.",
  },
  {
    id: 14,
    title: "گمشده در فضا",
    year: 2023,
    rating: 7.4,
    genre: "علمی تخیلی",
    genres: ["علمی تخیلی", "هیجان‌انگیز"],
    quality: "HD",
    image: "https://static.filmnet.ir/images/91/08/910817aa592e4fe4bfc9cfc062e6d813.jpg",
    link: "/movies/14",
    duration: 130,
    country: "ایران",
    director: "فرزاد آگاه",
    description:
      "فضانوردی پس از گم‌شدن در یک کرم‌چاله، خود را در گوشه‌ای دورافتاده از کهکشان می‌یابد و برای بازگشت می‌جنگد.",
  },
  {
    id: 15,
    title: "آخرین نبرد",
    year: 2024,
    rating: 8.8,
    genre: "اکشن",
    genres: ["اکشن", "حماسی"],
    quality: "DV",
    image: "https://static.filmnet.ir/images/4f/58/4f58e7d8992f44c0bcac228e5b4976c1.jpg",
    link: "/movies/15",
    duration: 145,
    country: "ایران",
    director: "کیان پارسا",
    description:
      "در نبردی نهایی میان نور و تاریکی، قهرمانی جوان باید متحدان پراکنده را گرد هم آورد تا جهان را از نابودی نجات دهد.",
  },
];

export const newReleases: Movie[] = movies
  .filter((m) => m.year === 2024)
  .concat(movies.filter((m) => m.year === 2023))
  .slice(0, 10);

export const allGenres: string[] = Array.from(
  new Set(movies.flatMap((m) => m.genres))
).sort((a, b) => a.localeCompare(b, "fa"));

export function getMovie(id: number): Movie | undefined {
  return movies.find((m) => m.id === id);
}

export function getSimilar(id: number, limit = 6): Movie[] {
  const movie = getMovie(id);
  if (!movie) return movies.slice(0, limit);
  return movies
    .filter(
      (m) =>
        m.id !== id &&
        m.genres.some((g) => movie.genres.includes(g))
    )
    .slice(0, limit);
}

export type Series = {
  id: number;
  title: string;
  year: number;
  rating: number;
  genre: string;
  quality: "HD" | "4K" | "DV";
  image: string;
  seasons: number;
  episodes: number;
  description: string;
};

export const series: Series[] = [
  {
    id: 1,
    title: "قصه‌های شهرزاد",
    year: 2024,
    rating: 9.1,
    genre: "درام",
    quality: "4K",
    image: "https://static.filmnet.ir/images/6a/d8/6ad807f131f94dbbbc22f7fd141c8eb3.jpg",
    seasons: 3,
    episodes: 42,
    description:
      "روایتی چندلایه از زندگی بازرگانی قدرتمند و پیوندهای پنهان او با گذشته‌ای که هرگز رهایش نمی‌کند.",
  },
  {
    id: 2,
    title: "پل‌های تاریک",
    year: 2023,
    rating: 8.6,
    genre: "هیجان‌انگیز",
    quality: "HD",
    image: "https://static.filmnet.ir/images/06/af/06af70611a9e49b48393fc4a3b47d609.jpg",
    seasons: 2,
    episodes: 24,
    description:
      "کارآگاهی جوان در شهری بارانی در پی کشف زنجیره‌ای از پرونده‌های گمشده است که به مقامات بالا ختم می‌شود.",
  },
  {
    id: 3,
    title: "افق بی‌انتها",
    year: 2024,
    rating: 8.9,
    genre: "علمی تخیلی",
    quality: "4K",
    image: "https://static.filmnet.ir/images/ba/03/ba03d3b52ad244a38b5df275fb2ad4d7.jpg",
    seasons: 1,
    episodes: 10,
    description:
      "در آینده‌ای نزدیک، گروهی از دانشمندان نخستین تماس انسان با تمدنی فرازمینی را رهبری می‌کنند.",
  },
  {
    id: 4,
    title: "خانه ابری",
    year: 2023,
    rating: 8.3,
    genre: "خانوادگی",
    quality: "HD",
    image: "https://static.filmnet.ir/images/2c/8d/2c8dbe17b43543fd86c5b476904d6bea.jpg",
    seasons: 4,
    episodes: 56,
    description:
      "داستان خانواده‌ای گرم که در خانه‌ای قدیمی زیر یک آسمان ابری، رازهای نسل‌های پیشین را کشف می‌کنند.",
  },
  {
    id: 5,
    title: "سایه‌نشینان",
    year: 2024,
    rating: 8.7,
    genre: "ترسناک",
    quality: "DV",
    image: "https://static.filmnet.ir/images/84/41/84414c9829b2417fbe08e0503b637586.jpg",
    seasons: 2,
    episodes: 18,
    description:
      "ساکنان یک آپارتمان قدیمی متوجه می‌شوند که هر شب، سایه‌ای در آینه‌ها زندگی متفاوتی دارد.",
  },
  {
    id: 6,
    title: "جاده ابریشم",
    year: 2023,
    rating: 8.0,
    genre: "حماسی",
    quality: "4K",
    image: "https://static.filmnet.ir/images/be/68/be68ff9643b84229853ca7ca0a28afac.jpg",
    seasons: 1,
    episodes: 12,
    description:
      "حماسه‌ای تاریخی درباره بازرگانان جاده ابریشم و ماجراجویی‌های آنان میان شرق و غرب.",
  },
];

