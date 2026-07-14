import Navbar from "../components/Navbar";
import EventCard from "../components/EventCard";
import { useBookmark } from "../context/BookmarkContext";

function Bookmark() {
  const { bookmarks } = useBookmark();

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-slate-50">
        {/* Hero */}
        <section className="bg-gradient-to-br from-blue-50 via-white to-indigo-100">
          <div className="mx-auto max-w-7xl px-6 py-16">
            <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
              Your Collection
            </span>

            <h1 className="mt-6 text-5xl font-extrabold text-slate-900">
              Bookmarked Events
            </h1>

            <p className="mt-4 max-w-2xl text-lg text-slate-500">
              Keep track of the events you love. Everything you've bookmarked
              appears here for quick access.
            </p>
          </div>
        </section>

        {/* Events */}
        <section className="mx-auto max-w-7xl px-6 py-16">
          {bookmarks.length === 0 ? (
            <div className="rounded-3xl border border-dashed border-slate-300 bg-white py-24 text-center shadow-sm">
              <h2 className="text-3xl font-bold text-slate-800">
                No Bookmarks Yet
              </h2>

              <p className="mt-3 text-slate-500">
                Start exploring events and bookmark your favourites.
              </p>
            </div>
          ) : (
            <>
              <div className="mb-10 flex items-center justify-between">
                <h2 className="text-3xl font-bold text-slate-900">
                  Saved Events
                </h2>

                <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
                  {bookmarks.length} Saved
                </span>
              </div>

              <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
                {bookmarks.map((event) => (
                  <EventCard
                    key={event.id}
                    event={event}
                  />
                ))}
              </div>
            </>
          )}
        </section>
      </main>
    </>
  );
}

export default Bookmark;