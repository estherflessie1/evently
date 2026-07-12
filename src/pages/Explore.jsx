import Navbar from "../components/Navbar/Navbar";
import ExploreHeader from "../components/ExploreHeader/ExploreHeader";
import CategoryFilter from "../components/CategoryFilter/CategoryFilter";
import Footer from "../components/Footer/Footer";
import FilterSidebar from "../components/FilterSidebar/FilterSidebar";

import "./Explore.css";

function Explore() {
  return (
    <>
      <Navbar />

      <ExploreHeader />

      <CategoryFilter />

      <main className="explore-content">
        <aside className="sidebar">
          <FilterSidebar />
        </aside>

        <section className="events-section">
          {/* Event Grid */}

          {/* Pagination */}
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Explore;
