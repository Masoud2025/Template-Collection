"use client";

import { Ticket, Users, Crown, Sparkles } from "lucide-react";

const packages = [
  {
    icon: Ticket,
    name: "تک‌نفره / دونفره",
    price: "۱۵۰",
    unit: "هزار تومان",
    per: "هر نفر",
    features: ["دسترسی به تمام اتاق‌ها", "رزرو آنلاین", "پشتیبانی حضوری", "تخفیف ۱۰٪"],
    highlight: false,
  },
  {
    icon: Users,
    name: "گروهی",
    price: "۱۳۰",
    unit: "هزار تومان",
    per: "هر نفر",
    features: ["۳ تا ۸ نفر", "تخفیف گروهی ۲۰٪", "عکس یادگاری رایگان", "نوشیدنی خوش‌آمدگویی"],
    highlight: true,
  },
  {
    icon: Crown,
    name: "ویژه / شرکتی",
    price: "۱۱۰",
    unit: "هزار تومان",
    per: "هر نفر",
    features: ["بسته تیم‌سازی", "اتاق اختصاصی", "میزبان اختصاصی", "تخفیف ۳۰٪ + هدیه"],
    highlight: false,
  },
];

export default function Packages() {
  return (
    <section className="w-full bg-white py-16 px-4 moraba-Font" id="packages">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-4 text-sm font-medium text-purple-700 bg-purple-100/70 rounded-full">
            <Sparkles size={16} />
            پکیج‌های ما
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900">انتخابی متناسب با تیم شما</h2>
          <p className="text-gray-500 text-sm mt-2">از بازی دونفره تا رویدادهای شرکتی، همه‌چیز آماده است</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`relative rounded-3xl p-8 border-2 transition-all duration-300 hover:-translate-y-2 ${
                pkg.highlight
                  ? "border-blue-500 bg-gradient-to-b from-blue-50 to-white shadow-2xl scale-100 md:scale-105"
                  : "border-gray-100 bg-gray-50 shadow-sm hover:shadow-xl"
              }`}
            >
              {pkg.highlight && (
                <span className="absolute -top-3 right-6 px-3 py-1 bg-blue-600 text-white text-xs font-bold rounded-full shadow-lg">
                  محبوب‌ترین
                </span>
              )}
              <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-5">
                <pkg.icon size={26} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">{pkg.name}</h3>
              <div className="mt-4 mb-6">
                <span className="text-4xl font-black text-gray-900">{pkg.price}</span>
                <span className="text-gray-500 text-sm mr-1">{pkg.unit}</span>
                <span className="block text-xs text-gray-400 mt-1">{pkg.per}</span>
              </div>
              <ul className="space-y-3 mb-8">
                {pkg.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 text-green-600">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`block text-center py-3 rounded-xl font-bold transition-all duration-300 hover:scale-[1.02] ${
                  pkg.highlight
                    ? "bg-blue-600 hover:bg-blue-700 text-white"
                    : "bg-gray-900 hover:bg-gray-800 text-white"
                }`}
              >
                رزرو این پکیج
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
