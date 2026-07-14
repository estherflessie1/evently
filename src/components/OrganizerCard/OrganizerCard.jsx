import "./OrganizerCard.css";
import organizer from "../../assets/images/organizer.jpg";

function OrganizerCard() {
  return (
    <section className="organizer-card">
      <h2>Organizer</h2>

      <div className="organizer-info">
        <img src={organizer} alt="Organizer" />

        <div>
          <h3>Evently Team</h3>
          <p>Professional Event Organizer</p>
        </div>
      </div>

      <p>
        Evently Team specializes in organizing music, business, sports and
        networking events across Nigeria.
      </p>

      <button>Contact Organizer</button>
    </section>
  );
}

export default OrganizerCard;
