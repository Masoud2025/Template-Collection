"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

interface Faq {
  q: string;
  a: string;
}

const faqs: Faq[] = [
  { q: "حداقل و حداکثر تعداد بازیکنان چند نفر است؟", a: "هر اتاق بین ۱ تا ۸ نفر ظرفیت دارد. تعداد دقیق را در صفحه هر اتاق می‌توانید مشاهده کنید." },
  { q: "آیا سن خاصی برای بازی لازم است؟", a: "بیشتر اتاق‌ها برای سنین ۱۲ سال به بالا مناسب‌اند. برای اتاق‌های ترسناک، حضور همراه بزرگسال برای نوجوانان توصیه می‌شود." },
  { q: "اگر نتوانستیم در زمان رزرو حاضر شویم چه می‌شود؟", a: "لغو رزرو تا ۲۴ ساعت قبل از زمان بازی کاملاً رایگان است. برای تغییر ساعت با پشتیبانی در تماس باشید." },
  { q: "پرداخت چطور انجام می‌شود؟", a: "پرداخت به صورت نقدی در محل انجام می‌شود. نیازی به پرداخت اینترنتی هنگام رزرو نیست." },
  { q: "آیا برای تولد یا مراسم شرکتی مناسب است؟", a: "بله! اتاق‌های فرار برای تیم‌سازی، تولد و دورهمی‌های دوستانه بسیار عالی هستند. برای هماهنگی بسته‌های ویژه با ما تماس بگیرید." },
  { q: "مدت زمان هر بازی چقدر است؟", a: "زمان استاندارد هر اتاق بین ۶۰ تا ۹۰ دقیقه شامل توضیحات اولیه و بازی است." },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="w-full bg-gray-50 py-16 px-4 moraba-Font" id="faq">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-4 text-sm font-medium text-blue-700 bg-blue-100/70 rounded-full">
            <HelpCircle size={16} />
            سوالات متداول
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900">پرسش‌های شما، پاسخ‌های ما</h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={faq.q}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 p-5 text-right hover:bg-gray-50 transition"
                >
                  <span className="font-bold text-gray-900">{faq.q}</span>
                  <ChevronDown
                    size={20}
                    className={`text-blue-600 flex-shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>
                <div
                  className={`grid transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-sm text-gray-600 leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
