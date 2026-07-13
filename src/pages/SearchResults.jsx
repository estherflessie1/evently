import "./SearchResults.css";

import Navbar from "../components/Navbar/Navbar";
import SearchBar from "../components/SearchBar/SearchBar";
import EventGrid from "../components/EventGrid/EventGrid";
import Footer from "../components/Footer/Footer";

function SearchResults() {
  return (
    <>
      <Navbar />

      <main className="search-results-page">
        <div className="search-results-header">
          <h1>Search Results</h1>

          <p>
            Showing results for <strong>"Music"</strong>
          </p>
        </div>

        <div className="search-bar-wrapper">
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </div>

        <EventGrid />
      </main>

      <Footer />
    </>
  );
}

export default SearchResults;
