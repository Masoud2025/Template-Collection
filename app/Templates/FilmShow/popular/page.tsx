import SectionHeader from "../components/SectionHeader";
import MovieGridSection from "../components/MovieGridSection";
import { Flame } from "lucide-react";
import { movies } from "../data/movies";

export default function PopularPage() {
  const popular = [...movies].sort((a, b) => b.rating - a.rating);
  return (
    <div className="animate-fade-in bg-gradient-to-b from-neutral-950 to-black">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <SectionHeader
          title="محبوب‌ترین‌ها"
          subtitle="پرطرفدارترین فیلم‌ها بر اساس امتیاز کاربران"
          icon={<Flame className="h-5 w-5" />}
          accent="bg-rose-500/15 text-rose-400 ring-rose-500/30"
        />
        <MovieGridSection movies={popular} />
      </div>
    </div>
  );
}
