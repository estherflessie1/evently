import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import EventDetails from "./pages/eventdetails";
import Explore from "./pages/Explore";
import SearchResults from "./pages/SearchResults";
import Register from "./pages/Register";
import About from "./pages/About";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/event/:id" element={<EventDetails />} />
      <Route path="/explore" element={<Explore />} />
      <Route path="/search" element={<SearchResults />} />
      <Route path="/register/:id" element={<Register />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default App;
