"use client";

import { useState } from "react";
import PosterCard from "./PosterCard";
import { movies, allGenres } from "../data/movies";

const MoviesBrowser = () => {
  const [active, setActive] = useState<string>("همه");

  const filtered =
    active === "همه"
      ? movies
      : movies.filter((m) => m.genres.includes(active));

  return (
    <div>
      <div className="mb-8 flex flex-wrap gap-2">
        {["همه", ...allGenres].map((g) => (
          <button
            key={g}
            onClick={() => setActive(g)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
              active === g
                ? "bg-white text-black shadow-lg shadow-white/10"
                : "border border-white/10 bg-white/5 text-neutral-300 hover:border-white/25 hover:text-white"
            }`}
          >
            {g}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="py-20 text-center text-neutral-400">
          فیلمی در این دسته‌بندی یافت نشد.
        </p>
      ) : (
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 md:grid-cols-4 lg:grid-cols-5">
          {filtered.map((movie) => (
            <PosterCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
};

export default MoviesBrowser;
