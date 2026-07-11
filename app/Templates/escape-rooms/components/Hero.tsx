"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section className="w-full bg-white py-24 px-8 moraba-Font">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Content - Right Side */}
        <div className="flex-1 text-center md:text-right">
          {/* Badge */}
          <div className="inline-block px-4 py-1.5 mb-6 text-sm font-medium text-blue-700 bg-blue-100/70 rounded-full">
            🧩  فرارباما بهترین مدیریت اتاق فرار در کشور
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-black leading-tight">
            فرار کن از
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">
              روزمرگی
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-6 text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto md:mx-0 leading-relaxed">
            وارد دنیای معمایی شو، با دوستانت رقابت کن و از اتاق فرار خارج شو
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row items-center md:justify-start gap-4">
            <Link
              href="#rooms"
              className="px-8 py-3.5 bg-black text-white rounded-2xl font-bold text-base hover:scale-105 transition-all duration-300 shadow-lg"
            >
              همین حالا امتحان کن
            </Link>
            <Link
              href="#about"
              className="px-8 py-3.5 bg-white border-2 border-black/20 text-black rounded-2xl font-bold text-base hover:scale-105 transition-all duration-300"
            >
              بیشتر بدانید
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-12 flex flex-wrap items-center justify-center md:justify-start gap-6 md:gap-10">
            <div>
              <div className="text-2xl font-black text-black">۶+</div>
              <div className="text-sm text-gray-500">اتاق فرار</div>
            </div>
            <div className="w-px h-8 bg-gray-300" />
            <div>
              <div className="text-2xl font-black text-black">۱۵۰+</div>
              <div className="text-sm text-gray-500">بازی‌کننده</div>
            </div>
            <div className="w-px h-8 bg-gray-300" />
            <div>
              <div className="text-2xl font-black text-black">۹۰%</div>
              <div className="text-sm text-gray-500">رضایت</div>
            </div>
          </div>
        </div>

        {/* Video - Left Side */}
        <div className="flex-1 w-full">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full max-w-2xl mx-auto rounded-3xl  border-gray-200"
          >
            <source src="/videos/Hero.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
}