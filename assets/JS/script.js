// TODO add variables, use utility function based on tag
const qs = function (tag) {
  return document.getElementById(tag);
};
const startButton = qs("start-btn");
const nextButton = qs("next-btn");
const questionContainerElement = qs("question-container");
const answerButton = qs("answer-btn");
const timerEl = qs("time");
const questionElement = qs("question");
const answerButtonsElement = qs("answer-buttons");
const endGameElement = qs("endgamecard");
const questions = [
  {
    question: "Inside which HTML element do we put the JavaScript?",
    answers: [
      { text: "<script>", correct: true },
      { text: "<js>", correct: false },
      { text: "<javascript>", correct: false },
      { text: "<scripting>", correct: false },
    ],
  },
  {
    question: "All of these are examples of 'PRIMITIVES' except,",
    answers: [
      { text: "string", correct: false },
      { text: "boolean", correct: false },
      { text: "null", correct: false },
      { text: "object", correct: true },
    ],
  },
  {
    question: "How do you create a function in JavaScript?",
    answers: [
      { text: "function = myFunction()", correct: false },
      { text: "function myFunction()", correct: true },
      { text: "function myFunction{}", correct: false },
      { text: "function = myFunction{}", correct: false },
    ],
  },
  {
    question: "How do you call a function in JavaScript?",
    answers: [
      { text: "myFunction ()", correct: true },
      { text: "call function(myFuntion)", correct: false },
      { text: "myFunction{}", correct: false },
      { text: "with a cell phone", correct: false },
    ],
  },
];
let currentQuestionIndex = 0;
let timeLeft = 120;
let timer = 1;

//TODO: add event listener for start button. When "click" start application
startButton.addEventListener("click", startGame);
nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  setNextQuestion();
});
//start timer
//display first question

function startGame() {
  console.log("start");
  startButton.classList.add("hide");
  questions.sort(() => Math.random() - 0.5);
  currentQuestionIndex = 0;
  questionContainerElement.classList.remove("hide");
  setNextQuestion();
  startTimer();
}

function startTimer() {
  timerEl.textContent = timeLeft;
  timer = setInterval(() => {
    timeLeft--;
    timerEl.textContent = timeLeft;
    if (timeLeft <= 0) {
      endGame();
      clearInterval(timer);
    }
  }, 1000);
}
//TODO: create timer component, set interval function in web API.

//TODO: Store High Scroes in local storage

// set event listener for next button and generate sequential questions with 3 wrong answers and 1 correct answer.
function setNextQuestion() {
  console.log(questions[currentQuestionIndex]);
  resetState();
  if (questions[currentQuestionIndex]) {
    showQuestion(questions[currentQuestionIndex]);
  } else {
    endGame();
  }
}

function showQuestion(question) {
  console.log("here is your question", question);
  questionElement.innerText = question.question;
  question.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("btn");
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
    answerButtonsElement.appendChild(button);
  });
}

function resetState() {
  nextButton.classList.add("hide");
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild);
  }
}
function selectAnswer(e) {
  const selectButton = e.target;
  console.log(e.target.dataset.correct);
  //do something if correct
  if (e.target.dataset.correct) {
    console.log("correct");
    //animate the button
    e.target.style.backgroundColor = "green";
    e.target.classList.add("wiggle-correct");
    //if looks wonkey, remove the class after animation done
    timeLeft += 3;
  } else {
    console.log("incorrect");
    e.target.style.backgroundColor = "red";
    e.target.classList.add("wiggle-correct");
    //animate the button
    timeLeft -= 5;
  }
  currentQuestionIndex++;
  setTimeout(setNextQuestion, 2000);
}

function endGame() {
  questionContainerElement.classList.add("hide");
  endGameElement.classList.remove("hide");
  clearInterval(timer);
}

//when timer runs out stop timer, display UI, and end game and store score.
//When user completes all questions stop timer, display UI, and end game.
