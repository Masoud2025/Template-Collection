import SectionHeader from "../components/SectionHeader";
import SeriesCard from "../components/SeriesCard";
import { Tv } from "lucide-react";
import { series } from "../data/movies";

export default function SeriesPage() {
  return (
    <div className="animate-fade-in bg-gradient-to-b from-neutral-950 to-black">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <SectionHeader
          title="سریال‌ها"
          subtitle="محبوب‌ترین سریال‌های ایرانی و خارجی"
          icon={<Tv className="h-5 w-5" />}
          accent="bg-sky-500/15 text-sky-400 ring-sky-500/30"
        />
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 md:grid-cols-4 lg:grid-cols-5">
          {series.map((item) => (
            <SeriesCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
