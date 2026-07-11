"use client";

import { useState } from "react";
import { Search, Users, Tag, Zap } from "lucide-react";

export default function SearchBar() {
  const [roomName, setRoomName] = useState("");
  const [players, setPlayers] = useState("");
  const [difficulty, setDifficulty] = useState("");

  return (
    <section className="w-full bg-white py-8 px-4 mt-[-11rem] navbar">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-6">
          <h2 className="text-2xl font-black text-black navbar">پیدا کن اتاق مورد علاقت رو</h2>
          <p className="text-gray-500 text-sm mt-1 navbar">با فیلترهای زیر سریع پیدا کن</p>
        </div>

        {/* Search Form */}
        <div className="flex flex-col md:flex-row items-center gap-3 bg-gray-50 rounded-2xl p-4 shadow-md border border-gray-200">
          {/* Search Input */}
          <div className="flex-1 w-full relative">
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="اسم اتاق فرار..."
              value={roomName}
              onChange={(e) => setRoomName(e.target.value)}
              className="w-full pr-10 pl-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 transition text-sm"
            />
          </div>

          {/* Players Select */}
          <div className="w-full md:w-44 relative">
            <Users className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <select
              value={players}
              onChange={(e) => setPlayers(e.target.value)}
              className="w-full pr-10 pl-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 transition text-sm appearance-none"
            >
              <option value="">تعداد نفرات</option>
              <option value="1">۱ نفر</option>
              <option value="2">۲ نفر</option>
              <option value="3">۳ نفر</option>
              <option value="4">۴ نفر</option>
              <option value="5">۵ نفر</option>
              <option value="6">۶+ نفر</option>
            </select>
          </div>

          {/* Difficulty Select */}
          <div className="w-full md:w-44 relative">
            <Zap className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <select
              value={difficulty}
              onChange={(e) => setDifficulty(e.target.value)}
              className="w-full pr-10 pl-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 transition text-sm appearance-none"
            >
              <option value="">درجه سختی</option>
              <option value="easy">آسان</option>
              <option value="medium">متوسط</option>
              <option value="hard">سخت</option>
              <option value="expert">حرفه‌ای</option>
            </select>
          </div>

          {/* Search Button */}
          <button className="w-full md:w-auto px-8 py-3 bg-black text-white rounded-xl font-bold text-sm hover:scale-105 transition-all duration-300 shadow-lg whitespace-nowrap">
            جستجو
          </button>
        </div>
      </div>
    </section>
  );
}