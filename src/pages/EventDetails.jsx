import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

import EventBanner from "../components/EventBanner/EventBanner";
import EventInfo from "../components/EventInfo/EventInfo";
import RegistrationCard from "../components/RegistrationCard/RegistrationCard";

import "./EventDetails.css";

function EventDetails() {
  return (
    <>
      <Navbar />

      <main className="event-details">
        <EventBanner />

        <div className="details-layout">
          <div className="left-column">
            <EventInfo />
          </div>

          <div className="right-column">
            <RegistrationCard />
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default EventDetails;
