import SectionHeader from "../components/SectionHeader";
import MovieGridSection from "../components/MovieGridSection";
import { Sparkles } from "lucide-react";
import { newReleases } from "../data/movies";

export default function NewPage() {
  return (
    <div className="animate-fade-in bg-gradient-to-b from-neutral-950 to-black">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <SectionHeader
          title="تازه‌ترین‌ها"
          subtitle="جدیدترین اکران‌های فیلم‌بین"
          icon={<Sparkles className="h-5 w-5" />}
          accent="bg-emerald-500/15 text-emerald-400 ring-emerald-500/30"
        />
        <MovieGridSection movies={newReleases} />
      </div>
    </div>
  );
}
