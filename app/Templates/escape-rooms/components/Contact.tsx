"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: "", phone: "", message: "" });
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section className="w-full bg-gray-50 py-16 px-4 moraba-Font" id="contact">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-4 text-sm font-medium text-blue-700 bg-blue-100/70 rounded-full">
            <Send size={16} />
            تماس با ما
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900">سوالی دارید؟ با ما در ارتباط باشید</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Info */}
          <div className="space-y-4">
            {[
              { icon: MapPin, title: "آدرس", text: "تهران، خیابان وحیدیه، پلاک ۱۳" },
              { icon: Phone, title: "تلفن", text: "۰۲۱-۱۲۳۴-۵۶۷۸" },
              { icon: Mail, title: "ایمیل", text: "info@fararbama.com" },
              { icon: Clock, title: "ساعات کاری", text: "همه‌روزه ۱۰:۰۰ تا ۲۲:۰۰" },
            ].map((item) => (
              <div
                key={item.title}
                className="flex items-center gap-4 bg-white rounded-2xl p-5 border border-gray-100 shadow-sm"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <item.icon size={22} className="text-blue-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-sm">{item.title}</h3>
                  <p className="text-gray-500 text-sm mt-0.5">{item.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-6 md:p-8 border border-gray-100 shadow-sm space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">نام و نام خانوادگی</label>
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="نام خود را وارد کنید"
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm text-black transition"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">شماره تماس</label>
              <input
                type="tel"
                required
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                placeholder="۰۹۱۲۳۴۵۶۷۸۹"
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm text-black transition"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">پیام</label>
              <textarea
                required
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="سوال یا پیام خود را بنویسید"
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm text-black resize-none transition"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold text-sm transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2"
            >
              {sent ? <CheckCircle size={18} /> : <Send size={18} />}
              {sent ? "پیام شما ارسال شد" : "ارسال پیام"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
