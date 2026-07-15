import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import EventDetails from "./pages/EventDetails";
import Explore from "./pages/Explore";
import SearchResults from "./pages/SearchResults";
import Register from "./pages/Register";
import About from "./pages/About";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/event/:id" element={<EventDetails />} />

      <Route path="/explore" element={<Explore />} />

      <Route path="/search" element={<SearchResults />} />

      <Route path="/register/:id" element={<Register />} />

      <Route path="/about" element={<About />} />

      <Route path="/signin" element={<SignIn />} />

      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
}

export default App;
