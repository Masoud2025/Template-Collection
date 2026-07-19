import SectionHeader from "../components/SectionHeader";
import MoviesBrowser from "../components/MoviesBrowser";
import { Film } from "lucide-react";

export default function MoviesPage() {
  return (
    <div className="animate-fade-in bg-gradient-to-b from-neutral-950 to-black">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <SectionHeader
          title="همه فیلم‌ها"
          subtitle="کامل‌ترین آرشیو فیلم‌های فیلم‌بین"
          icon={<Film className="h-5 w-5" />}
        />
        <MoviesBrowser />
      </div>
    </div>
  );
}
