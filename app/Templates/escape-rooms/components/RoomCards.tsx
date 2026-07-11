"use client";

import { useState, useRef } from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import room1 from "../assets/images/rooms/room1.jpg";
import room2 from "../assets/images/rooms/room2.webp";
import room3 from "../assets/images/rooms/room3.webp";
import room4 from "../assets/images/rooms/room4.webp";
import room5 from "../assets/images/rooms/room5.webp";
import room6 from "../assets/images/rooms/room6.webp";
import { Clock, Users, Star, ChevronLeft, ChevronRight } from "lucide-react";

interface Room {
  id: number;
  name: string;
  description: string;
  price: number;
  duration: number;
  players: string;
  difficulty: "easy" | "medium" | "hard" | "expert";
  rating: number;
  image: StaticImageData;
}

export default function RoomCards() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const rooms: Room[] = [
    {
      id: 1,
      name: "معبد گمشده",
      description: "در اعماق یک معبد باستانی، گنج پنهان شده و شما باید رمز و راز آن را کشف کنید.",
      price: 150000,
      duration: 60,
      players: "۲-۶",
      difficulty: "medium",
      rating: 4.8,
      image: room2,
    },
    {
      id: 2,
      name: "دفتر کارآگاه",
      description: "یک کارآگاه مشهور ناپدید شده و شما باید با سرنخ‌های باقی‌مانده راز را کشف کنید.",
      price: 180000,
      duration: 75,
      players: "۱-۴",
      difficulty: "hard",
      rating: 4.9,
      image: room1,
    },
    {
      id: 3,
      name: "عمارت تسخیر شده",
      description: "یک عمارت قدیمی که شب‌ها صداهای عجیبی از آن شنیده می‌شود. جرات داری وارد شوی؟",
      price: 200000,
      duration: 90,
      players: "۳-۸",
      difficulty: "expert",
      rating: 4.7,
      image: room3,
    },
    {
      id: 4,
      name: "آزمایشگاه مخفی",
      description: "یک دانشمند دیوانه در آزمایشگاه خود چیزهای عجیبی ساخته و شما باید جلوی او را بگیرید.",
      price: 170000,
      duration: 60,
      players: "۲-۵",
      difficulty: "medium",
      rating: 4.6,
      image: room4,
    },
    {
      id: 5,
      name: "اهرام مصر",
      description: "در دل هرم بزرگ، راز فراعنه پنهان شده و شما باید آن را کشف کنید.",
      price: 190000,
      duration: 70,
      players: "۲-۶",
      difficulty: "hard",
      rating: 4.8,
      image: room5,
    },
    {
      id: 6,
      name: "جزیره گنج",
      description: "در یک جزیره دورافتاده، گنج دزدان دریایی پنهان شده و شما باید آن را پیدا کنید.",
      price: 160000,
      duration: 65,
      players: "۲-۴",
      difficulty: "easy",
      rating: 4.5,
      image: room6,
    },
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "easy":
        return "bg-emerald-500";
      case "medium":
        return "bg-amber-500";
      case "hard":
        return "bg-orange-500";
      case "expert":
        return "bg-rose-600";
      default:
        return "bg-gray-500";
    }
  };

  const getDifficultyLabel = (difficulty: string) => {
    switch (difficulty) {
      case "easy":
        return "آسان";
      case "medium":
        return "متوسط";
      case "hard":
        return "سخت";
      case "expert":
        return "حرفه‌ای";
      default:
        return difficulty;
    }
  };

  // Mouse drag handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (scrollRef.current?.offsetLeft || 0));
    setScrollLeft(scrollRef.current?.scrollLeft || 0);
    if (scrollRef.current) {
      scrollRef.current.style.cursor = "grabbing";
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    if (scrollRef.current) {
      const x = e.pageX - (scrollRef.current.offsetLeft || 0);
      const walk = (x - startX) * 1.5;
      scrollRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    if (scrollRef.current) {
      scrollRef.current.style.cursor = "grab";
    }
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      setIsDragging(false);
      if (scrollRef.current) {
        scrollRef.current.style.cursor = "grab";
      }
    }
  };

  // Touch drag handlers for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX - (scrollRef.current?.offsetLeft || 0));
    setScrollLeft(scrollRef.current?.scrollLeft || 0);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    if (scrollRef.current) {
      const x = e.touches[0].pageX - (scrollRef.current.offsetLeft || 0);
      const walk = (x - startX) * 1.5;
      scrollRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  // Scroll buttons
  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 280;
      scrollRef.current.scrollBy({
        left: direction === "right" ? scrollAmount : -scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="w-full bg-gray-50 py-16 px-4 moraba-Font" id="rooms">
      <div className="max-w-7xl mx-auto">
        {/* Header with Navigation */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-black text-gray-900">اتاق‌های فرار</h2>
            <p className="text-gray-500 text-sm mt-1">یکی رو انتخاب کن و وارد ماجراجویی شو</p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => scroll("left")}
              className="p-2 bg-white rounded-full shadow-md hover:shadow-lg transition hover:scale-105 border border-gray-200"
            >
              <ChevronRight size={20} className="text-gray-700" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="p-2 bg-white rounded-full shadow-md hover:shadow-lg transition hover:scale-105 border border-gray-200"
            >
              <ChevronLeft size={20} className="text-gray-700" />
            </button>
          </div>
        </div>

        {/* Carousel - Draggable */}
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scroll-smooth pb-4 hide-scrollbar cursor-grab active:cursor-grabbing select-none"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {rooms.map((room) => (
            <div
              key={room.id}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-shadow duration-300 border border-gray-100 flex-shrink-0 w-[220px] flex flex-col"
              onMouseEnter={() => !isDragging && setHoveredId(room.id)}
              onMouseLeave={() => !isDragging && setHoveredId(null)}
            >
              {/* Image - بدون تغییر سایز */}
              <div className="relative w-full aspect-[2/3] overflow-hidden bg-gray-200 flex-shrink-0">
                <Image
                  src={room.image}
                  alt={room.name}
                  fill
                  className="object-cover pointer-events-none"
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

                {/* Hover Info - روی عکس */}
                <div className={`absolute inset-0 bg-black/60 backdrop-blur-sm flex flex-col items-center justify-center p-4 transition-opacity duration-300 ${
                  hoveredId === room.id && !isDragging ? "opacity-100" : "opacity-0"
                }`}>
                  <p className="text-white text-sm text-center leading-relaxed line-clamp-4">
                    {room.description}
                  </p>
                  <Link
                    href="#"
                    className="mt-3 px-6 py-2 bg-white text-gray-900 rounded-xl text-sm font-bold hover:bg-gray-100 transition"
                  >
                    رزرو کن
                  </Link>
                </div>
              </div>

              {/* Content - بدون تغییر */}
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

        {/* Hide Scrollbar CSS */}
        <style jsx>{`
          .hide-scrollbar::-webkit-scrollbar {
            display: none;
          }
        `}</style>
      </div>
    </section>
  );
}