"use client";

import { useState } from "react";
import { Mail, Bell, CheckCircle } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setEmail("");
    setTimeout(() => setSubscribed(false), 4000);
  };

  return (
    <section className="w-full px-4 py-16 moraba-Font">
      <div className="max-w-5xl mx-auto relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 p-8 md:p-12 shadow-2xl">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-4 left-8 text-7xl">🔔</div>
          <div className="absolute bottom-4 right-8 text-7xl">🎁</div>
        </div>

        <div className="relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-4 text-sm font-medium bg-white/20 text-white rounded-full backdrop-blur-sm">
            <Bell size={16} />
            عضویت در خبرنامه
          </div>
          <h2 className="text-2xl md:text-4xl font-black text-white">اولین نفری باش که از تخفیف‌ها با خبر می‌شه!</h2>
          <p className="text-blue-100 mt-2 text-sm md:text-base">
            تخفیف‌های ویژه، اتاق‌های جدید و رویدادها را در ایمیلت دریافت کن.
          </p>

          <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-3 max-w-xl mx-auto">
            <div className="flex-1 relative">
              <Mail size={18} className="absolute right-3 top-1/2 -translate-y-1/2 text-white/70" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="آدرس ایمیل شما"
                className="w-full pr-10 pl-4 py-3.5 rounded-2xl bg-white/95 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/60 text-sm"
              />
            </div>
            <button
              type="submit"
              className="px-8 py-3.5 bg-white text-blue-700 rounded-2xl font-bold text-sm hover:scale-105 transition-all duration-300 shadow-lg whitespace-nowrap flex items-center justify-center gap-2"
            >
              {subscribed ? <CheckCircle size={18} /> : <Bell size={18} />}
              {subscribed ? "ثبت شد" : "عضویت"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
