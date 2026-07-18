"use client";

import Image from "next/image";
import { Target, Sparkles, ShieldCheck, Clock, Users, Heart } from "lucide-react";
import aboutImage from "../assets/images/rooms/room7.webp";

const features = [
  { icon: Target, title: "معماهای حرفه‌ای", text: "طراحی شده توسط برترین طراحان بازی" },
  { icon: ShieldCheck, title: "امن و استاندارد", text: "رعایت کامل پروتکل‌های ایمنی" },
  { icon: Clock, title: "زمان‌بندی دقیق", text: "شروع به موقع و بدون معطلی" },
  { icon: Users, title: "مناسب گروهی", text: "تیم‌سازی و دورهمی دوستانه" },
  { icon: Sparkles, title: "فضاسازی باورنکردنی", text: "دکوراسیون و نورپردازی سینمایی" },
  { icon: Heart, title: "رضایت ۹۰٪", text: "تجربه‌ای که دوستش خواهید داشت" },
];

export default function About() {
  return (
    <section className="w-full bg-gray-50 py-16 px-4 moraba-Font" id="about">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src={aboutImage}
                alt="فضای اتاق فرار فرارباما"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="absolute -bottom-5 -right-3 bg-blue-600 text-white rounded-2xl px-6 py-4 shadow-xl">
              <p className="text-3xl font-black">۶+</p>
              <p className="text-xs">سال تجربه</p>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-4 text-sm font-medium text-blue-700 bg-blue-100/70 rounded-full">
              <Sparkles size={16} />
              درباره فرارباما
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 leading-tight">
              فرارباما؛ بهترین مقصد برای یک ماجراجویی واقعی
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              ما با بیش از ۶ سال تجربه در زمینه طراحی و اجرای اتاق‌های فرار، محیطی امن و هیجان‌انگیز برای
              دوستان، خانواده‌ها و تیم‌های شرکتی فراهم کرده‌ایم. هر اتاق داستانی جداگانه، معماهای چالش‌برانگیز
              و فضاسازی منحصربه‌فرد دارد تا دقایقی به‌یادماندنی را تجربه کنید.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-8">
              {features.map((f) => (
                <div
                  key={f.title}
                  className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center mb-3">
                    <f.icon size={20} className="text-blue-600" />
                  </div>
                  <h3 className="text-sm font-bold text-gray-900">{f.title}</h3>
                  <p className="text-xs text-gray-500 mt-1 leading-relaxed">{f.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
