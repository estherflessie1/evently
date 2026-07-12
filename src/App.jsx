import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import EventDetails from "./pages/eventdetails";
import Explore from "./pages/Explore";
import SearchResults from "./pages/SearchResults";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/event/:id" element={<EventDetails />} />
      <Route path="/explore" element={<Explore />} />
      <Route path="/search" element={<SearchResults />} />
    </Routes>
  );
}

export default App;
