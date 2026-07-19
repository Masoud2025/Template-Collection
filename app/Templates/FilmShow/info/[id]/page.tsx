import { notFound } from "next/navigation";
import MovieDetail from "../../components/MovieDetail";
import { getMovie, getSimilar } from "../../data/movies";

export default async function InfoPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const movie = getMovie(Number(id));
  if (!movie) notFound();

  const similar = getSimilar(movie.id, 6);
  return <MovieDetail movie={movie} similar={similar} />;
}
