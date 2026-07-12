import { createContext, useContext, useEffect, useState } from "react";
import eventsData from "../data/events";

const EventContext = createContext();

function EventProvider({ children }) {
  const [events, setEvents] = useState(() => {
    const savedEvents = JSON.parse(
      localStorage.getItem("eventlyEvents")
    );

    // First time opening the app
    if (!savedEvents) {
      return eventsData;
    }

    // Merge default events with saved events
    const mergedEvents = [...eventsData];

    savedEvents.forEach((savedEvent) => {
      const exists = mergedEvents.some(
        (event) => event.id === savedEvent.id
      );

      if (!exists) {
        mergedEvents.push(savedEvent);
      }
    });

    return mergedEvents;
  });

  useEffect(() => {
    localStorage.setItem(
      "eventlyEvents",
      JSON.stringify(events)
    );
  }, [events]);

  // Create Event
  const addEvent = (newEvent) => {
    setEvents((prevEvents) => [...prevEvents, newEvent]);
  };

  // Delete Event
  const deleteEvent = (id) => {
    setEvents((prevEvents) =>
      prevEvents.filter((event) => event.id !== id)
    );
  };

  // Update Event
  const updateEvent = (updatedEvent) => {
    setEvents((prevEvents) =>
      prevEvents.map((event) =>
        event.id === updatedEvent.id
          ? updatedEvent
          : event
      )
    );
  };

  return (
    <EventContext.Provider
      value={{
        events,
        setEvents,
        addEvent,
        deleteEvent,
        updateEvent,
      }}
    >
      {children}
    </EventContext.Provider>
  );
}

export const useEvent = () => {
  const context = useContext(EventContext);

  if (!context) {
    throw new Error(
      "useEvent must be used inside an EventProvider"
    );
  }

  return context;
};

export default EventProvider;