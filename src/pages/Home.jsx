import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import CategoryFilter from "../components/CategoryFilter/CategoryFilter";
import UpcomingEvents from "../components/UpcomingEvents/UpcomingEvents";
import Footer from "../components/Footer/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <CategoryFilter redirect={true} />
      <UpcomingEvents />
      <Footer />
    </>
  );
}

export default Home;
