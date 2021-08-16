var readlineSync = require('readline-sync');
var chalk = require('chalk');
var score = 0;

console.log(chalk.greenBright("-*-*-*-*-*-*-*-*-*-*-*-*-*-*-\n"));
console.log(chalk.blueBright("✌ How Well Do You know Me? ✌\n "));
console.log(chalk.greenBright("-*-*-*-*-*-*-*-*-*-*-*-*-*-*-\n\n"));

var userName = readlineSync.question(chalk.bgRed.bold("Please Enter Your Name : \n\n"));
console.log("\nWelcome",chalk.bold.greenBright(userName) ,"!\n");

var questionOne = {
  question: "1. What is Inder's Full Name? \n\n",
  answer: "Inderjeet Bhagat"
}
var questionTwo ={
  question: "What is my age? \n\n",
  answer: "21"
}
var questionThree ={
  question: "What is my faourite color? \n\n",
  answer: "Black"
}
var questionFour ={
  question: "Who is my faourite Mentor? \n\n",
  answer: "Tanay Pratap"
}
var questionFive ={
  question: "What is my faourite coding language? \n\n",
  answer: "Javascript"
}

var questions = [questionOne, questionTwo, questionThree, questionFour, questionFive];

function endGame (question, answers){
  var userAnswer = readlineSync.question(chalk.bgRed.bold(question));
  if(userAnswer.toUpperCase() === answers.toUpperCase()){
    console.log(chalk.bgGreen.black("\n\n✔️  You're Absolutely Correct! "));
    score += 20;
    console.log(chalk.yellow("Your Current Score:", score,"\n\n"));
  } 
  else {
    console.log(chalk.bgRedBright("\n\n❌ Ahh Sorry! But You were Close to the Correct Answer.  "));
    console.log(chalk.yellow("Your Current Score:", score,"\n\n"));
  }
}

var leaderboard = [
  {
  name: "Sourav",
  score: 100
},
{
  name: "Raghav",
  score: 80
  },
{
  name: "Jassie",
  score: 60
}
];

for(var i=0; i<5; i++){
  endGame(questions[i].question, questions[i].answer);
}

console.log(chalk.bold.bgBlueBright.black("------ The Quiz is Completed ------")); 

console.log("Your Final Score: ", score);

console.log(chalk.bgYellow.bold.black("\n\n-*-*-*-*-LEADERBOARD-*-*-*-*-"));

for(var i=0; i<leaderboard.length; i++){
  console.log(leaderboard[i].name, "- ", leaderboard[i].score);
}

console.log(chalk.blackBright("\n\n*Send a Screenshot If You've beaten these Scores!"));