import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import EventDetails from "./pages/eventdetails";
import Explore from "./pages/Explore";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/event/:id" element={<EventDetails />} />
      <Route path="/explore" element={<Explore />} />
    </Routes>
  );
}

export default App;
