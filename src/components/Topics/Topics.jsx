import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './Topics.css';

import img1 from '../../assets/topics/mathematics.png';
import img2 from '../../assets/topics/science.png';
import img3 from '../../assets/topics/world.png';
import img4 from '../../assets/topics/history.png';
import img5 from '../../assets/topics/robotic-hand.png';
import img6 from '../../assets/topics/basketball.png';
import img7 from '../../assets/topics/english.png';
import img8 from '../../assets/topics/book.png';
import img9 from '../../assets/topics/world-news.png';
import img10 from '../../assets/topics/watching-a-movie.png';
import img11 from '../../assets/topics/idea.png';
import img12 from '../../assets/topics/problem-solving.png';

const topics = [
  { name: "Mathematics", image: img1 },
  { name: "Science", image: img2 },
  { name: "Geography", image: img3 },
  { name: "History", image: img4 },
  { name: "Technology", image: img5 },
  { name: "Sports", image: img6 },
  { name: "Verbal", image: img7 },
  { name: "General Knowledge", image: img8 },
  { name: "Current Affairs", image: img9 },
  { name: "Movies", image: img10 },
  { name: "Aptitude", image: img11 },
  { name: "Reasoning", image: img12 }
];

const Topics = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="topics-section">
      <div className="topics-header">
        <h2>Explore Our Quiz Categories</h2>
        <button
          className="own-topic-btn"
          onClick={() => navigate("/create-quiz")}
        >
          Prepare Quiz on Own Topic
        </button>
      </div>

      <div className="topics-grid">
        {topics.map((topic, index) => (
          <div
            key={index}
            className="topic-card"
            onClick={() => navigate(`/quiz/${topic.name}`)}
          >
            <img src={topic.image} alt={topic.name} />
            <p>{topic.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Topics;
