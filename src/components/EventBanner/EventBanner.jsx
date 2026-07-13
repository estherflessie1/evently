import "./EventBanner.css";
import bannerImage from "../../assets/images/music.jpg";

function EventBanner() {
  return (
    <section className="event-banner">
      <img
        src={bannerImage}
        alt="Summer Beats Festival"
        className="banner-image"
      />
    </section>
  );
}

export default EventBanner;
