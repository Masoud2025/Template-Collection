"use client";

import { ShieldCheck, BadgeCheck, Headphones, Clock, Lock, ThumbsUp } from "lucide-react";

const badges = [
  { icon: ShieldCheck, title: "محیط کاملاً ایمن", text: "رعایت استانداردهای ایمنی" },
  { icon: BadgeCheck, title: "طراحی حرفه‌ای", text: "توسط بهترین طراحان بازی" },
  { icon: Headphones, title: "پشتیبانی ۲۴/۷", text: "پاسخگویی در لحظه" },
  { icon: Clock, title: "بدون معطلی", text: "شروع دقیق در زمان رزرو" },
  { icon: Lock, title: "پرداخت امن", text: "اطلاعات شما محفوظ است" },
  { icon: ThumbsUp, title: "رضایت ۹۰٪", text: "تجربه‌ای که دوستش دارید" },
];

export default function TrustBadges() {
  return (
    <section className="w-full bg-white py-12 px-4 moraba-Font">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {badges.map((b) => (
            <div
              key={b.title}
              className="flex flex-col items-center text-center p-4 rounded-2xl bg-gray-50 border border-gray-100 hover:shadow-md transition"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center mb-3">
                <b.icon size={24} className="text-blue-600" />
              </div>
              <h3 className="text-sm font-bold text-gray-900">{b.title}</h3>
              <p className="text-xs text-gray-500 mt-1">{b.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
