//variables 
const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');
const myQuestions = [
    {
        question: "Insert first question here?",
answers: 
     a: "answer one", 
     b: "answer two",
     c: "answer three"
},
{
    question: "Insert second question here?",
    answers: {
      a: "answer one",
      b: "answer two",
      c: "answer three"
    },

  {
    question: "Insert third question here?",
    answers: {
      a: "answer one",
      b: "answer two",
      c: "answer three",
     
  },
];

//function build quiz 
function buildQuiz(){
//variable to store the HTML output  {
    const output=[];

    myQuestions.forEach(
        (currentQuestion, questionNumber) => {
            //variable to store the list of possible answers 
            const answers = [];

            //and for each available answer 
            for(letter in currentQuestion.answers){
        }
    )

//function show results 
function showResults () {}

//call function 
buildQuiz();
//on submit show results 
submitButton.addEventListener('click',showResults); 
