"use client";

import { useState } from "react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { Search, Users, Tag, Zap, X } from "lucide-react";

export default function SearchBar() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [roomName, setRoomName] = useState(() => searchParams.get("name") || "");
  const [players, setPlayers] = useState(() => searchParams.get("players") || "");
  const [difficulty, setDifficulty] = useState(
    () => searchParams.get("difficulty") || ""
  );

  const applyFilters = (extra?: Record<string, string>) => {
    const params = new URLSearchParams();
    if (roomName.trim()) params.set("name", roomName.trim());
    if (players) params.set("players", players);
    if (difficulty) params.set("difficulty", difficulty);
    if (extra) {
      Object.entries(extra).forEach(([k, v]) => {
        if (v) params.set(k, v);
        else params.delete(k);
      });
    }
    const query = params.toString();
    router.push(`${pathname}${query ? `?${query}` : ""}`, { scroll: false });
    if (typeof document !== "undefined") {
      document.getElementById("rooms")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    applyFilters();
  };

  const clearAll = () => {
    setRoomName("");
    setPlayers("");
    setDifficulty("");
    router.push(pathname, { scroll: false });
    document.getElementById("rooms")?.scrollIntoView({ behavior: "smooth" });
  };

  const hasFilters = roomName || players || difficulty;

  return (
    <section className="w-full bg-white py-8 px-4 mt-[-11rem] navbar">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-6">
          <h2 className="text-2xl font-black text-black navbar">پیدا کن اتاق مورد علاقت رو</h2>
          <p className="text-gray-500 text-sm mt-1 navbar">با فیلترهای زیر سریع پیدا کن</p>
        </div>

        {/* Search Form */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col md:flex-row items-center gap-3 bg-gray-50 rounded-2xl p-4 shadow-md border border-gray-200"
        >
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
          <button
            type="submit"
            className="w-full md:w-auto px-8 py-3 bg-black text-white rounded-xl font-bold text-sm hover:scale-105 transition-all duration-300 shadow-lg whitespace-nowrap flex items-center justify-center gap-2"
          >
            <Tag size={16} />
            جستجو
          </button>
        </form>

        {hasFilters && (
          <div className="flex items-center justify-center gap-2 mt-4 flex-wrap">
            <button
              onClick={clearAll}
              className="flex items-center gap-1 px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-xl text-sm font-medium text-gray-700 transition"
            >
              <X size={14} />
              پاک کردن فیلترها
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
