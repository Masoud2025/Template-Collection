import About from "./components/About";
import Banner from "./components/Banners";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import FAQ from "./components/FAQ";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import JumpScare from "./components/JumpScare";
import Navbar from "./components/Navbar";
import Newsletter from "./components/Newsletter";
import Packages from "./components/Packages";
import Rules from "./components/Rules";
import Stats from "./components/Stats";
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
      <Stats />
      <HowItWorks />
      <RoomCards />
      <Packages />
      <Testimonials />
      <Banner />
      <Rules />
      <Blog />
      <FAQ />
      <Contact />
      <Newsletter />
      <RoomCards />
      <JumpScare triggerDelay={8000} autoTrigger={true} />
    </div>
  );
}
