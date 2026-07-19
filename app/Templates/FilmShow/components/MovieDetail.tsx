import Image from "next/image";
import Link from "next/link";
import { Star, Clock, Calendar, Globe, Clapperboard, Play } from "lucide-react";
import PosterCard from "./PosterCard";
import type { Movie } from "../data/movies";
import { BASE } from "../data/movies";

const BLUR =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAADAAQDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD3+iiigD/2Q==";

const MetaItem = ({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) => (
  <div className="flex items-center gap-2.5 rounded-xl border border-white/5 bg-white/5 px-4 py-3">
    <span className="text-amber-400">{icon}</span>
    <div className="leading-tight">
      <p className="text-xs text-neutral-400">{label}</p>
      <p className="text-sm font-semibold text-white">{value}</p>
    </div>
  </div>
);

const MovieDetail = ({ movie, similar }: { movie: Movie; similar: Movie[] }) => {
  return (
    <div className="animate-fade-in">
      <section className="relative">
        <div className="absolute inset-0">
          <Image
            src={movie.image}
            alt={movie.title}
            fill
            quality={80}
            placeholder="blur"
            blurDataURL={BLUR}
            sizes="100vw"
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/40" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <div className="flex flex-col gap-8 md:flex-row md:items-end">
            <div className="w-40 flex-shrink-0 overflow-hidden rounded-2xl border border-white/10 shadow-2xl shadow-black/60 ring-1 ring-white/10 sm:w-52">
              <div className="aspect-[2/3] relative">
                <Image
                  src={movie.image}
                  alt={movie.title}
                  fill
                  quality={80}
                  placeholder="blur"
                  blurDataURL={BLUR}
                  sizes="(max-width: 640px) 40vw, 208px"
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            <div className="flex-1 space-y-5">
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-md bg-amber-500/90 px-2.5 py-1 text-xs font-bold text-black">
                  {movie.quality}
                </span>
                {movie.genres.map((g) => (
                  <span
                    key={g}
                    className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-xs font-medium text-neutral-200"
                  >
                    {g}
                  </span>
                ))}
              </div>

              <h1 className="text-3xl font-black text-white drop-shadow sm:text-5xl">
                {movie.title}
              </h1>

              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1.5 rounded-full bg-black/50 px-3 py-1.5 text-sm font-semibold backdrop-blur-sm ring-1 ring-white/10">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-white">{movie.rating}</span>
                  <span className="text-neutral-400">/ ۱۰</span>
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3 sm:max-w-md">
                <MetaItem
                  icon={<Calendar className="h-4 w-4" />}
                  label="سال تولید"
                  value={String(movie.year)}
                />
                <MetaItem
                  icon={<Clock className="h-4 w-4" />}
                  label="مدت زمان"
                  value={`${movie.duration} دقیقه`}
                />
                <MetaItem
                  icon={<Globe className="h-4 w-4" />}
                  label="کشور"
                  value={movie.country}
                />
                <MetaItem
                  icon={<Clapperboard className="h-4 w-4" />}
                  label="کارگردان"
                  value={movie.director}
                />
              </div>

              <p className="max-w-2xl text-base leading-relaxed text-neutral-300">
                {movie.description}
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  type="button"
                  className="flex items-center gap-2.5 rounded-full bg-white px-7 py-3.5 text-sm font-bold text-black shadow-2xl shadow-black/50 transition-all duration-300 hover:scale-105 hover:bg-neutral-200"
                >
                  <Play size={20} fill="currentColor" />
                  پخش فیلم
                </button>
                <Link
                  href={`${BASE}/subscribe`}
                  className="flex items-center gap-2.5 rounded-full border border-white/20 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-white/10"
                >
                  خرید اشتراک
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {similar.length > 0 && (
        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <h2 className="mb-6 text-2xl font-black text-white sm:text-3xl">
            عناوین مشابه
          </h2>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 md:grid-cols-4 lg:grid-cols-6">
            {similar.map((m) => (
              <PosterCard key={m.id} movie={m} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default MovieDetail;
