import Navbar from "../components/Navbar/Navbar";
import ExploreHeader from "../components/ExploreHeader/ExploreHeader";
import SearchBar from "../components/SearchBar/SearchBar";
import CategoryFilter from "../components/CategoryFilter/CategoryFilter";
import Footer from "../components/Footer/Footer";
import FilterSidebar from "../components/FilterSidebar/FilterSidebar";
import EventGrid from "../components/EventGrid/EventGrid";

import { useState } from "react";
import events from "../data/events";

import "./Explore.css";

function Explore() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredEvents = events.filter((event) => {
    return (
      event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.category.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <>
      <Navbar />

      <ExploreHeader />

      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      <CategoryFilter />

      <main className="explore-content">
        <aside className="sidebar">
          <FilterSidebar />
        </aside>

        <section className="events-section">
          <EventGrid events={filteredEvents} />
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Explore;
