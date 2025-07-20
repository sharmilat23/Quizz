import React from "react";
import { useNavigate } from "react-router-dom";
import assets from "../../assets/assets.js";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="Home" id="home">
      {/* ✅ Hero Section */}
      <div className="hero-section">
        <div className="home-left">
          <h1>"Challenge Yourself. Learn Better. Grow Smarter."</h1>
          <p>
            Pick any topic, set your level, and start quizzing — instantly.
            Whether you're brushing up on basics or pushing your limits, our
            intelligent quiz generator adapts to you. Select from Easy, Medium,
            or Hard levels, choose 5, 10, or 15 questions, and get ready to
            learn at your pace.
          </p>
          <div className="preparebtn">
            <button className="btn" onClick={() => navigate("/create-quiz")}>
              Create Quiz
            </button>
          </div>
        </div>

        <div className="home-right">
          <img src={assets.bgpic} alt="quiz banner" />
        </div>
      </div>

      {/* ✅ Steps Section */}
      <div className="steps-section">
        <h2>How Does It Work?</h2>
        <div className="steps-timeline">
          <div className="step-card">
            <div className="step-icon">1</div>
            <h3>Select a Topic</h3>
            <p>Choose from a wide range of categories or create your own quiz.</p>
          </div>
          <div className="step-card">
            <div className="step-icon">2</div>
            <h3>Pick Difficulty</h3>
            <p>Easy, Medium, or Hard — quizzes for every learning level.</p>
          </div>
          <div className="step-card">
            <div className="step-icon">3</div>
            <h3>Start Playing</h3>
            <p>Test your knowledge and learn instantly from every question.</p>
          </div>
        </div>
        <button
          className="explore-btn"
          onClick={() => navigate("/topics")}
        >
          Explore Topics
        </button>
      </div>

      {/* ✅ Fun Fact Section */}
      <div className="funfact-section">
        <h2>Fun Fact of the Day</h2>
        <p>
          🧠 Did you know?
          Honey never spoils! Archaeologists found pots of honey in ancient Egyptian tombs that are over 3,000 years old — and still perfectly edible!
        </p>
      </div>

      {/* ✅ Why Choose Us */}
      <div className="why-choose-section">
        <h2>Why Choose Us?</h2>
        <div className="why-cards">
          <div className="why-card">
            <h3>🎯 Adaptive Learning</h3>
            <p>
              Our quiz engine adapts to your level to ensure the best learning
              experience.
            </p>
          </div>
          <div className="why-card">
            <h3>⚡ Instant Feedback</h3>
            <p>
              Learn immediately from your mistakes with instant answers and
              explanations.
            </p>
          </div>
          <div className="why-card">
            <h3>🛠️ Create Your Own Quiz</h3>
            <p>
              Prepare custom quizzes for your exams, interviews, or just for fun.
            </p>
          </div>
        </div>
      </div>

      {/* ✅ Call to Action (CTA) */}
      <div className="cta-section">
        <h2>Ready to Test Your Knowledge?</h2>
        <p>Start quizzing now and challenge yourself to learn something new today!</p>
        <button className="cta-btn" onClick={() => navigate("/topics")}>
          Start Now
        </button>
      </div>
    </div>
  );
};

export default Home;
