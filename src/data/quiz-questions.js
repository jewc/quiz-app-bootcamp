// Question Types
// 1. MCQs | Multiple choie | single

export const quiz = {
  topic: "Javascript",
  level: "Beginner",
  totalQuestions: 10,
  perQuestionScore: 5,
  questions: [
    {
      question:
        "Which function is used to serialize an object into a JSON string in Javascript?",
      choices: ["stringify()", "parse()", "convert()", "None of the above"],
      type: "MCQs",
      correctAnswer: "stringify()",
    },
    {
      question:
        "Which of the following keywords is used to define a variable in Javascript?",
      choices: ["var", "let", "var and let", "None of the above"],
      type: "MCQs",
      correctAnswer: "var and let",
    },
    {
      question:
        "Which of the following methods can be used to display data in some form using Javascript?",
      choices: [
        "document.write()",
        "console.log()",
        "window.alert",
        "All of the above",
      ],
      type: "MCQs",
      correctAnswer: "All of the above",
    },
    {
      question: "How can a datatype be declared to be a constant type?",
      choices: ["const", "var", "let", "constant"],
      type: "MCQs",
      correctAnswer: "const",
    },
    {
      question: "Inside which HTML element do we put the JavaScript?",
      choices: ["<script>", "<javascript>", "<js>", "<scripting>"],
      type: "MCQs",
      correctAnswer: "<script>",
    },
    {
      question: "Where is the correct place to insert a JavaScript?",
      choices: [
        "The <body> section",
        "Both the <head> section and the <body> section are correct",
        "The <head> section",
        "None of the above",
      ],
      type: "MCQs",
      correctAnswer:
        "Both the <head> section and the <body> section are correct",
    },
    {
      question:
        'What is the correct syntax for referring to an external script called "xxx.js"?',
      choices: [
        '<script name="xxx.js">  ',
        '<script src="xxx.js">',
        '<script href="xxx.js">',
        "None of the above",
      ],
      type: "MCQs",
      correctAnswer: '<script src="xxx.js">',
    },
    {
      question: "The external JavaScript file must contain the <script> tag.",
      choices: ["True", "False"],
      type: "MCQs",
      correctAnswer: "False",
    },
    {
      question: 'How do you write "Hello World" in an alert box?',
      choices: [
        'alert("Hello World");',
        'alertBox("Hello World");',
        'msg("Hello World");',
        'msgBox("Hello World");',
      ],
      type: "MCQs",
      correctAnswer: 'alert("Hello World");',
    },
    {
      question: "How do you create a function in JavaScript?",
      choices: [
        "function = myFunction()",
        "function:myFunction()",
        "function myFunction()",
      ],
      type: "MCQs",
      correctAnswer: "function myFunction",
    },
  ],
};

export default quiz;
