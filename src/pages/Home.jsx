import { Link } from "react-router-dom";
import { Search } from "lucide-react";

import Navbar from "../components/Navbar";
import EventCard from "../components/EventCard";

import { useAuth } from "../context/AuthContext";
import { useEvent } from "../context/EventContext";

function Home() {
  const { user } = useAuth();
  const { events } = useEvent();

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-slate-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 via-white to-indigo-100">
          <div className="mx-auto flex max-w-7xl flex-col items-center px-6 py-24 text-center">
            <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
              {user
                ? `Welcome back, ${user.fullName || user.name}! 👋`
                : "Welcome to Evently"}
            </span>

            <h1 className="mt-8 text-5xl font-extrabold leading-tight text-slate-900 md:text-7xl">
              Discover Amazing
              <br />
              <span className="text-blue-600">
                Events Near You
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-500">
              Find concerts, conferences, workshops, festivals and community
              events happening around you. Save your favourites and never miss
              another event.
            </p>

            {/* Search */}
            {/* <div className="mt-12 flex w-full max-w-2xl items-center rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-lg">
              <Search
                size={22}
                className="text-slate-400"
              />

              <input
                type="text"
                placeholder="Search events..."
                className="ml-4 w-full bg-transparent outline-none placeholder:text-slate-400"
              />
            </div> */}

            {!user && (
              <div className="mt-10 flex flex-wrap justify-center gap-4">
                <Link
                  to="/signup"
                  className="rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-700"
                >
                  Get Started
                </Link>

                <Link
                  to="/login"
                  className="rounded-xl border border-slate-300 px-8 py-4 font-semibold transition hover:border-blue-600 hover:text-blue-600"
                >
                  Sign In
                </Link>
              </div>
            )}
          </div>
        </section>

        {/* Events */}
        <section className="mx-auto max-w-7xl px-6 py-20">
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-bold text-slate-900">
              Upcoming Events
            </h2>

            <p className="mt-3 text-slate-500">
              Browse events happening around you.
            </p>
          </div>

          {events.length === 0 ? (
            <div className="rounded-3xl border border-dashed border-slate-300 bg-white py-20 text-center">
              <h3 className="text-2xl font-semibold text-slate-700">
                No Events Available
              </h3>

              <p className="mt-3 text-slate-500">
                Create your first event to get started.
              </p>
            </div>
          ) : (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {events.map((event) => (
                <EventCard
                  key={event.id}
                  event={event}
                />
              ))}
            </div>
          )}
        </section>
      </main>
    </>
  );
}

export default Home;