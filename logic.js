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
var timeLeft = 76;
var penalty = 0;

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



//brings up the questions and answers - issue with line 61 (only first two options are clickable)
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
     }

//adds event listener to each list item - for loop to cycle through
  var clickingAnswers = document.querySelectorAll("li")
  for (i = 0; i < clickingAnswers.length; i++) {
      clickingAnswers[i].addEventListener("click", checkAnswers);
  }
  
//checking if answers are correct
function checkAnswers(event) {
    var rightAnswer = event.target.textContent;
    console.log(rightAnswer);
    var answerMessage = document.createElement("p")
    document.body.append(answerMessage);
        if (rightAnswer === quizQuestions[questionIndex].correctAnswer) {
            answerMessage.textContent = "Correct!"
    }
    else {
        answerMessage.textContent = "Incorrect!";
        //penalty = (timeLeft - 10);
   
    }
    questionIndex++; 
    displayQuestion();
}
 
    
//timer function (incomplete)
    function timer() {
          timeLeft--;  
        if (timeLeft >= 1) {
         timerCountdownMessage.textContent = "Timer: " + timeLeft;
        } else {
            return
        }
  1000;   }
  
    

document.addEventListener("click", displayQuestion)
//insert function to start timer when this is pushed

//still need to add high scores function + local storage