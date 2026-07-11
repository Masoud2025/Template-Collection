"use client";

import { useState } from "react";
import Image from "next/image";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  comment: string;
  rating: number;
  avatar: string;
}

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "مهدی رضایی",
      role: "مدیر شرکت پویا",
      comment: "بهترین تجربه‌ای که تا حالا در اتاق فرار داشتم. طراحی معماها فوق‌العاده بود و تیم ما حسابی کیف کرد. حتماً دوباره می‌ایم!",
      rating: 5,
      avatar: "/avatars/1.jpg",
    },
    {
      id: 2,
      name: "سارا محمدی",
      role: "کارشناس ارشد کامپیوتر",
      comment: "اتاق معبد گمشده واقعاً شاهکار بود. جزئیات بین‌نظیر و معماهای چالش‌برانگیز. پیشنهاد می‌کنم حتماً امتحان کنید.",
      rating: 4.8,
      avatar: "/avatars/2.jpg",
    },
    {
      id: 3,
      name: "علی کریمی",
      role: "بازی‌ساز",
      comment: "به عنوان کسی که با بازی سروکار داره، می‌تونم بگم کیفیت کار بالاست. فضاسازی و نورپردازی عالی بود.",
      rating: 5,
      avatar: "/avatars/3.jpg",
    },
    {
      id: 4,
      name: "مریم حسینی",
      role: "روانشناس کودک",
      comment: "برای تیم‌سازی و دورهمی‌های دوستانه عالیه. بچه‌ها خیلی لذت بردن و همکاری تیمی رو یاد گرفتن.",
      rating: 4.7,
      avatar: "/avatars/4.jpg",
    },
    {
      id: 5,
      name: "پدرام نوروزی",
      role: "دانشجوی معماری",
      comment: "فضاسازی اتاق عمارت تسخیر شده فوق‌العاده بود. دکوراسیون و جزئیات واقعاً ترسناک و در عین حال زیبا.",
      rating: 4.9,
      avatar: "/avatars/5.jpg",
    },
    {
      id: 6,
      name: "الهه مرادی",
      role: "بلاگر محتوایی",
      comment: "حتماً برای دوستانتون ببریدشون. یه تجربه کاملاً متفاوت و هیجان‌انگیز. منتظر اتاق‌های جدیدتون هستیم.",
      rating: 5,
      avatar: "/avatars/6.jpg",
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % Math.ceil(testimonials.length / 3));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + Math.ceil(testimonials.length / 3)) % Math.ceil(testimonials.length / 3));
  };

  // Touch drag handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!isDragging) return;
    setIsDragging(false);
    const endX = e.changedTouches[0].clientX;
    const diff = startX - endX;
    if (diff > 50) nextSlide();
    else if (diff < -50) prevSlide();
  };

  const getStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalf = rating % 1 >= 0.5;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />);
    }
    if (hasHalf) {
      stars.push(
        <Star key="half" size={16} className="fill-yellow-400 text-yellow-400 opacity-50" />
      );
    }
    return stars;
  };

  const itemsPerPage = 3;
  const totalPages = Math.ceil(testimonials.length / itemsPerPage);
  const currentItems = testimonials.slice(
    currentIndex * itemsPerPage,
    (currentIndex + 1) * itemsPerPage
  );

  return (
    <section className="w-full bg-white py-16 px-4 navbar" id="testimonials">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-100/60 rounded-full text-sm font-medium text-yellow-700 mb-4">
            <Quote size={16} />
            نظرات مشتریان
          </div>
          <h2 className="text-3xl font-black text-gray-900">مردم چه می‌گویند؟</h2>
          <p className="text-gray-500 text-sm mt-2">تجربه‌های واقعی از اتاق‌های فرار</p>
        </div>

        {/* Testimonials Grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {currentItems.map((item) => (
            <div
              key={item.id}
              className="group relative bg-gray-50 hover:bg-white rounded-3xl p-6 border border-gray-100 hover:border-gray-200 transition-all duration-300 hover:shadow-xl"
            >
              {/* Avatar */}
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white text-xl font-bold flex-shrink-0">
                  {item.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{item.name}</h4>
                  <p className="text-xs text-gray-500">{item.role}</p>
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-3">
                {getStars(item.rating)}
                <span className="text-xs text-gray-500 mr-1">{item.rating}</span>
              </div>

              {/* Comment */}
              <p className="text-gray-600 text-sm leading-relaxed line-clamp-4">
                &ldquo;{item.comment}&ldquo;
              </p>

              {/* Quote Icon */}
              <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition">
                <Quote size={40} className="text-gray-900" />
              </div>
            </div>
          ))}
        </div>

        {/* Navigation */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prevSlide}
              className="p-3 bg-gray-100 hover:bg-gray-200 rounded-full transition hover:scale-105"
            >
              <ChevronLeft size={20} className="text-gray-700" />
            </button>
            <div className="flex gap-2">
              {Array.from({ length: totalPages }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-blue-600 w-8"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={nextSlide}
              className="p-3 bg-gray-100 hover:bg-gray-200 rounded-full transition hover:scale-105"
            >
              <ChevronRight size={20} className="text-gray-700" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}