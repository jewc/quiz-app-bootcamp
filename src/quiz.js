import React, { useState } from "react";
import quiz from "./data/quiz-questions.js";
import "./quiz.css";

const Quiz = () => {
  // 3 States
  // 1. activeQuestions to keep track of the current question
  // 2. selectedAnswer, which answer user has selected
  // 3. result, to calculate total scores, correctAnswers, wrongAnswers
  const [activeQuestion, setActiveQuestion] = useState(0); // initialized to zero
  const [selectedAnswer, setSelectedAnswer] = useState(""); // initialized to ""
  const { questions } = quiz; // import Quiz data from quiz-questions
  const { question, choices, correctAnswer } = questions[activeQuestion]; // destructuring
  const addLeadingZero = (number) => (number > 9 ? number : `0${number}`);
  // State to highlight the selected answer
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const [showResult, setShowResult] = useState(false);

  // Result state
  const [result, setResult] = useState({
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
  });

  // Calculate user score on basis of selected answer
  const onClickNext = () => {
    // again reset the selectedAnswerIndex, so it won't affect the next question
    setSelectedAnswerIndex(null);
    // Increment active question unless at the last question
    if (activeQuestion !== questions.length - 1) {
      setActiveQuestion((prev) => prev + 1);
    } else {
      setActiveQuestion(0);
      setShowResult(true);
    }

    setResult((prev) =>
      selectedAnswer
        ? {
            ...prev,
            score: prev.score + 5,
            correctAnswer: prev.correctAnswers + 1,
          }
        : {
            ...prev,
            wrongAnswers: prev.wrongAnswers + 1,
          }
    );
  };

  // Logic for Selected Answer
  // When user selects the answer, match if the selected answer matches the answer given
  // in the question file
  const onAnswerSelected = (answer, index) => {
    setSelectedAnswerIndex(index);
    if (answer === correctAnswer) {
      setSelectedAnswer(true);
      console.log("right");
    } else {
      setSelectedAnswer(false);
      console.log("wrong");
    }
  };

  return (
    <div className="quiz-container">
      {!showResult ? (
        <div>
          <div>
            <span className="active-question-no">
              {addLeadingZero(activeQuestion + 1)}
            </span>
            <span className="total-question">
              /{addLeadingZero(questions.length)}
            </span>
          </div>
          <h1>Quiz</h1>
          <h2>{question}</h2>
          <ul>
            {choices.map((answer, index) => (
              <li
                onClick={() => onAnswerSelected(answer, index)}
                key={answer}
                className={
                  selectedAnswerIndex === index ? "selectedAnswer" : null
                }
              >
                {answer}
              </li>
            ))}
          </ul>
          <div className="flex-right">
            <button
              onClick={onClickNext}
              disabled={selectedAnswerIndex === null}
            >
              {activeQuestion === questions.length - 1 ? "Finish" : "Next"}
            </button>
          </div>
        </div>
      ) : (
        <div className="result">
          <h3>Result</h3>
          <p>
            Total Questions: <span>{questions.length}</span>
          </p>
          <p>
            Total Score: <span>{result.score}</span>
          </p>
          <p>
            Correct Answers: <span>{result.correctAnswers}</span>
          </p>
          <p>
            Wrong Answers: <span>{result.wrongAnswers}</span>
          </p>
        </div>
      )}
    </div>
  );
};

export default Quiz;
