import React, { useState } from "react";
import quiz from "./data/quiz-questions.js";

const Quiz = () => {
  // 3 States
  // 1. activeQuestions to keep track of the current question
  // 2. selectedAnswer, which answer user has selected
  // 3. result, to calculate total scores, correctAnswers, wrongAnswers
  const [activeQuestion, setActiveQuestion] = useState(0); // initialized to zero
  const [selectedAnswer, setSelectedAnswer] = useState(""); // initialized to ""
  const { questions } = quiz; // import Quiz data from quiz-questions
  const { question, choices } = questions[activeQuestion]; // destructuring

  // Result state
  const [result, setResult] = useState({
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
  });

  // increment active question
  const onClickNext = () => {
    setActiveQuestion((prev) => prev + 1);
  };

  return (
    <div>
      <h1>Quiz</h1>
      <h2>{question}</h2>
      <ul>
        {choices.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
      <button onClick={onClickNext}>Next</button>
    </div>
  );
};

export default Quiz;
