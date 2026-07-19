import PosterCard from "./PosterCard";
import type { Movie } from "../data/movies";

type Props = {
  movies: Movie[];
  emptyText?: string;
};

const MovieGridSection = ({ movies, emptyText = "موردی یافت نشد." }: Props) => {
  if (movies.length === 0) {
    return (
      <p className="py-20 text-center text-neutral-400">{emptyText}</p>
    );
  }
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 md:grid-cols-4 lg:grid-cols-5">
      {movies.map((movie) => (
        <PosterCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MovieGridSection;
