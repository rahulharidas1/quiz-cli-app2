var readLineSync = require('readline-sync');
var chalk = require('chalk');
var userName = readLineSync.question(chalk.yellow("What's your name? "));
const greeting = chalk.blue(userName);
const gameName = chalk.magenta.bold(`'DO YOU KNOW Rahul'`);
console.log(`Hey there,${greeting}! Welcome to ${gameName} `);
console.log('----------------');
console.log('----------------');
var score = 0;

function play(question,answer){
  var userAnswer = readLineSync.question(chalk.yellow(question));
  if(userAnswer.toLowerCase()===answer.toLowerCase()){
    console.log(chalk.bgGreen.bold('You got that right!'));
    score+=1;
    console.log('Your current score: ', score);

  }
  else{
    console.log(chalk.bgRed.bold('That is incorrect!'));
    console.log('Your current score: ', score);
  }
  console.log('--------------------')
}
var questions =[
  {
    question: 'Where does I reside? ',
    answer: 'Bangalore'
  },
  {
    question: 'Which is my most favourite cinematic universe? ',
    answer: 'DCEU'
  },
  {
    question: 'What\'s my favourite sport? ',
    answer: 'football'
  },
  {
    question: 'Who is my favourite footballer? ',
    answer: 'Zlatan'
  },
]
for(var i=0;i<questions.length;i++){
  var currentQuestion = questions[i];
  play(currentQuestion.question,currentQuestion.answer);
}

console.log(chalk.bgYellow.bold('You have scored a total of:',score,'points!'));

