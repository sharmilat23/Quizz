import "./QuizPage.css";
import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { getQuizQuestions } from "../../api/gemini";

export default function QuizPage() {
  const { topic } = useParams();
  const navigate = useNavigate();

  const [difficulty, setDifficulty] = useState("easy");
  const [count, setCount] = useState(5);
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [answered, setAnswered] = useState(false);

  const startQuiz = async () => {
    setLoading(true);
    const data = await getQuizQuestions(topic, difficulty, count);
    setQuestions(data);
    setLoading(false);
    setCurrentIndex(0);
    setScore(0);
    setQuizFinished(false);
    setSelectedOption("");
    setAnswered(false);
  };

  const handleOptionClick = (option) => {
    if (!answered) {
      setSelectedOption(option);
      setAnswered(true);
      if (option === questions[currentIndex].answer) {
        setScore((prev) => prev + 1);
      }
    }
  };

  const handleNext = () => {
    if (currentIndex + 1 < questions.length) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedOption("");
      setAnswered(false);
    } else {
      setQuizFinished(true);
    }
  };

  if (loading) return <h2 className="loading">Loading quiz...</h2>;

  if (quizFinished) {
  // Determine emoji based on performance
  const percentage = (score / questions.length) * 100;
  let emoji = "🙂";

  if (percentage >= 80) emoji = "🎉😎";
  else if (percentage >= 50) emoji = "👍🙂";
  else emoji = "😢";

  return (
    <div className="quiz-page">
      <h2>Quiz Finished!</h2>
      <div className="score-box">
        <p className="score-text">
          Your Score:
          <span className="score-number">
            {score} / {questions.length}
          </span>
        </p>
        <p className="emoji">{emoji}</p>
      </div>
      <div className="end-buttons">
        <button onClick={startQuiz}>Restart Quiz</button>
        <button className="home-btn" onClick={() => navigate("/")}>
          Go to Home
        </button>
      </div>
    </div>
  );
}


  if (questions.length > 0) {
    const currentQuestion = questions[currentIndex];

    return (
      <div className="quiz-page">
        <h2>{topic} Quiz</h2>
        <p>
          Question {currentIndex + 1} of {questions.length}
        </p>
        <h3 className="question-text">{currentQuestion.question}</h3>

        <div className="options">
          {currentQuestion.options.map((opt, i) => {
            const optionLabel = String.fromCharCode(65 + i); // A, B, C, D
            const isCorrect = opt === currentQuestion.answer;
            return (
              <label
                key={i}
                className={`option ${
                  answered
                    ? isCorrect
                      ? "correct"
                      : selectedOption === opt
                      ? "wrong"
                      : ""
                    : selectedOption === opt
                    ? "selected"
                    : ""
                }`}
              >
                <input
                  type="radio"
                  name="quiz-option"
                  value={opt}
                  checked={selectedOption === opt}
                  disabled={answered}
                  onChange={() => handleOptionClick(opt)}
                />
                <span className="option-symbol">{optionLabel}</span>
                <span className="option-text">{opt}</span>
              </label>
            );
          })}
        </div>

        <button
          className="next-btn"
          onClick={handleNext}
          disabled={!answered}
        >
          {currentIndex + 1 === questions.length ? "Finish Quiz" : "Next"}
        </button>
      </div>
    );
  }

  return (
    <div className="quiz-page selection-screen">
      <h1>{topic} Quiz</h1>
      <div className="selection-group">
        <label>
          Difficulty:
          <select
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
          >
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </label>

        <label>
          Number of Questions:
          <select value={count} onChange={(e) => setCount(e.target.value)}>
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
          </select>
        </label>
      </div>

      <button className="start-btn" onClick={startQuiz}>
        Start Quiz
      </button>
      <button className="back-btn" onClick={() => navigate("/")}>
        ← Back to Home
      </button>

    </div>
  );
}
