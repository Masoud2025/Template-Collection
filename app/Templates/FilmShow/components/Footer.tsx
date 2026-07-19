"use client";

import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import { BASE } from "../data/movies";

const Footer = () => {
  return (
    <footer className="w-full bg-black/95 border-t border-white/5 py-12 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div className="space-y-4">
            <Link href={`${BASE}`} className="inline-block">
              <span className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300 drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                فیلم‌بین
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              بزرگترین مرجع تماشای آنلاین فیلم و سریال با کیفیت بالا و زیرنویس اختصاصی.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-4">دسترسی سریع</h3>
            <ul className="space-y-3">
              <li>
                <Link href={`${BASE}/movies`} className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                  فیلم‌ها
                </Link>
              </li>
              <li>
                <Link href={`${BASE}/series`} className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                  سریال‌ها
                </Link>
              </li>
              <li>
                <Link href={`${BASE}/new`} className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                  جدیدترین‌ها
                </Link>
              </li>
              <li>
                <Link href={`${BASE}/popular`} className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                  محبوب‌ترین‌ها
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-4">اطلاعات</h3>
            <ul className="space-y-3">
              <li>
                <Link href={`${BASE}/about`} className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                  درباره ما
                </Link>
              </li>
              <li>
                <Link href={`${BASE}/contact`} className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                  تماس با ما
                </Link>
              </li>
              <li>
                <Link href={`${BASE}/privacy`} className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                  حریم خصوصی
                </Link>
              </li>
              <li>
                <Link href={`${BASE}/terms`} className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                  قوانین و مقررات
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-4">تماس با ما</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Mail size={18} className="text-gray-500 flex-shrink-0" />
                <span>info@filmbetween.com</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Phone size={18} className="text-gray-500 flex-shrink-0" />
                <span>۰۲۱-۱۲۳۴-۵۶۷۸</span>
              </li>
              <li className="text-gray-500 text-sm pt-2">
                <span>تهران، خیابان ولیعصر، پلاک ۱۲</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} فیلم‌بین. تمامی حقوق محفوظ است.
          </p>
          <div className="flex items-center gap-6">
            <Link href={`${BASE}/privacy`} className="text-gray-500 hover:text-gray-400 text-xs transition-colors">
              حریم خصوصی
            </Link>
            <Link href={`${BASE}/terms`} className="text-gray-500 hover:text-gray-400 text-xs transition-colors">
              قوانین
            </Link>
            <Link href={`${BASE}/cookies`} className="text-gray-500 hover:text-gray-400 text-xs transition-colors">
              کوکی‌ها
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;