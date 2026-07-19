import Link from "next/link";
import Image from "next/image";
import { Star, Play } from "lucide-react";
import { BASE, type Movie } from "../data/movies";

const BLUR =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAADAAQDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD3+iiigD/2Q==";

type Props = {
  movie: Movie;
  sizes?: string;
  priority?: boolean;
};

const PosterCard = ({ movie, sizes, priority = false }: Props) => {
  return (
    <Link
      href={`${BASE}${movie.link}`}
      className="group relative block aspect-[2/3] overflow-hidden rounded-2xl border border-white/10 bg-neutral-900 shadow-lg shadow-black/40 transition-all duration-500 ease-out hover:-translate-y-1.5 hover:border-white/20 hover:shadow-2xl hover:shadow-black/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
      aria-label={`${movie.title} (${movie.year})`}
    >
      <Image
        src={movie.image}
        alt={movie.title}
        fill
        sizes={
          sizes ??
          "(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
        }
        quality={80}
        placeholder="blur"
        blurDataURL={BLUR}
        preload={priority}
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
      />

      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/80 to-transparent" />

      <div className="absolute right-2 top-2 flex flex-col items-end gap-1.5">
        <span className="rounded-md bg-black/60 px-2 py-0.5 text-[10px] font-bold tracking-wide text-white backdrop-blur-sm ring-1 ring-white/15">
          {movie.quality}
        </span>
        <span className="rounded-md bg-amber-500/90 px-2 py-0.5 text-[10px] font-bold text-black shadow-sm">
          {movie.genre}
        </span>
      </div>

      <div className="absolute left-2 top-2 flex items-center gap-1 rounded-md bg-black/60 px-2 py-1 backdrop-blur-sm ring-1 ring-white/10">
        <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
        <span className="text-xs font-semibold text-white">{movie.rating}</span>
      </div>

      <div className="absolute inset-x-0 bottom-0 translate-y-1 p-3 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
        <div className="flex items-end justify-between gap-2">
          <div className="min-w-0">
            <h3 className="truncate text-sm font-bold text-white drop-shadow">
              {movie.title}
            </h3>
            <span className="text-xs text-white/70">{movie.year}</span>
          </div>
          <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-white/15 text-white opacity-0 backdrop-blur-sm ring-1 ring-white/25 transition-all delay-75 duration-500 group-hover:opacity-100">
            <Play className="h-4 w-4 fill-current" />
          </span>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 p-3 transition-opacity duration-300 group-hover:opacity-0">
        <h3 className="truncate text-sm font-bold text-white drop-shadow">
          {movie.title}
        </h3>
        <span className="text-xs text-white/70">{movie.year}</span>
      </div>
    </Link>
  );
};

export default PosterCard;
