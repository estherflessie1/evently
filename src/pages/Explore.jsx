import Navbar from "../components/Navbar/Navbar";
import SectionTitle from "../components/SectionTitle/SectionTitle";
import SearchBar from "../components/SearchBar/SearchBar";
import Footer from "../components/Footer/Footer";

function Explore() {
  return (
    <>
      <Navbar />

      <main>
        <SectionTitle
          title="Explore Events"
          subtitle="Discover exciting events happening around the world."
        />

        <SearchBar />

        {/* FilterBar */}

        {/* Category Chips */}

        {/* Event Grid */}

        {/* Load More */}
      </main>

      <Footer />
    </>
  );
}

export default Explore;
