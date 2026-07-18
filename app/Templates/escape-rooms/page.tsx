import { Suspense } from "react";
import About from "./components/About";
import Banner from "./components/Banners";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import FAQ from "./components/FAQ";
import Gallery from "./components/Gallery";
import Genres from "./components/Genres";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import JumpScare from "./components/JumpScare";
import Navbar from "./components/Navbar";
import Newsletter from "./components/Newsletter";
import Packages from "./components/Packages";
import RoomsSection from "./components/RoomsSection";
import Rules from "./components/Rules";
import Stats from "./components/Stats";
import Testimonials from "./components/PlayersComment";
import RoomCards from "./components/RoomCards";
import SearchBar from "./components/SearchBar";
import TrustBadges from "./components/TrustBadges";

export default function EscapeRoomsPage() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <Hero />
      <Suspense fallback={null}>
        <SearchBar />
      </Suspense>
      <Suspense fallback={null}>
        <RoomsSection />
      </Suspense>
      <About />
      <Stats />
      <Suspense fallback={null}>
        <Genres />
      </Suspense>
      <HowItWorks />
      <RoomCards title="محبوب‌ترین اتاق‌ها" subtitle="بیشترین رزروهای ماه" />
      <Packages />
      <Testimonials />
      <Gallery />
      <Banner />
      <Rules />
      <Blog />
      <FAQ />
      <Contact />
      <TrustBadges />
      <Newsletter />
      <RoomCards title="آخرین فرصت‌ها" subtitle="پیش از بسته شدن اتاق‌ها، همین حالا رزرو کن" />
      <JumpScare triggerDelay={8000} autoTrigger={true} />
    </div>
  );
}
