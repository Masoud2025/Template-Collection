"use client";

import { Search, CalendarCheck, KeyRound, PartyPopper } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "انتخاب اتاق",
    text: "از بین اتاق‌های متنوع، محبوب‌ترین یا مناسب‌ترین مورد را بر اساس درجه سختی و تعداد نفرات انتخاب کن.",
  },
  {
    icon: CalendarCheck,
    title: "رزرو آنلاین",
    text: "تاریخ و ساعت دلخواه را انتخاب کرده و فرم رزرو را در کمتر از یک دقیقه پر کنید. پرداخت در محل.",
  },
  {
    icon: KeyRound,
    title: "حضور در محل",
    text: "در زمان مقرر در شعبه حاضر شوید، تیم ما شما را راهنمایی کرده و وارد دنیای معما می‌کند.",
  },
  {
    icon: PartyPopper,
    title: "فرار و لذت!",
    text: "با همکاری تیمی معماها را حل کنید، از اتاق فرار کنید و لحظاتی فراموش‌نشدنی بسازید.",
  },
];

export default function HowItWorks() {
  return (
    <section className="w-full bg-white py-16 px-4 moraba-Font">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-4 text-sm font-medium text-blue-700 bg-blue-100/70 rounded-full">
            <CalendarCheck size={16} />
            چطور کار می‌کنه؟
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900">۴ قدم تا یک ماجراجویی</h2>
          <p className="text-gray-500 text-sm mt-2">رزرو و بازی در فرارباما به همین سادگی است</p>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute top-12 right-0 left-0 h-1 bg-gradient-to-l from-blue-200 via-blue-300 to-blue-200 rounded-full" />
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <div key={step.title} className="relative text-center">
                <div className="relative z-10 mx-auto w-24 h-24 bg-white border-4 border-blue-100 rounded-full flex items-center justify-center shadow-lg mb-5">
                  <step.icon size={34} className="text-blue-600" />
                  <span className="absolute -top-2 -right-2 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-black shadow-md">
                    {i + 1}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed px-2">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
