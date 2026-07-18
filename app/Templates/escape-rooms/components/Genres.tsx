"use client";

import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { Sparkles, FlaskConical, Skull, Mountain, ScrollText, Landmark } from "lucide-react";

const categoryData = [
  { name: "معمایی", icon: ScrollText, emoji: "🧩", color: "from-indigo-500 to-purple-600" },
  { name: "ترسناک", icon: Skull, emoji: "👻", color: "from-rose-500 to-red-600" },
  { name: "ماجراجویی", icon: Mountain, emoji: "🗺️", color: "from-emerald-500 to-teal-600" },
  { name: "علمی-تخیلی", icon: FlaskConical, emoji: "🔬", color: "from-cyan-500 to-blue-600" },
  { name: "تاریخی", icon: Landmark, emoji: "🏛️", color: "from-amber-500 to-orange-600" },
];

export default function Genres() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const selectGenre = (genre: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (genre === "همه") params.delete("genre");
    else params.set("genre", genre);
    const query = params.toString();
    router.push(`${pathname}${query ? `?${query}` : ""}`, { scroll: false });
    document.getElementById("rooms")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="w-full bg-white py-16 px-4 moraba-Font" id="genres">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-4 text-sm font-medium text-purple-700 bg-purple-100/70 rounded-full">
            <Sparkles size={16} />
            ژانرهای ما
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900">هر سلیقه‌ای، اتاق ماجراجویی خودش رو داره</h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {categoryData.map((cat) => (
            <button
              key={cat.name}
              onClick={() => selectGenre(cat.name)}
              className="group relative overflow-hidden rounded-3xl p-6 text-white bg-gradient-to-br shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${cat.color} opacity-90 group-hover:opacity-100 transition`} />
              <div className="relative z-10 text-center">
                <div className="text-4xl mb-3">{cat.emoji}</div>
                <h3 className="font-bold text-lg">{cat.name}</h3>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
