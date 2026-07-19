"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, Menu, X, User, CreditCard } from "lucide-react";
import { BASE } from "../data/movies";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="sticky top-0 z-50 w-full bg-black/40 backdrop-blur-2xl border-b border-white/5 shadow-2xl shadow-black/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">

          <div className="hidden md:flex items-center space-x-3 rtl:space-x-reverse">
            <Link
              href={`${BASE}/signup`}
              className="flex items-center gap-1.5 px-5 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-gray-800 to-gray-600 rounded-full shadow-lg shadow-black/50 hover:shadow-white/10 hover:scale-105 transition-all duration-300 border border-white/10"
            >
              <User size={18} />
              عضویت
            </Link>
            <Link
              href={`${BASE}/subscribe`}
              className="flex items-center gap-1.5 px-5 py-2.5 text-sm font-semibold text-white bg-white/5 backdrop-blur-sm border border-white/20 rounded-full shadow-lg shadow-black/50 hover:shadow-white/10 hover:scale-105 transition-all duration-300 hover:bg-white/10"
            >
              <CreditCard size={18} />
              خرید اشتراک
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-1 rtl:space-x-reverse">
            <Link
              href={`${BASE}`}
              className="px-4 py-2 text-neutral-300 hover:text-white font-medium rounded-lg hover:bg-white/5 hover:shadow-[0_0_20px_rgba(255,255,255,0.05)] transition-all duration-200"
            >
              خانه
            </Link>
            <Link
              href={`${BASE}/movies`}
              className="px-4 py-2 text-neutral-300 hover:text-white font-medium rounded-lg hover:bg-white/5 hover:shadow-[0_0_20px_rgba(255,255,255,0.05)] transition-all duration-200"
            >
              فیلم‌ها
            </Link>
            <Link
              href={`${BASE}/series`}
              className="px-4 py-2 text-neutral-300 hover:text-white font-medium rounded-lg hover:bg-white/5 hover:shadow-[0_0_20px_rgba(255,255,255,0.05)] transition-all duration-200"
            >
              سریال‌ها
            </Link>
            <Link
              href={`${BASE}/new`}
              className="px-4 py-2 text-neutral-300 hover:text-white font-medium rounded-lg hover:bg-white/5 hover:shadow-[0_0_20px_rgba(255,255,255,0.05)] transition-all duration-200"
            >
              جدید
            </Link>
            <Link
              href={`${BASE}/popular`}
              className="px-4 py-2 text-neutral-300 hover:text-white font-medium rounded-lg hover:bg-white/5 hover:shadow-[0_0_20px_rgba(255,255,255,0.05)] transition-all duration-200"
            >
              محبوب
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href={`${BASE}/movies`}
              className="p-2.5 text-neutral-300 hover:text-white rounded-full hover:bg-white/5 hover:shadow-[0_0_25px_rgba(255,255,255,0.05)] transition-all duration-200"
              aria-label="جستجو"
            >
              <Search size={22} />
            </Link>

            <Link href={`${BASE}`} className="flex items-center">
              <span className="text-2xl md:text-3xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300 drop-shadow-[0_0_20px_rgba(255,255,255,0.15)]">
                فیلم‌بین
              </span>
            </Link>

            <button
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-md text-neutral-300 hover:text-white hover:bg-white/5 transition-colors"
              aria-label="منو"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

        </div>
      </div>

      <div
        className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 pt-4 pb-8 space-y-2 bg-black/60 backdrop-blur-2xl border-t border-white/5">
          <Link
            href={`${BASE}`}
            className="block text-neutral-300 hover:text-white text-lg font-medium px-4 py-3 rounded-xl hover:bg-white/5 transition-all"
            onClick={toggleMenu}
          >
            خانه
          </Link>
          <Link
            href={`${BASE}/movies`}
            className="block text-neutral-300 hover:text-white text-lg font-medium px-4 py-3 rounded-xl hover:bg-white/5 transition-all"
            onClick={toggleMenu}
          >
            فیلم‌ها
          </Link>
          <Link
            href={`${BASE}/series`}
            className="block text-neutral-300 hover:text-white text-lg font-medium px-4 py-3 rounded-xl hover:bg-white/5 transition-all"
            onClick={toggleMenu}
          >
            سریال‌ها
          </Link>
          <Link
            href={`${BASE}/new`}
            className="block text-neutral-300 hover:text-white text-lg font-medium px-4 py-3 rounded-xl hover:bg-white/5 transition-all"
            onClick={toggleMenu}
          >
            جدید
          </Link>
          <Link
            href={`${BASE}/popular`}
            className="block text-neutral-300 hover:text-white text-lg font-medium px-4 py-3 rounded-xl hover:bg-white/5 transition-all"
            onClick={toggleMenu}
          >
            محبوب
          </Link>

          <div className="flex flex-col gap-3 pt-4 border-t border-white/5">
            <Link
              href={`${BASE}/signup`}
              className="flex items-center justify-center gap-2 px-4 py-3.5 text-sm font-semibold text-white bg-gradient-to-r from-gray-800 to-gray-600 rounded-full shadow-lg shadow-black/50 border border-white/10 hover:shadow-white/10 transition-all"
              onClick={toggleMenu}
            >
              <User size={20} />
              عضویت
            </Link>
            <Link
              href={`${BASE}/subscribe`}
              className="flex items-center justify-center gap-2 px-4 py-3.5 text-sm font-semibold text-white bg-white/5 backdrop-blur-sm border border-white/20 rounded-full shadow-lg shadow-black/50 hover:bg-white/10 transition-all"
              onClick={toggleMenu}
            >
              <CreditCard size={20} />
              خرید اشتراک
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;