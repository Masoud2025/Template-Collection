import Link from "next/link";
import { ArrowLeft, Flame } from "lucide-react";
import PosterCard from "./PosterCard";
import { BASE, movies } from "../data/movies";

const MovieGrid = () => {
  return (
    <section className="w-full bg-gradient-to-b from-black via-neutral-950 to-black py-14 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-500/15 text-amber-400 ring-1 ring-amber-500/30">
              <Flame className="h-5 w-5" />
            </span>
            <div>
              <h2 className="text-2xl font-black text-white sm:text-3xl">
                جدیدترین فیلم‌ها
              </h2>
              <p className="mt-0.5 text-sm text-neutral-400">
                تازه‌ترین آثار برای تماشا
              </p>
            </div>
          </div>
          <Link
            href={`${BASE}/movies`}
            className="group flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-neutral-300 transition-all duration-300 hover:border-white/25 hover:bg-white/10 hover:text-white"
          >
            مشاهده همه
            <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-0.5" />
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 md:grid-cols-4 lg:grid-cols-5">
          {movies.map((movie, i) => (
            <PosterCard
              key={movie.id}
              movie={movie}
              priority={i < 5}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MovieGrid;
