"use client";

import { useState, useRef, useEffect } from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import room1 from "../assets/images/rooms/room1.jpg";
import room2 from "../assets/images/rooms/room2.webp";
import room3 from "../assets/images/rooms/room3.webp";
import room4 from "../assets/images/rooms/room4.webp";
import room5 from "../assets/images/rooms/room5.webp";
import room6 from "../assets/images/rooms/room6.webp";
import { Clock, Users, Star, ChevronLeft, ChevronRight } from "lucide-react";
import RoomModal from "./RoomModal";

// تعریف نوع Room با image از نوع StaticImageData
interface Room {
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
}

// نوع برای Modal که image از نوع string است
interface RoomModalData {
  id: number;
  name: string;
  description: string;
  story: string;
  price: number;
  duration: number;
  players: string;
  difficulty: "easy" | "medium" | "hard" | "expert";
  rating: number;
  image: string;
  images: string[];
}

export default function RoomCards() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [selectedRoom, setSelectedRoom] = useState<RoomModalData | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Effect for body scroll lock
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isModalOpen]);

  const rooms: Room[] = [
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
    },
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "easy": return "bg-emerald-500";
      case "medium": return "bg-amber-500";
      case "hard": return "bg-orange-500";
      case "expert": return "bg-rose-600";
      default: return "bg-gray-500";
    }
  };

  const getDifficultyLabel = (difficulty: string) => {
    switch (difficulty) {
      case "easy": return "آسان";
      case "medium": return "متوسط";
      case "hard": return "سخت";
      case "expert": return "حرفه‌ای";
      default: return difficulty;
    }
  };

  const checkScrollButtons = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (container) {
      checkScrollButtons();
      container.addEventListener("scroll", checkScrollButtons);
      window.addEventListener("resize", checkScrollButtons);
      return () => {
        container.removeEventListener("scroll", checkScrollButtons);
        window.removeEventListener("resize", checkScrollButtons);
      };
    }
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 280;
      scrollRef.current.scrollBy({
        left: direction === "right" ? scrollAmount : -scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const openModal = (room: Room) => {
    // Convert StaticImageData to string
    const imageSrc = typeof room.image === 'string' ? room.image : room.image.src;
    
    const modalData: RoomModalData = {
      id: room.id,
      name: room.name,
      description: room.description,
      story: room.story,
      price: room.price,
      duration: room.duration,
      players: room.players,
      difficulty: room.difficulty,
      rating: room.rating,
      image: imageSrc,
      images: room.images || [],
    };
    
    setSelectedRoom(modalData);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedRoom(null);
  };

  return (
    <>
      <section className="w-full bg-gray-50 py-16 px-4" id="rooms">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-black text-gray-900">اتاق‌های فرار</h2>
              <p className="text-gray-500 text-sm mt-1">یکی رو انتخاب کن و وارد ماجراجویی شو</p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => scroll("left")}
                disabled={!canScrollLeft}
                className="p-2 bg-white rounded-full shadow-md hover:shadow-lg transition hover:scale-105 border border-gray-200 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                <ChevronRight size={20} className="text-gray-700" />
              </button>
              <button
                onClick={() => scroll("right")}
                disabled={!canScrollRight}
                className="p-2 bg-white rounded-full shadow-md hover:shadow-lg transition hover:scale-105 border border-gray-200 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                <ChevronLeft size={20} className="text-gray-700" />
              </button>
            </div>
          </div>

          {/* Carousel */}
          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto scroll-smooth pb-4 hide-scrollbar cursor-grab active:cursor-grabbing select-none"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {rooms.map((room) => (
              <div
                key={room.id}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-shadow duration-300 border border-gray-100 flex-shrink-0 w-[220px] flex flex-col cursor-pointer"
                onMouseEnter={() => setHoveredId(room.id)}
                onMouseLeave={() => setHoveredId(null)}
                onClick={() => openModal(room)}
              >
                {/* Image */}
                <div className="relative w-full aspect-[2/3] overflow-hidden bg-gray-200 flex-shrink-0">
                  <Image
                    src={room.image}
                    alt={room.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="220px"
                  />

                  {/* Difficulty Badge */}
                  <div
                    className={`absolute top-2 right-2 px-2 py-0.5 rounded-full text-[10px] font-bold text-white shadow-lg ${getDifficultyColor(
                      room.difficulty
                    )}`}
                  >
                    {getDifficultyLabel(room.difficulty)}
                  </div>

                  {/* Rating Badge */}
                  <div className="absolute bottom-2 left-2 px-2 py-0.5 bg-black/70 backdrop-blur-sm rounded-lg text-white text-[10px] flex items-center gap-1">
                    <Star size={12} className="fill-yellow-400 text-yellow-400" />
                    {room.rating}
                  </div>

                  {/* Hover Info */}
                  <div className={`absolute inset-0 bg-black/60 backdrop-blur-sm flex flex-col items-center justify-center p-4 transition-opacity duration-300 ${
                    hoveredId === room.id ? "opacity-100" : "opacity-0"
                  }`}>
                    <p className="text-white text-sm text-center leading-relaxed line-clamp-4">
                      {room.description}
                    </p>
                    <span className="mt-3 px-6 py-2 bg-white text-gray-900 rounded-xl text-sm font-bold hover:bg-gray-100 transition">
                      مشاهده و رزرو
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-2.5 flex flex-col flex-1">
                  <h3 className="text-sm font-bold text-gray-900 line-clamp-1 leading-tight">
                    {room.name}
                  </h3>

                  <div className="flex items-center gap-2 text-[10px] text-gray-500 mt-1">
                    <span className="flex items-center gap-0.5">
                      <Clock size={12} />
                      {room.duration}&apos;
                    </span>
                    <span className="flex items-center gap-0.5">
                      <Users size={12} />
                      {room.players}
                    </span>
                  </div>

                  <div className="mt-1">
                    <span className="text-xs font-bold text-blue-600">
                      {room.price.toLocaleString()} تومان
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <style jsx>{`
            .hide-scrollbar::-webkit-scrollbar {
              display: none;
            }
          `}</style>
        </div>
      </section>

      {/* Modal */}
      <RoomModal
        room={selectedRoom}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </>
  );
}