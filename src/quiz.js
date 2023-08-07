import React from "react";

const Quiz = () => {
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("0");
  const { questions } = quiz;
  const { question, choices } = questions[activeQuestion]; // destructuring

  const [result, setResult] = useState({
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
  });

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
    </div>
  );
};

export default Quiz;
