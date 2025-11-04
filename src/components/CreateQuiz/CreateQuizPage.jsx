import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CreateQuizPage.css";

export default function CreateQuizPage() {
  const [topic, setTopic] = useState("");
  const [difficulty, setDifficulty] = useState("easy");
  const [count, setCount] = useState(5);
  const navigate = useNavigate();

  const handleGenerateQuiz = () => {
    if (!topic.trim()) {
      alert("Please enter a topic name!");
      return;
    }
    navigate(`/quiz/${topic}?difficulty=${difficulty}&count=${count}`);
  };

  return (
    <div className="create-quiz-page">
      <h1>Create Your Own Quiz</h1>
      <div className="form-group">
        <label>Topic Name:</label>
        <input
          type="text"
          placeholder="e.g., Artificial Intelligence"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
        />
      </div>

      {/* <div className="form-group">
        <label>Difficulty:</label>
        <select value={difficulty} onChange={(e) => setDifficulty(e.target.value)}>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
      </div> */}
{/* 
      <div className="form-group">
        <label>Number of Questions:</label>
        <select value={count} onChange={(e) => setCount(e.target.value)}>
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
        </select>
      </div> */}

      <button onClick={handleGenerateQuiz} className="generate-btn">
        Generate Quiz
      </button>

      <button className="back-btn" onClick={() => navigate("/")}>
        ← Back to Home
      </button>
    </div>
  );
}
