//variables 
var score = 0; 
var questions = [
    {
        prompt: "Insert first question here?",

// answers: 
     a: "answer one", 
     b: "answer two",
     c: "answer three"

},
{
prompt: "Insert second question here?",

      a: "answer one",
      b: "answer two",
      c: "answer three"
    },

  {
    prompt: "Insert third question here?",
    answers: {
      a: "answer one",
      b: "answer two",
      c: "answer three",
     
  },
];

//for loop to loop through questions 

for (var i=o;i < questions.length; i++){
    var response = window.prompt(questions[i].prompt)
    if (response == questions[i].answers.a){
        score ++;
        alert("Correct!");
    } else { alert("Wrong"); 
}
}
alert("you got " + score + "/" + questions.length);