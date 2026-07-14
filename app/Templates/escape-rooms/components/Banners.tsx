"use client";

import Link from "next/link";

export default function Banner() {
  return (
    <section className="w-full bg-white py-12 px-4 moraba-Font">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 gap-3 md:gap-6">
          {/* Banner 1 - گرادیانت آبی */}
          <Link
            href="#"
            className="group relative overflow-hidden rounded-2xl md:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1"
          >
            <div className="relative w-full aspect-[4/3] md:aspect-[3/2] bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 flex items-center justify-center p-3 md:p-8">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-10 left-10 text-7xl">🎯</div>
                <div className="absolute bottom-10 right-10 text-7xl">⭐</div>
              </div>
              
              <div className="relative z-10 text-center">
                <span className="text-white/80 text-[8px] md:text-sm font-medium bg-white/20 backdrop-blur-sm px-2 md:px-4 py-0.5 md:py-1.5 rounded-full mb-1 md:mb-4 inline-block">
                  🎉 تخفیف ویژه
                </span>
                <h3 className="text-xs md:text-3xl font-black text-white mb-0.5 md:mb-2">
                  اتاق فرار
                </h3>
                <p className="text-white/90 text-[10px] md:text-lg font-bold">
                  با ۳۰٪ تخفیف
                </p>
                <span className="mt-1 md:mt-4 inline-block px-3 md:px-6 py-1 md:py-2.5 bg-white text-gray-900 rounded-full text-[8px] md:text-sm font-bold hover:scale-105 transition-transform">
                  رزرو کن
                </span>
              </div>
            </div>
          </Link>

          {/* Banner 2 - گرادیانت نارنجی */}
          <Link
            href="#"
            className="group relative overflow-hidden rounded-2xl md:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1"
          >
            <div className="relative w-full aspect-[4/3] md:aspect-[3/2] bg-gradient-to-br from-orange-500 via-red-600 to-pink-600 flex items-center justify-center p-3 md:p-8">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-10 left-10 text-7xl">🚀</div>
                <div className="absolute bottom-10 right-10 text-7xl">🌙</div>
              </div>
              
              <div className="relative z-10 text-center">
                <span className="text-white/80 text-[8px] md:text-sm font-medium bg-white/20 backdrop-blur-sm px-2 md:px-4 py-0.5 md:py-1.5 rounded-full mb-1 md:mb-4 inline-block">
                  🚀 جدید
                </span>
                <h3 className="text-xs md:text-3xl font-black text-white mb-0.5 md:mb-2">
                  عمارت تسخیر شده
                </h3>
                <p className="text-white/90 text-[10px] md:text-lg font-bold">
                  جدیدترین اتاق فرار
                </p>
                <span className="mt-1 md:mt-4 inline-block px-3 md:px-6 py-1 md:py-2.5 bg-white text-gray-900 rounded-full text-[8px] md:text-sm font-bold hover:scale-105 transition-transform">
                  مشاهده
                </span>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}