import dynamic from "next/dynamic";
import Header from "./components/header";
import Navigation from "./components/navigation";
import ExploreMore from "./components/explore-more";

// FlightSearch is dynamically imported to disable SSR.
const FlightSearch = dynamic(() => import("./components/flight-search"), {
  ssr: false,
});

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#E7E8EA]">
      {/* HEADER + NAVIGATION */}
      <div className="bg-[#051423] pb-6">
        <Header />
        <div className="max-w-7xl mx-auto px-4">
          <Navigation />
        </div>
      </div>

      {/* Flight Search Section */}
      <div className="max-w-7xl mx-auto px-4 mt-12 relative z-10">
        <FlightSearch />
      </div>

      {/* EXPLORE MORE SECTION */}
      <div className="max-w-7xl mx-auto px-4 mt-6">
        <ExploreMore />
      </div>
    </main>
  );
}

