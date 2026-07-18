"use client";

import Image from "next/image";
import { useState } from "react";
import { Images } from "lucide-react";
import room1 from "../assets/images/rooms/room1.jpg";
import room2 from "../assets/images/rooms/room2.webp";
import room3 from "../assets/images/rooms/room3.webp";
import room4 from "../assets/images/rooms/room4.webp";
import room5 from "../assets/images/rooms/room5.webp";
import room6 from "../assets/images/rooms/room6.webp";
import room7 from "../assets/images/rooms/room7.webp";

const gallery = [
  { src: room2, title: "معبد گمشده" },
  { src: room3, title: "عمارت تسخیر شده" },
  { src: room1, title: "دفتر کارآگاه" },
  { src: room5, title: "اهرام مصر" },
  { src: room4, title: "آزمایشگاه مخفی" },
  { src: room6, title: "جزیره گنج" },
  { src: room7, title: "فضای بازی" },
  { src: room3, title: "دکور ترسناک" },
];

export default function Gallery() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section className="w-full bg-gray-50 py-16 px-4 moraba-Font" id="gallery">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-4 text-sm font-medium text-pink-700 bg-pink-100/70 rounded-full">
            <Images size={16} />
            گالری تصاویر
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900">حس اتاق‌ها رو از نزدیک ببین</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 auto-rows-[160px]">
          {gallery.map((item, i) => (
            <button
              key={i}
              onClick={() => setActive(active === item.title ? null : item.title)}
              className={`group relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 ${
                i % 5 === 0 ? "md:col-span-2 md:row-span-2" : ""
              }`}
            >
              <Image
                src={item.src}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80" />
              <span className="absolute bottom-3 right-3 text-white text-sm font-bold drop-shadow">
                {item.title}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
