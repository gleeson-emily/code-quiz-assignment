//functions: timer function, start all function, game function

//variables
var startButton = document.getElementById("question-start");
var questionSection = document.getElementById("questions");
var quizBody = document.getElementById("quiz-body");
var answerListEl = document.getElementById("answersList");
var answer1 = document.getElementById("answer1");
var answer2 = document.getElementById("answer2");
var answer3 = document.getElementById("answer3");
var answer4 = document.getElementById("answer4");
var timerCountdown = document.getElementById("timer-div");
var timerCountdownMessage = document.getElementById("timer-message")
var timeLeft = 75;
var highScores = document.getElementById("high-scores");
var finalScore = 0;

//questions for the quiz
const quizQuestions = [
    { 
    question: "How do you create a new variable in JavaScript?",
    choices: ["var <name>", "var = name", "var name =", "var: (name)"], 
    correctAnswer: "var name ="
},
{   question: "What is the preferred way of writing function and variable names in JavaScript?",
    choices: ["Sentence Case", "camelCase", "Uppercase", "Suitcase"] ,
    correctAnswer: "camelCase"
},
{ question: "Which comparison operator would you use to check if two values are equal in both type and value?",
    choices: [">=", "&&", "||", "==="], 
    correctAnswer: "==="
},
{ question: "What year was JavaScript invented?",
    choices: ["1995", "1991", "1989", "2000"], 
    correctAnswer: "1995"
},
{ question: "How would you call a function called functionOne?",
    choices: ["<functionOne>", "functionOne()", "functionOne[call]", "call functionOne"], 
    correctAnswer: "functionOne()"
},]

var questionIndex = 0;

//console.logs to make sure my questions were working correctly
//console.log(quizQuestions)
//console.log(quizQuestions[3].question)
//console.log(quizQuestions[4].choices[2])


function timer() {
    var timerInterval = setInterval(function (){
       timerCountdownMessage.textContent = "Timer: " + timeLeft;
{
    if (timeLeft >= 1 || questionIndex >= 4) {
       timeLeft--;   
}
else {
       clearInterval(timerInterval);
      highScores();
       return;
   }
}
},
1000);
}

//this console.log revealed that timerInterval is increasing after each question
//how to stop from looping through?
//console.log(timerInterval);
//}


//brings up the questions and answers
function displayQuestion () {
    timer();
    document.querySelector("#question-start").style.display="none";
    document.querySelector("#answersList").style.visibility="visible";
    var questionOutput = quizQuestions[questionIndex].question;
    var answerChoices = quizQuestions[questionIndex].choices;
    questionSection.textContent = questionOutput;
    answerChoices = [answer1, answer2, answer3, answer4];
    answer1.textContent = (quizQuestions[questionIndex].choices[0]);
    answer2.textContent = (quizQuestions[questionIndex].choices[1]);
    answer3.textContent = (quizQuestions[questionIndex].choices[2]);
    answer4.textContent = (quizQuestions[questionIndex].choices[3]);
 
//adds event listener to each list item - for loop to cycle through
  var clickingAnswers = document.querySelectorAll("li")
  for (i = 1; i < clickingAnswers.length; i++) {
      clickingAnswers[i].addEventListener("click", checkAnswers);
  }
  if (questionIndex > quizQuestions.length) {
    return; };
}

//checking if answers are correct
function checkAnswers(event) {
    event.preventDefault();
    var rightAnswer = event.target.textContent;
    console.log(rightAnswer);
    var answerMessage = document.createElement("p")
    document.body.append(answerMessage);
    {
        if (rightAnswer === quizQuestions[questionIndex].correctAnswer) {
            answerMessage.textContent = "Correct!"
    }
    else {
        answerMessage.textContent = "Incorrect!";
        timeLeft = timeLeft - 10;
    }
    questionIndex++; 
    displayQuestion();
    if (questionIndex > quizQuestions.length) {
        highScores();
    }
}
}
//incomplete - working on this
 function highScores() {
    questionSection.style.display = "none";
    finalScore = timeLeft;
    var scoreMessage = document.createElement("p");
    quizBody.appendChild(scoreMessage);
    scoreMessage.setAttribute("style", "text-align:center");
    scoreMessage.textContent = "Quiz over! Your score is " + finalScore + "!";
 }

//calling two functions to start - probably not the best way of doing this
document.addEventListener("click", displayQuestion);
