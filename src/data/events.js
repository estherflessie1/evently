import music from "../assets/images/music.jpg";
import tech from "../assets/images/tech.jpg";
import sports from "../assets/images/sports.jpg";

const events = [
  {
    id: 1,
    image: music,
    category: "Music",
    title: "Summer Beats Festival",
    date: "12 August 2026",
    location: "Lagos, Nigeria",
    price: "₦10,000",
    seats: "250 Seats Left",
    description:
      "Experience an unforgettable evening filled with music, food, networking and entertainment.",
  },

  {
    id: 2,
    image: tech,
    category: "Tech",
    title: "Frontend Developers Meetup",
    date: "18 August 2026",
    location: "Abuja, Nigeria",
    price: "Free",
    seats: "100 Seats Left",
    description:
      "Meet developers, learn React, build projects and network with professionals.",
  },

  {
    id: 3,
    image: sports,
    category: "Sports",
    title: "Lagos City Marathon",
    date: "30 August 2026",
    location: "Lagos, Nigeria",
    price: "₦5,000",
    seats: "500 Seats Left",
    description:
      "Join thousands of runners in Nigeria's biggest city marathon.",
  },
];

export default events;
