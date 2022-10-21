// TODO add variables, use utility function based on tag 
const qs = function (tag){
    return document.getElementById(tag) 
}
const startButton = qs('start-btn');
const nextButton = qs('next-btn');
const questionContainerElement = qs ('question-container')
const answerButton = qs('answer-btn');
const timer = qs('.timer');
const questionElement = qs ('question')
const answerButtonsElement = qs('answer-buttons')

let shuffledQuestions, currentQuestionIndex
//TODO: add event listener for start button. When "click" start application 
startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})
//start timer 
//display first question 

function startGame() {
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
  }

//TODO: create timer component, set interval function in web API. 

//TODO: Store High Scroes in local storage 

// set event listener for next button and generate sequential questions with 3 wrong answers and 1 correct answer. 
function setNextQuestion(){
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
      const button = document.createElement('button')
      button.innerText = answer.text
      button.classList.add('btn')
      if (answer.correct) {
        button.dataset.correct = answer.correct
      }
      button.addEventListener('click', selectAnswer)
      answerButtonsElement.appendChild(button)
    })
  }

  function resetState(){
    nextButton.classList.add('hide') 
    while (answerButtonsElement.firstChild) {
      answerButtonsElement.removeChild(answerButtonsElement.firstChild) 
    }
  }
function selectAnswer(e){
const selectButton = e.target
const correct = 
}
//when timer runs out stop timer, display UI, and end game and store score. 
//When user completes all questions stop timer, display UI, and end game. 

//TODO: Create Questions 
const questions = [
    {
     question: 'Inside which HTML element do we put the JavaScript?', 
     answers: [ 
        { text: "<script>", correct:true },
        { text: "<js>", correct:false },
        { text: "<javascript>", correct:false },
        { text: "<scripting>", correct:false },
     ]
    }
]