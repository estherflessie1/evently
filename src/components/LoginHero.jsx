import { Compass, Heart, Ticket } from "lucide-react";

const features = [
  {
    icon: <Compass size={18} />,
    title: "Discover Events",
    text: "Explore amazing events around you.",
  },
  {
    icon: <Heart size={18} />,
    title: "Save Favorites",
    text: "Bookmark events you love instantly.",
  },
  {
    icon: <Ticket size={18} />,
    title: "Easy Access",
    text: "Access your tickets anytime.",
  },
];

function LoginHero() {
  return (
    <section className="relative hidden lg:flex flex-col justify-between overflow-hidden bg-gradient-to-br from-blue-50 via-white to-slate-50 px-10 py-8">

      {/* Decorative Background */}
      <div className="absolute -top-20 -left-20 h-56 w-56 rounded-full bg-blue-200/30 blur-3xl"></div>

      <div className="absolute bottom-0 right-0 h-56 w-56 rounded-full bg-indigo-200/20 blur-3xl"></div>

      {/* Content */}
      <div className="relative z-10">
        <span className="inline-flex rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-600">
          👋 Welcome Back
        </span>

        <h1 className="mt-4 text-5xl font-extrabold leading-tight text-slate-900">
          Sign in and
          <span className="block text-blue-600">
            keep exploring.
          </span>
        </h1>

        <p className="mt-4 max-w-md text-base leading-7 text-slate-500">
          Continue discovering concerts, workshops, conferences
          and community events happening around you.
        </p>
      </div>

      {/* Illustration */}
      <div className="relative z-10 my-6 flex justify-center">
        <img
          src="/event.jpg"
          alt="People attending an event"
          className="max-h-72 w-full max-w-lg object-contain"
        />
      </div>

      {/* Features */}
      <div className="relative z-10 grid grid-cols-3 gap-5">
        {features.map((feature) => (
          <Feature key={feature.title} {...feature} />
        ))}
      </div>
    </section>
  );
}

function Feature({ icon, title, text }) {
  return (
    <div className="rounded-2xl bg-white/70 p-4 shadow-sm backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">

      <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
        {icon}
      </div>

      <h3 className="text-sm font-semibold text-slate-800">
        {title}
      </h3>

      <p className="mt-1 text-xs leading-5 text-slate-500">
        {text}
      </p>

    </div>
  );
}

export default LoginHero;