import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import EventDetails from "./pages/eventdetails";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/event/:id" element={<EventDetails />} />
    </Routes>
  );
}

export default App;
