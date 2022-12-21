var readline = require('readline-sync');
var username = readline.question("may i have you name? ");
console.log("--------------------------");
console.log("welcome - " + username + " to cricket quiz app. let me get that you know cricket or not, by asking you some questions about cricket, lets get started!!!!!!!");
console.log("--------------------------");

var highScores = [
  {
    name: "akash",
    score: 5
  },
  {
    name: "dogesh",
    score: 4
  }
]
var questionOne = {
  question: "what many balls in one over? ",
  answer: "6"
}
var questionTwo = {
  question: "how many players a team have?",
  answer: "11"
}
var questionThree = {
  question: "which team was the first world cup winner?",
  answer: "england"
}
var questionFour = {
  question: "when india won world cup for the first time",
  answer: "1983"
}
var questionFive = {
  question: "which team won the most cricket world cup?",
  answer: "australia"
}

var array = [questionOne, questionTwo, questionThree, questionFour, questionFive];

var score = 0;

for (var i = 0; i < array.length; i++) {
  var currentQuestion = array[i];
  console.log("So your " + (i + 1) + "st question is : " + currentQuestion.question);
  var answer = readline.question("Type your answer : ");
  if (answer.toLowerCase() === currentQuestion.answer) {
    console.log("right!!");
    score = score + 1;
    console.log("current score : " + score);
    console.log("--------------------------");
  }
  else {
    console.log("wrong!!");
    console.log("current score : " + score);
    console.log("--------------------------");
  }
}
console.log("--------------------------");
console.log("your final score is : " + score);
console.log("!!Thank you!!")
console.log("--------------------------");
console.log("So " + username + " if you beat this highscores than let me know i will replace your name with this : ")
for (var i = 0; i < highScores.length; i++) {
  console.log((i + 1) + "." + highScores[i].name + " : " + highScores[i].score);
}