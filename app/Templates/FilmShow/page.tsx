import FullWidthBanner from "./components/FullWidthBanner";
import HeroSlider from "./components/HeroSlider";
import MovieGrid from "./components/MovieGrid";
import NewMoviesSlider from "./components/NewMoviesSlider";

export default function page() {
  return (
    <div className="animate-fade-in">
      <HeroSlider />
      <NewMoviesSlider />
      <FullWidthBanner />
      <MovieGrid />
      <NewMoviesSlider />
      <FullWidthBanner />
      <NewMoviesSlider />
    </div>
  );
}
