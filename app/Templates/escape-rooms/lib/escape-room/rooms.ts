import room1 from "../../assets/images/rooms/room1.jpg";
import room2 from "../../assets/images/rooms/room2.webp";
import room3 from "../../assets/images/rooms/room3.webp";
import room4 from "../../assets/images/rooms/room4.webp";
import room5 from "../../assets/images/rooms/room5.webp";
import room6 from "../../assets/images/rooms/room6.webp";
import type { StaticImageData } from "next/image";

export interface Room {
  id: number;
  name: string;
  description: string;
  story: string;
  price: number;
  duration: number;
  players: string;
  difficulty: "easy" | "medium" | "hard" | "expert";
  rating: number;
  image: StaticImageData;
  images: string[];
  genre: string;
}

export const rooms: Room[] = [
  {
    id: 1,
    name: "معبد گمشده",
    description: "در اعماق یک معبد باستانی، گنج پنهان شده و شما باید رمز و راز آن را کشف کنید.",
    story: "سال‌ها پیش، یک باستان‌شناس معروف در جستجوی گنجینه‌ای افسانه‌ای در این معبد ناپدید شد. گفته می‌شود که روح او هنوز در تونل‌های تاریک پرسه می‌زند. آیا شما می‌توانید گنج را پیدا کنید و از معبد فرار کنید؟",
    price: 150000,
    duration: 60,
    players: "۲-۶",
    difficulty: "medium",
    rating: 4.8,
    image: room2,
    images: [],
    genre: "معمایی",
  },
  {
    id: 2,
    name: "دفتر کارآگاه",
    description: "یک کارآگاه مشهور ناپدید شده و شما باید با سرنخ‌های باقی‌مانده راز را کشف کنید.",
    story: "کارآگاه معروف جیمز مورفی، آخرین پرونده خود را ناتمام گذاشت و ناپدید شد. تمام سرنخ‌ها در دفتر او باقی مانده است. شما باید اسناد را بررسی کنید، رمزها را بشکنید و پرده از راز ناپدید شدن او بردارید.",
    price: 180000,
    duration: 75,
    players: "۱-۴",
    difficulty: "hard",
    rating: 4.9,
    image: room1,
    images: [],
    genre: "معمایی",
  },
  {
    id: 3,
    name: "عمارت تسخیر شده",
    description: "یک عمارت قدیمی که شب‌ها صداهای عجیبی از آن شنیده می‌شود. جرات داری وارد شوی؟",
    story: "عمارت ویکتوریایی در حومه شهر، سال‌هاست که متروک مانده است. همسایه‌ها از صداهای مرموز و نورهای عجیب در شب می‌گویند. برخی می‌گویند صاحب قبلی عمارت هنوز آنجا سرگردان است. آیا شما جرات ورود به این عمارت ترسناک را دارید؟",
    price: 200000,
    duration: 90,
    players: "۳-۸",
    difficulty: "expert",
    rating: 4.7,
    image: room3,
    images: [],
    genre: "ترسناک",
  },
  {
    id: 4,
    name: "آزمایشگاه مخفی",
    description: "یک دانشمند دیوانه در آزمایشگاه خود چیزهای عجیبی ساخته و شما باید جلوی او را بگیرید.",
    story: "دکتر هلموت، دانشمند مرموز، سال‌ها در آزمایشگاه مخفی خود روی پروژه‌ای خطرناک کار می‌کرده است. همکارانش می‌گویند او موجودات عجیبی خلق کرده است. شما باید وارد آزمایشگاه شوید، رمزهای او را بشکنید و جلوی فاجعه را بگیرید.",
    price: 170000,
    duration: 60,
    players: "۲-۵",
    difficulty: "medium",
    rating: 4.6,
    image: room4,
    images: [],
    genre: "علمی-تخیلی",
  },
  {
    id: 5,
    name: "اهرام مصر",
    description: "در دل هرم بزرگ، راز فراعنه پنهان شده و شما باید آن را کشف کنید.",
    story: "اهرام مصر، یکی از عجایب هفت‌گانه جهان، رازهای بسیاری در دل خود پنهان کرده است. تیمی از باستان‌شناسان اخیراً ورودی مخفی‌ای کشف کرده‌اند. شما باید وارد هرم شوید و تابوت فرعون گمشده را پیدا کنید.",
    price: 190000,
    duration: 70,
    players: "۲-۶",
    difficulty: "hard",
    rating: 4.8,
    image: room5,
    images: [],
    genre: "ماجراجویی",
  },
  {
    id: 6,
    name: "جزیره گنج",
    description: "در یک جزیره دورافتاده، گنج دزدان دریایی پنهان شده و شما باید آن را پیدا کنید.",
    story: "کاپیتان بلک‌برد، معروف‌ترین دزد دریایی تاریخ، گنج عظیم خود را در جزیره‌ای مخفی پنهان کرده است. نقشه گنج به چند تکه تقسیم شده و هر کدام در گوشه‌ای از جزیره پنهان است. شما باید تمام تکه‌ها را پیدا کنید و به گنج برسید.",
    price: 160000,
    duration: 65,
    players: "۲-۴",
    difficulty: "easy",
    rating: 4.5,
    image: room6,
    images: [],
    genre: "ماجراجویی",
  },
];

export const genres = [
  "همه",
  "معمایی",
  "ترسناک",
  "ماجراجویی",
  "علمی-تخیلی",
  "تاریخی",
] as const;

export type Genre = (typeof genres)[number];

export function getRoomsByGenre(genre: Genre): Room[] {
  if (genre === "همه") return rooms;
  return rooms.filter((r) => r.genre === genre);
}

export function filterRooms(params: {
  name?: string;
  players?: string;
  difficulty?: string;
  genre?: Genre;
}): Room[] {
  let result = rooms;
  if (params.genre && params.genre !== "همه") {
    result = result.filter((r) => r.genre === params.genre);
  }
  if (params.name) {
    const q = params.name.trim().toLowerCase();
    result = result.filter((r) => r.name.toLowerCase().includes(q));
  }
  if (params.difficulty) {
    result = result.filter((r) => r.difficulty === params.difficulty);
  }
  if (params.players) {
    const p = Number(params.players);
    result = result.filter((r) => {
      const max = Number(r.players.split("-").pop()?.replace(/[^0-9]/g, "") || "0");
      const min = Number(r.players.split("-")[0]?.replace(/[^0-9]/g, "") || "0");
      if (p === 6) return max >= 6;
      return p >= min && p <= max;
    });
  }
  return result;
}
