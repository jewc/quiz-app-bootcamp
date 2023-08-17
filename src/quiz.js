import React, { useState, useEffect } from "react";
import quiz from "./data/js-quiz-questions.js";
import "./quiz.css";

const Quiz = () => {
  // 3 States
  // 1. activeQuestions to keep track of the current question
  // 2. selectedAnswer, which answer user has selected
  // 3. result, to calculate total scores, correctAnswers, wrongAnswers
  const [activeQuestion, setActiveQuestion] = useState(0); // initialized to zero
  const [selectedAnswer, setSelectedAnswer] = useState(""); // initialized to ""

  const addLeadingZero = (number) => (number > 9 ? number : `0${number}`);
  // State to highlight the selected answer
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [showQuiz, setShowQuiz] = useState(false);

  const [isJS, setIsJS] = useState(true);
  const [myQuestions, setQuestions] = useState({});

  // Dynamic import
  const importJSQuestions = async () => {
    if (isJS) {
      const myQuiz = await import("./data/js-quiz-questions.js");
      setQuestions(myQuiz.default);
    } else {
      const myQuiz = await import("./data/react-quiz-questions.js");
      setQuestions(myQuiz.default);
    }
  };

  useEffect(() => {
    importJSQuestions();
  }, []);

  const { questions } = quiz; // import Quiz data from quiz-questions

  // Toggle
  const { question, choices, correctAnswer } = questions[activeQuestion]; // destructuring

  const toggleQuestions = () => {
    setIsJS((prevIsJS) => !prevIsJS);
  };

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
            score: prev.score + 1,
            correctAnswers: prev.correctAnswers + 1,
          }
        : {
            ...prev,
            wrongAnswers: prev.wrongAnswers + 1,
          }
    );
  };

  const onClickRestart = () => {
    // set ShowResult to false
    setShowResult(false);
    // Update Result state
    setResult({
      score: 0,
      correctAnswers: 0,
      wrongAnswers: 0,
    });
  };

  const onClickStart = () => {
    setShowQuiz(true);
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
      {showQuiz ? (
        !showResult ? (
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
                    selectedAnswerIndex === index ? "selected-answer" : null
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
            <div>
              <button onClick={onClickRestart}>Restart</button>
            </div>
          </div>
        )
      ) : (
        <div className="result">
          <p>
            Welcome to Bo's {isJS ? "JS" : "Reacts"} Quiz. There are{" "}
            <span>{questions.length}</span> Questions
          </p>
          <div>
            <button onClick={toggleQuestions}>
              {" "}
              Swith to {isJS ? "React" : "JS"} questions
            </button>
          </div>
          <div>
            <button onClick={onClickStart}>Let's Play!</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Quiz;
