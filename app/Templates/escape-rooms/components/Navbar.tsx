"use client";

import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../assets/images/Logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isGenresOpen, setIsGenresOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleGenres = () => setIsGenresOpen(!isGenresOpen);

  const navLinks = [
    { name: "خانه", href: "/" },
    { name: "ژانرها", href: "#", hasDropdown: true },
    { name: "لیزرتگ", href: "#lasertag" },
    { name: "قوانین و مقررات", href: "#rules" },
    { name: "درباره ما", href: "#about" },
    { name: "وبلاگ", href: "#blog" },
    { name: "ورود مدیریت", href: "/Templates/escape-rooms/admin/login" },
  ];

  const genres = [
    { name: "اتاق فرار", href: "#escape-room" },
    { name: "ماجراجویی", href: "#adventure" },
    { name: "ترسناک", href: "#horror" },
    { name: "معمایی", href: "#mystery" },
    { name: "تاریخی", href: "#historical" },
    { name: "علمی-تخیلی", href: "#sci-fi" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-blue-100 shadow-sm navbar">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <Image alt="logo" src={Logo} width={80} height={50} />
        </Link>

        {/* Desktop Menu - وسط */}
        <div className="hidden md:flex items-center justify-center gap-8 flex-1 mx-8">
          {navLinks.map((link) => (
            <div key={link.name} className="relative group">
              {link.hasDropdown ? (
                <>
                  <button className="flex items-center gap-1 text-base font-medium text-black hover:text-blue-600 transition">
                    {link.name}
                    <ChevronDown size={16} />
                  </button>
                  <div className="absolute top-full right-0 mt-2 w-56 bg-white rounded-xl shadow-2xl border border-blue-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="py-2">
                      {genres.map((genre) => (
                        <Link
                          key={genre.name}
                          href={genre.href}
                          className="block px-4 py-2.5 text-sm text-black hover:bg-blue-50 hover:text-blue-600 transition"
                        >
                          {genre.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <Link
                  href={link.href}
                  className="text-base font-medium text-black hover:text-blue-600 transition"
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 rounded-lg hover:bg-blue-50 transition"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-blue-100 bg-white">
          <div className="flex flex-col p-4 space-y-2">
            {navLinks.map((link) => (
              <div key={link.name}>
                {link.hasDropdown ? (
                  <>
                    <button
                      onClick={toggleGenres}
                      className="flex items-center justify-between w-full px-4 py-3 rounded-lg hover:bg-blue-50 transition"
                    >
                      <span>{link.name}</span>
                      <ChevronDown
                        size={16}
                        className={`transition-transform ${
                          isGenresOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {isGenresOpen && (
                      <div className="mr-4 space-y-1 border-r-2 border-blue-200 pr-4 mt-1">
                        {genres.map((genre) => (
                          <Link
                            key={genre.name}
                            href={genre.href}
                            onClick={() => {
                              setIsGenresOpen(false);
                              setIsOpen(false);
                            }}
                            className="block px-4 py-2 text-sm text-black hover:bg-blue-50 hover:text-blue-600 rounded-lg transition"
                          >
                            {genre.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block px-4 py-3 rounded-lg hover:bg-blue-50 transition"
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}