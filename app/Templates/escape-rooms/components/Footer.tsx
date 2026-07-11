"use client";

import Link from "next/link";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  ChevronUp,
  Ghost,
  Skull,
  Moon
} from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative w-full bg-black text-white overflow-hidden moraba-Font">
      {/* Background Effect - ترسناک */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-red-900/20 via-black to-purple-900/20" />
        <div className="absolute top-10 left-10 text-6xl">👻</div>
        <div className="absolute bottom-20 right-10 text-8xl animate-pulse">🦇</div>
        <div className="absolute top-1/2 left-1/4 text-5xl animate-bounce">💀</div>
        <div className="absolute bottom-1/3 right-1/4 text-4xl animate-pulse">🕷️</div>
      </div>

      {/* Spider Web Decoration */}
      <div className="absolute top-0 right-0 w-48 h-48 opacity-10">
        <div className="w-full h-full border-l-2 border-r-2 border-white rounded-full rotate-45" />
        <div className="w-3/4 h-3/4 border-l-2 border-r-2 border-white rounded-full rotate-45 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        <div className="w-1/2 h-1/2 border-l-2 border-r-2 border-white rounded-full rotate-45 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Ghost className="text-red-500" size={28} />
              <h2 className="text-2xl font-black text-white">
                فرار<span className="text-red-500">باما</span>
              </h2>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              وارد دنیای تاریک معمایی شو و از ترسناک‌ترین اتاق‌های فرار کشور فرار کن.
            </p>
            <div className="mt-4 flex items-center gap-3">
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <Skull size={16} className="text-red-500" />
                <span>۶+ اتاق ترسناک</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
              <Moon size={18} className="text-red-500" />
              لینک‌های سریع
            </h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="#rooms" className="hover:text-red-500 transition">
                  اتاق‌های فرار
                </Link>
              </li>
              <li>
                <Link href="#about" className="hover:text-red-500 transition">
                  درباره ما
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-red-500 transition">
                  تماس با ما
                </Link>
              </li>
              <li>
                <Link href="#blog" className="hover:text-red-500 transition">
                  وبلاگ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
              <Phone size={18} className="text-red-500" />
              تماس با ما
            </h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-red-500 mt-1 flex-shrink-0" />
                <span className="text-sm">تهران، خیابان وحیدیه، پلاک ۱۳</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-red-500 flex-shrink-0" />
                <span className="text-sm">۰۲۱-۱۲۳۴-۵۶۷۸</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-red-500 flex-shrink-0" />
                <span className="text-sm">info@fararbama.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Clock size={18} className="text-red-500 flex-shrink-0" />
                <span className="text-sm">۱۰:۰۰ - ۲۲:۰۰</span>
              </li>
            </ul>
          </div>

          {/* Social Media - بدون آیکون */}
          <div>
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
              <Ghost size={18} className="text-red-500" />
              ما را دنبال کن
            </h3>
            <div className="flex flex-col gap-3">
              <a
                href="#"
                className="px-4 py-2 bg-white/5 hover:bg-red-500/20 rounded-xl border border-white/10 hover:border-red-500/30 transition-all duration-300 text-sm text-gray-400 hover:text-red-500 text-center"
              >
                اینستاگرام
              </a>
              <a
                href="#"
                className="px-4 py-2 bg-white/5 hover:bg-red-500/20 rounded-xl border border-white/10 hover:border-red-500/30 transition-all duration-300 text-sm text-gray-400 hover:text-red-500 text-center"
              >
                تلگرام
              </a>
              <a
                href="#"
                className="px-4 py-2 bg-white/5 hover:bg-red-500/20 rounded-xl border border-white/10 hover:border-red-500/30 transition-all duration-300 text-sm text-gray-400 hover:text-red-500 text-center"
              >
                یوتیوب
              </a>
            </div>
            <div className="mt-4 p-4 bg-white/5 rounded-2xl border border-white/10">
              <p className="text-xs text-gray-500 text-center">
                🕷️ ما را دنبال کن تا از تخفیف‌های ترسناک مطلع شی!
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            © ۱۴۰۳ فرارباما | تمامی حقوق محفوظ است
          </p>
          <div className="flex items-center gap-2 text-xs text-gray-600">
            <span>ساخته شده با</span>
            <span className="text-red-500">🖤</span>
            <span>و</span>
            <span className="text-red-500">👻</span>
          </div>
        </div>

        {/* Scroll to Top Button */}
        <button
          onClick={scrollToTop}
          className="absolute bottom-8 right-8 w-12 h-12 bg-red-500/20 hover:bg-red-500/40 rounded-full flex items-center justify-center transition-all duration-300 border border-red-500/30 hover:scale-110 group"
          aria-label="بازگشت به بالا"
        >
          <ChevronUp size={24} className="text-red-500 group-hover:text-red-400 transition" />
        </button>
      </div>
    </footer>
  );
}