import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function FilmShowLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col bg-black font-vazir text-white antialiased">
      <Navbar />
      <div className="flex-1">{children}</div>
      <Footer />
    </div>
  );
}
