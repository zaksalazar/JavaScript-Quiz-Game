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
let timeLeft= 120
let shuffledQuestions, currentQuestionIndex, timer;
//TODO: add event listener for start button. When "click" start application
startButton.addEventListener("click", startGame);
nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  setNextQuestion();
});
//start timer
//display first question

function startGame() {
  startButton.classList.add("hide");
  shuffledQuestions = questions.sort(() => Math.random() - 0.5);
  currentQuestionIndex = 0;
  questionContainerElement.classList.remove("hide");
  setNextQuestion();
  startTimer();
}

function startTimer() {
    timer = setInterval(() => {
        timeLeft --
        timerEl.textContent= timeLeft 
        if (timeLeft <= 0) {
            clearInterval(timer);
            //add endgame function HERE
        }
    }, 1000);

 
}
//TODO: create timer component, set interval function in web API.

//TODO: Store High Scroes in local storage

// set event listener for next button and generate sequential questions with 3 wrong answers and 1 correct answer.
function setNextQuestion() {
  resetState();
  if (shuffledQuestions.currentQuestionIndex ) {
    showQuestion(shuffledQuestions[currentQuestionIndex]);
  } else {
    //call end game function, still needed score = timeLeft and add to localstorage 
  }

}

function showQuestion(question) {
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
  if (e.target.dataset.correct) {
    console.log("correct");
    timeLeft += 3
  } else {
    console.log("incorrect");
    timeLeft-= 5 
  }
  currentQuestionIndex ++
  setNextQuestion();
}
//when timer runs out stop timer, display UI, and end game and store score.
//When user completes all questions stop timer, display UI, and end game.

//TODO: Create Questions
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
    question: "222Inside which HTML element do we put the JavaScript?",
    answers: [
      { text: "<script>", correct: true },
      { text: "<js>", correct: false },
      { text: "<javascript>", correct: false },
      { text: "<scripting>", correct: false },
    ],
  },
  {
    question: "333Inside which HTML element do we put the JavaScript?",
    answers: [
      { text: "<script>", correct: true },
      { text: "<js>", correct: false },
      { text: "<javascript>", correct: false },
      { text: "<scripting>", correct: false },
    ],
  },
  {
    question: "444Inside which HTML element do we put the JavaScript?",
    answers: [
      { text: "<script>", correct: true },
      { text: "<js>", correct: false },
      { text: "<javascript>", correct: false },
      { text: "<scripting>", correct: false },
    ],
  },
];
