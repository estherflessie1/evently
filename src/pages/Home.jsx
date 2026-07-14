import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import CategoryFilter from "../components/CategoryFilter/CategoryFilter";
import UpcomingEvents from "../components/UpcomingEvents/UpcomingEvents";
import Footer from "../components/Footer/Footer";

import { useAuth } from "../context/AuthContext";

function Home() {
  const { user } = useAuth();

  return (
    <>
      <Navbar />

      {user && (
        <div className="bg-blue-50 py-3 text-center text-blue-600 font-semibold">
          Welcome back, {user.fullName || user.name}! 👋
        </div>
      )}

      <Hero />

      <CategoryFilter redirect={true} />

      <UpcomingEvents />

      <Footer />
    </>
  );
}

export default Home;
