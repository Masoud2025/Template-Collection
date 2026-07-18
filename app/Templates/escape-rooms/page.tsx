import About from "./components/About";
import Banner from "./components/Banners";
import Contact from "./components/Contact";
import FAQ from "./components/FAQ";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import JumpScare from "./components/JumpScare";
import Navbar from "./components/Navbar";
import Rules from "./components/Rules";
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
      <About />
      <HowItWorks />
      <RoomCards />
      <Testimonials />
      <Banner />
      <Rules />
      <FAQ />
      <Contact />
      <RoomCards />
      <JumpScare triggerDelay={8000} autoTrigger={true} />
    </div>
  );
}
