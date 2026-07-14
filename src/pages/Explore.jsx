import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import Navbar from "../components/Navbar/Navbar";
import ExploreHeader from "../components/ExploreHeader/ExploreHeader";
import SearchBar from "../components/SearchBar/SearchBar";
import CategoryFilter from "../components/CategoryFilter/CategoryFilter";
import FilterSidebar from "../components/FilterSidebar/FilterSidebar";
import EventGrid from "../components/EventGrid/EventGrid";
import EmptyState from "../components/EmptyState/EmptyState";
import Footer from "../components/Footer/Footer";

import events from "../data/events";

import "./Explore.css";

function Explore() {
  const [searchParams] = useSearchParams();

  const [searchTerm, setSearchTerm] = useState(
    searchParams.get("search") || "",
  );

  const [selectedCategory, setSelectedCategory] = useState(
    searchParams.get("category") || "All",
  );

  const [selectedCity, setSelectedCity] = useState("Any City");

  useEffect(() => {
    setSearchTerm(searchParams.get("search") || "");
    setSelectedCategory(searchParams.get("category") || "All");
  }, [searchParams]);

  const filteredEvents = events.filter((event) => {
    const matchesSearch =
      event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.category.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" || event.category === selectedCategory;

    const matchesCity =
      selectedCity === "Any City" ||
      event.location.toLowerCase().includes(selectedCity.toLowerCase());

    return matchesSearch && matchesCategory && matchesCity;
  });

  const clearFilters = () => {
    setSearchTerm("");
    setSelectedCategory("All");
    setSelectedCity("Any City");
  };

  return (
    <>
      <Navbar />

      <ExploreHeader />

      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      <CategoryFilter
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      <main className="explore-content">
        <aside className="sidebar">
          <FilterSidebar
            selectedCity={selectedCity}
            setSelectedCity={setSelectedCity}
          />
        </aside>

        <section className="events-section">
          {filteredEvents.length > 0 ? (
            <EventGrid events={filteredEvents} />
          ) : (
            <EmptyState onClearFilters={clearFilters} />
          )}
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Explore;
