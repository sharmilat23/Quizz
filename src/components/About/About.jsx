import React from "react";
import "./About.css";
import sharmilaImg from "../../assets/Sharmila.jpg";


// ✅ Using topic image temporarily as your profile pic
import img1 from "../../assets/topics/pic.png";

const About = () => {
  return (
    <div className="about-page">
      {/* App Description */}
      <section className="about-intro">
        <h2>About Our Application</h2>
        <p>
          Our Online Quiz Platform is designed to make learning interactive,
          engaging, and fun. Whether you are preparing for competitive exams,
          brushing up on your basics, or simply exploring new topics, our app
          adapts to your learning style.
        </p>
        <p>
          You can attempt quizzes across various categories or create your own
          quizzes with customizable difficulty levels and question counts.
          Designed with a clean and simple interface, this platform ensures that
          anyone can get started instantly — no complicated setups, just pure
          learning!
        </p>
        <p>
          Keep track of your progress, challenge yourself with harder levels,
          and improve consistently. Our goal is to make knowledge accessible and
          enjoyable for everyone.
        </p>
      </section>

      {/* Developer Section */}
      <section className="developer-section">
        <h2>Meet the Developer</h2>
        <div className="developer-card">
          <img src={sharmilaImg} alt="Developer" className="developer-img" />
          <div className="developer-info">
            <h3>Sharmila Tatikonda</h3>
            <p>Front-end Developer</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <h2>Contact Me</h2>
        <div className="contact-info">
          <p>📍 Visakhapatnam, Andhra Pradesh, India</p>
          <p>📧 Email: sharmila.tatikonda230704@gmail.com</p>
          <p>📞 Phone: +91 1234567890</p>
        </div>
      </section>
    </div>
  );
};

export default About;
