import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

import EventBanner from "../components/EventBanner/EventBanner";
import EventInfo from "../components/EventInfo/EventInfo";
import RegistrationCard from "../components/RegistrationCard/RegistrationCard";
import OrganizerCard from "../components/OrganizerCard/OrganizerCard";
import RelatedEvents from "../components/RelatedEvents/RelatedEvents";

import { useParams } from "react-router-dom";
import events from "../data/events";

import "./EventDetails.css";

function EventDetails() {
  const { id } = useParams();

  const event = events.find((item) => item.id === Number(id));

  // Show a message if the event ID doesn't exist
  if (!event) {
    return (
      <>
        <Navbar />
        <main className="event-details">
          <h2>Event not found</h2>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      <main className="event-details">
        {/* Pass the selected event */}
        <EventBanner event={event} />

        <div className="details-layout">
          <div className="left-column">
            <EventInfo event={event} />
            <OrganizerCard />
          </div>

          <div className="right-column">
            <RegistrationCard event={event} />
          </div>
        </div>

        <RelatedEvents />
      </main>

      <Footer />
    </>
  );
}

export default EventDetails;
