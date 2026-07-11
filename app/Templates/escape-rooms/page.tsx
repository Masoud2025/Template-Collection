import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Testimonials from "./components/PlayersComment";
import RoomCards from "./components/RoomCards";
import SearchBar from "./components/SearchBar";

export default function EscapeRoomsPage() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <Hero />
      <SearchBar />
      <RoomCards />
      <Testimonials/>
      <RoomCards />

    </div>
  );
}
