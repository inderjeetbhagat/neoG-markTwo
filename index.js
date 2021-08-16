var readlineSync = require('readline-sync');
var chalk = require('chalk');
var score = 0;

console.log(chalk.greenBright("-*-*-*-*-*-*-*-*-*-*-*-*-*-*-\n"));
console.log(chalk.blueBright("✌ How Well Do You know About Biryani? ✌\n "));
console.log(chalk.greenBright("-*-*-*-*-*-*-*-*-*-*-*-*-*-*-\n\n"));

var userName = readlineSync.question(chalk.bgRed.bold("Please Enter Your Name : \n\n"));
console.log("\nWelcome",chalk.bold.greenBright(userName) ,"!\n");

var questionOne = {
  question: "Biryani Originated From? \n\n",
  optionA: "Persia",
  optionB: "Awadh",
  answer: "A"
}
var questionTwo ={
  question: "Pilaf and Biryani are more or less the same thing? \n\n",
  optionA: "True",
  optionB: "False",
  answer: "B"
}
var questionThree ={
  question: "What makes Kolkata Biryani so Distinct from the rest? \n\n",
  optionA: "The Spieces",
  optionB: "The Flavoured Potato",
  answer: "B"
}
var questionFour ={
  question: "Can Biryani Be Only Made With Basmati Rice?\n\n",
  optionA: "True",
  optionB: "False",
  answer: "B"
}
var questionFive ={
  question: "To adjust the spice levels of Biryani during the british rule, it was served with?\n\n",
  optionA: "Mirch ka Salan ad Raita",
  optionB: "Cucumber Salad",
  answer: "A"
}

var questions = [questionOne, questionTwo, questionThree, questionFour, questionFive];

function endGame (question, answers, optionA, optionB){
  var userAnswer = readlineSync.question(chalk.bgRed.bold(question ,"A : ", optionA,"\n","B : ", optionB,"\n\n"));
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
  endGame(questions[i].question, questions[i].answer, questions[i].optionA, questions[i].optionB);
}

console.log(chalk.bold.bgBlueBright.black("------ The Quiz is Completed ------")); 

console.log("Your Final Score: ", score);

console.log(chalk.bgYellow.bold.black("\n\n-*-*-*-*-LEADERBOARD-*-*-*-*-"));

for(var i=0; i<leaderboard.length; i++){
  console.log(leaderboard[i].name, "- ", leaderboard[i].score);
}

console.log(chalk.blackBright("\n\n*Send a Screenshot If You've beaten these Scores!"));