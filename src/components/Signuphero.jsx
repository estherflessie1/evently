import { CalendarDays, Heart, Ticket } from "lucide-react";

const features = [
  {
    icon: <CalendarDays size={20} />,
    title: "Discover Events",
    text: "Explore events around you.",
  },
  {
    icon: <Heart size={20} />,
    title: "Save Favorites",
    text: "Bookmark events instantly.",
  },
  {
    icon: <Ticket size={20} />,
    title: "Quick Booking",
    text: "Reserve your seat in seconds.",
  },
];

function SignupHero() {
  return (
    <section className="hidden lg:flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-indigo-50 px-10">
      <div className="grid w-full max-w-6xl grid-cols-2 items-center gap-10">

        {/* Left */}

        <div>

          <span className="inline-flex rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-600">
            🎉 Event Discovery Platform
          </span>

          <h1 className="mt-4 text-5xl font-extrabold leading-tight text-gray-900">
            Find your next
            <span className="block text-blue-600">
              unforgettable event.
            </span>
          </h1>

          <p className="mt-5 max-w-md text-gray-500">
            Join thousands of people discovering concerts,
            workshops and conferences happening around them.
          </p>

          <div className="mt-8 space-y-5">
            {features.map((feature) => (
              <Feature key={feature.title} {...feature} />
            ))}
          </div>

        </div>

        {/* Right */}

        <div className="flex justify-center">

          <div className="w-72 rounded-3xl border border-white/60 bg-white p-5 shadow-xl">

            <h3 className="mb-4 text-lg font-bold text-gray-800">
              Upcoming Events
            </h3>

            {[
              "Music Concert",
              "Tech Meetup",
              "Food Festival",
            ].map((event) => (
              <div
                key={event}
                className="mb-3 rounded-2xl border border-gray-100 p-3 transition hover:shadow-md"
              >
                <h4 className="font-semibold">{event}</h4>

                <p className="text-sm text-gray-500">
                  📍 Lagos
                </p>
              </div>
            ))}

            <button className="mt-2 w-full rounded-xl bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700">
              Explore Events
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}

function Feature({ icon, title, text }) {
  return (
    <div className="flex items-start gap-4">

      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-blue-600 shadow-md">
        {icon}
      </div>

      <div>

        <h3 className="font-semibold text-gray-800">
          {title}
        </h3>

        <p className="text-sm text-gray-500">
          {text}
        </p>

      </div>

    </div>
  );
}

export default SignupHero;