import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";

export default function EscapeRoomsPage() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <Hero />
      <SearchBar />
    </div>
  );
}
