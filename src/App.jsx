import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Topics from './components/Topics/Topics';
import QuizPage from './components/Quiz/QuizPage';
import CreateQuizPage from './components/CreateQuiz/CreateQuizPage';
import About from './components/About/About';
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer/Footer";
import { useEffect } from "react";

function AppContent() {
  const location = useLocation();

  
  const showFooter = ["/", "/topics", "/about"].includes(location.pathname);

  

  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/topics" element={<Topics />} />
        <Route path="/quiz/:topic" element={<QuizPage />} />
        <Route path="/create-quiz" element={<CreateQuizPage />} />
        <Route path="/about" element={<About />} />
      </Routes>
      {showFooter && <Footer />}
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
