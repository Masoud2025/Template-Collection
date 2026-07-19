"use client";

import Image from "next/image";
import Link from "next/link";
import { Play, Sparkles } from "lucide-react";
import { BASE } from "../data/movies";

const FullWidthBanner = () => {
  return (
    <section className="relative w-full h-[300px] sm:h-[350px] md:h-[400px] overflow-hidden">
      <Image
        src="https://static.filmnet.ir/images/88/58/885875b6705342239a13d9231aa2e8d3.jpg?w=1920"
        alt="بنر سینمایی"
        fill
        quality={80}
        placeholder="blur"
        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAADAAQDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD3+iiigD/2Q=="
        preload
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />

      <div className="relative z-10 flex items-center justify-center h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-sm rounded-full border border-white/10 text-white/80 text-sm">
            <Sparkles size={16} className="text-yellow-400" />
            <span>پیشنهاد ویژه ماه</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight drop-shadow-2xl">
            با <span className="text-transparent bg-clip-text bg-gradient-to-l from-amber-300 to-orange-500">
              اشتراک ویژه
            </span> بی‌نهایت ببینید
          </h2>

          <p className="text-gray-300/90 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            دسترسی نامحدود به هزاران فیلم و سریال با کیفیت ۴K و دوبله‌ی حرفه‌ای. اولین ماه را با ۵۰٪ تخفیف تجربه کنید.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Link
              href={`${BASE}/subscribe`}
              className="flex items-center gap-2.5 px-8 py-3.5 text-sm font-semibold text-white bg-gradient-to-r from-amber-500 to-orange-500 rounded-full shadow-2xl shadow-orange-500/30 hover:shadow-orange-500/50 hover:scale-105 transition-all duration-300"
            >
              <Play size={18} fill="currentColor" />
              شروع تماشا
            </Link>
            <Link
              href={`${BASE}/movies`}
              className="flex items-center gap-2.5 px-8 py-3.5 text-sm font-semibold text-white bg-white/5 backdrop-blur-sm border border-white/20 rounded-full hover:bg-white/10 hover:scale-105 transition-all duration-300"
            >
              مشاهده فیلم‌ها
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FullWidthBanner;