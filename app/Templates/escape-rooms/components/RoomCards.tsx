"use client";

import { useState, useRef, useEffect, useMemo } from "react";
import Image, { StaticImageData } from "next/image";
import { Clock, Users, Star, ChevronLeft, ChevronRight, SearchX } from "lucide-react";
import RoomModal from "./RoomModal";
import { rooms as allRooms, type Room, type Genre } from "../lib/escape-room/rooms";

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

interface RoomCardsProps {
  title?: string;
  subtitle?: string;
  genre?: Genre;
  searchParams?: { name?: string; players?: string; difficulty?: string };
}

export default function RoomCards({
  title = "اتاق‌های فرار",
  subtitle = "یکی رو انتخاب کن و وارد ماجراجویی شو",
  genre = "همه",
  searchParams,
}: RoomCardsProps) {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [selectedRoom, setSelectedRoom] = useState<RoomModalData | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const rooms = useMemo(() => {
    let result = genre === "همه" ? allRooms : allRooms.filter((r) => r.genre === genre);
    if (searchParams?.name) {
      const q = searchParams.name.trim().toLowerCase();
      result = result.filter((r) => r.name.toLowerCase().includes(q));
    }
    if (searchParams?.difficulty) {
      result = result.filter((r) => r.difficulty === searchParams.difficulty);
    }
    if (searchParams?.players) {
      const p = Number(searchParams.players);
      result = result.filter((r) => {
        const max = Number(r.players.split("-").pop()?.replace(/[^0-9]/g, "") || "0");
        const min = Number(r.players.split("-")[0]?.replace(/[^0-9]/g, "") || "0");
        if (p === 6) return max >= 6;
        return p >= min && p <= max;
      });
    }
    return result;
  }, [genre, searchParams]);

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
  }, [rooms.length]);

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
    const imageSrc = typeof room.image === "string" ? room.image : room.image.src;
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
      <section className="w-full bg-gray-50 py-16 px-4" id={genre === "همه" ? "rooms" : undefined}>
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-black text-gray-900">{title}</h2>
              <p className="text-gray-500 text-sm mt-1">{subtitle}</p>
            </div>
            {rooms.length > 0 && (
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
            )}
          </div>

          {rooms.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-3xl border border-dashed border-gray-200">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-lg font-bold text-gray-900">اتاقی با این مشخصات پیدا نشد</h3>
              <p className="text-gray-500 text-sm mt-1">فیلترهای خود را تغییر دهید یا همه اتاق‌ها را مشاهده کنید.</p>
            </div>
          ) : (
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
          )}

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
