var readline = require('readline-sync');
var username = readline.question("may i have you name? ");
console.log("--------------------------");
console.log("welcome - "+username +" to fandom quiz app. let me get that you know me or not, by asking you some questions about me, lets get started!!!!!!!");
console.log("--------------------------");

var highScores = [
  {
  name:"akash",
  score:5
  },
  {
  name:"dogesh",
  score:4
  }
  ]
var questionOne = {
  question : "what is my favorite color? ",
  answer : "black"
}
var questionTwo = {
  question : "who is my favorite superhero?",
  answer : "shaktimaan"
}
var questionThree = {
  question : "whom i love the most?",
  answer : "parents"
}
var questionFour = {
  question : "which tour i prefer the most : mountains or beaches",
  answer : "mountains"
}
var questionFive = {
  question : "which fast food i like the most?",
  answer : "panipuri"
}

var array = [questionOne,questionTwo,questionThree,questionFour,questionFive];

var score = 0;

for(var i=0;i<array.length;i++){
  var currentQuestion = array[i];
  console.log("So your "+(i+1)+"st question is : "+currentQuestion.question);
  var answer = readline.question("Type your answer : ");
  if(answer === currentQuestion.answer) {
    console.log("right!!");
    score = score+1;
    console.log("current score : "+score);
console.log("--------------------------");
  }  
  else{
     console.log("wrong!!");
    console.log("current score : "+score);
console.log("--------------------------");
  }
}
console.log("--------------------------");
console.log("your final score is : "+ score);
console.log("!!Thank you!!")
console.log("--------------------------");
console.log("So "+username+" if you beat this highscores than let me know i will replace your name with this : ")
for(var i=0;i<highScores.length;i++){
    console.log((i+1)+"."+highScores[i].name+" : "+highScores[i].score);
}