"use client";

import { ScrollText, AlertTriangle, Clock, Users, Ban } from "lucide-react";

const rules = [
  { icon: Clock, title: "به موقع باشید", text: "حداقل ۱۵ دقیقه قبل از زمان بازی در شعبه حاضر شوید تا توضیحات را دریافت کنید." },
  { icon: Users, title: "همکاری تیمی", text: "اتاق فرار یک بازی گروهی است؛ با هم‌تیمی‌هایتان همکاری و ارتباط داشته باشید." },
  { icon: Ban, title: "وسایل شخصی", text: "حمل موبایل، دوربین و اشیای تیز به داخل اتاق مجاز نیست." },
  { icon: AlertTriangle, title: "احترام به تجهیزات", text: "به دکور و وسایل اتاق آسیب نزنید؛ خرابکاری منجر به مسئولیت مالی می‌شود." },
];

export default function Rules() {
  return (
    <section className="w-full bg-white py-16 px-4 moraba-Font" id="rules">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-4 text-sm font-medium text-amber-700 bg-amber-100/70 rounded-full">
            <ScrollText size={16} />
            قوانین و مقررات
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900">قبل از بازی این‌ها را بدانید</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {rules.map((rule) => (
            <div
              key={rule.title}
              className="bg-gray-50 rounded-3xl p-6 border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 bg-amber-100 rounded-2xl flex items-center justify-center mb-4">
                <rule.icon size={24} className="text-amber-600" />
              </div>
              <h3 className="text-base font-bold text-gray-900 mb-2">{rule.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{rule.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
