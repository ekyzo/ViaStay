import "../styles/AboutPage.scss";
import { FaGlobe, FaLock, FaHeart } from "react-icons/fa";

const AboutPage = () => {
  return (
    <div className="about">
      <div className="about_hero">
        <h1>About DreamNest</h1>
        <p>
          DreamNest connects travelers with unique accommodations and
          unforgettable experiences worldwide.
        </p>
      </div>

      <div className="about_section">
        <h2>Our Mission</h2>
        <p>
          To help people feel at home anywhere by offering personalized stays,
          local experiences, and meaningful connections.
        </p>
      </div>

      <div className="about_section cards">
        <h2>Why Choose Us?</h2>
        <div className="card_group">
          <div className="card">
            <FaGlobe className="card_icon" />
            <h3>Worldwide Homes</h3>
            <p>Thousands of unique properties in beautiful destinations.</p>
          </div>
          <div className="card">
            <FaLock className="card_icon" />
            <h3>Secure Booking</h3>
            <p>Book with confidence using our safe and reliable platform.</p>
          </div>
          <div className="card">
            <FaHeart className="card_icon" />
            <h3>Trusted by Many</h3>
            <p>Loved by travelers and hosts across the globe.</p>
          </div>
        </div>
      </div>

      <div className="about_section">
        <h2>Meet the Team</h2>
        <p>
          We’re a passionate group of travel lovers, designers, and engineers on
          a mission to make stays more memorable.
        </p>
        <div className="team_photos">
          <div className="team_card">👩‍💻 Ariff – Frontend</div>
          <div className="team_card">👨‍💻 Fikry – Backend</div>
          <div className="team_card">🎨 Mohd – UI/UX</div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
