import {
  CalendarDays,
  MapPin,
  ArrowRight,
  Bookmark,
} from "lucide-react";

import { Link } from "react-router-dom";
import { useBookmark } from "../context/BookmarkContext";

function EventCard({ event }) {
  const {
    id,
    title,
    image,
    category,
    location,
    date,
    time,
    description,
    createdBy,
  } = event;

  const { toggleBookmark, isBookmarked } = useBookmark();

  const bookmarked = isBookmarked(id);

  return (
    <article className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">

      {/* Image */}
      <div className="relative h-56 overflow-hidden">

        <img
          src={image}
          alt={title}
          loading="lazy"
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-black/0 transition group-hover:bg-black/10" />

        <span className="absolute left-4 top-4 rounded-full bg-white px-4 py-1 text-sm font-semibold text-blue-600 shadow">
          {category}
        </span>

        <button
          onClick={() => toggleBookmark(event)}
          className="absolute right-4 top-4 rounded-full bg-white p-2 shadow transition hover:bg-blue-600 hover:text-white"
        >
          <Bookmark
            size={18}
            className={
              bookmarked
                ? "fill-blue-600 text-blue-600"
                : ""
            }
          />
        </button>

      </div>

      {/* Content */}
      <div className="space-y-5 p-6">

        <h3 className="line-clamp-2 text-2xl font-bold text-slate-900">
          {title}
        </h3>

        <p className="line-clamp-2 text-sm leading-6 text-slate-500">
          {description}
        </p>

        <div className="flex items-center gap-2 text-slate-500">
          <CalendarDays
            size={17}
            className="text-blue-600"
          />

          <span>
            {date} • {time}
          </span>
        </div>

        <div className="flex items-center gap-2 text-slate-500">
          <MapPin
            size={17}
            className="text-blue-600"
          />

          <span>{location}</span>
        </div>

        {createdBy && (
          <p className="text-sm text-slate-400">
            Hosted by{" "}
            <span className="font-semibold">
              {createdBy}
            </span>
          </p>
        )}

        <Link
          to={`/events/${id}`}
          className="inline-flex items-center gap-2 rounded-lg bg-blue-50 px-4 py-2 font-semibold text-blue-600 transition hover:bg-blue-100"
        >
          View Event

          <ArrowRight size={18} />
        </Link>

      </div>

    </article>
  );
}

export default EventCard;