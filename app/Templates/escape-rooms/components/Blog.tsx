"use client";

import Link from "next/link";
import { Newspaper, ArrowLeft, CalendarDays } from "lucide-react";

const posts = [
  {
    id: 1,
    title: "۵ ترفند برای حل سریع‌تر معماهای اتاق فرار",
    excerpt: "ارتباط تیمی، تقسیم وظایف و دقت در جزئیات؛ کلیدهای موفقیت در اولین تلاش.",
    date: "۱۴۰۳/۰۹/۱۰",
    tag: "آموزشی",
    emoji: "🧩",
  },
  {
    id: 2,
    title: "معرفی اتاق عمارت تسخیر شده؛ ترسناک‌ترین تجربه ما",
    excerpt: "با دکوراسیون و نورپردازی سینمایی که لرزه بر اندامتان می‌اندازد بیشتر آشنا شوید.",
    date: "۱۴۰۳/۰۸/۲۵",
    tag: "اتاق‌ها",
    emoji: "👻",
  },
  {
    id: 3,
    title: "چرا اتاق فرار بهترین انتخاب برای تیم‌سازی است؟",
    excerpt: "چگونه یک بازی ۶۰ دقیقه‌ای می‌تواند همکاری و اعتماد تیم شما را تقویت کند.",
    date: "۱۴۰۳/۰۸/۱۰",
    tag: "شرکتی",
    emoji: "🤝",
  },
];

export default function Blog() {
  return (
    <section className="w-full bg-gray-50 py-16 px-4 moraba-Font" id="blog">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-4 text-sm font-medium text-blue-700 bg-blue-100/70 rounded-full">
              <Newspaper size={16} />
              وبلاگ و رویدادها
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">از دنیای اتاق فرار بخوانید</h2>
          </div>
          <Link
            href="#blog"
            className="flex items-center gap-1 text-sm font-bold text-blue-600 hover:underline"
          >
            مشاهده همه
            <ArrowLeft size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="h-40 bg-gradient-to-br from-blue-500/10 to-purple-500/10 flex items-center justify-center text-6xl">
                {post.emoji}
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-bold rounded-full">
                    {post.tag}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-gray-400">
                    <CalendarDays size={14} />
                    {post.date}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 leading-snug mb-2">{post.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed line-clamp-3">{post.excerpt}</p>
                <Link
                  href="#blog"
                  className="inline-flex items-center gap-1 mt-4 text-sm font-bold text-blue-600 hover:gap-2 transition-all"
                >
                  ادامه مطلب
                  <ArrowLeft size={16} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
