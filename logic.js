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
var highScore = document.getElementById("high-scores");
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
    choices: ["1991", "1995", "1989", "2000"], 
    correctAnswer: "1995"
},
{ question: "How would you call a function called functionOne?",
    choices: ["<functionOne>", "functionOne()", "functionOne[call]", "call functionOne"], 
    correctAnswer: "functionOne()"
},
]

var questionIndex = 0;

//console.logs to make sure my questions were working correctly
//console.log(quizQuestions)
//console.log(quizQuestions[3].question)
//console.log(quizQuestions[4].choices[2])


function timer() {
    displayQuestion();
    var timerInterval = setInterval(function (){
    timeLeft--; 
       timerCountdownMessage.textContent = "Timer: " + timeLeft; 
    if (timeLeft === 0 || questionIndex >= 4) {
        clearInterval(timerInterval);
        highScores();
         return;
}
},
1000);
}

//brings up the questions and answers
function displayQuestion () {
    
    document.querySelector("#question-start").style.display="none";
    document.querySelector("#answersList").style.display="block";
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
  for (i = 0; i < clickingAnswers.length; i++) {
      clickingAnswers[i].addEventListener("click", checkAnswers);
  }
  if (questionIndex >= 4) {
    return; };
  }
//checking if answers are correct
function checkAnswers(event) {
    event.preventDefault()
    var rightAnswer = event.target.textContent;
    //console.log(rightAnswer);
    var answerMessage = document.createElement("p");
    answerListEl.append(answerMessage);
    {
        if (rightAnswer === quizQuestions[questionIndex].correctAnswer) {
            answerMessage.textContent = "Correct!";}

    else {
        answerMessage.textContent = "Incorrect!";
        timeLeft = timeLeft - 10;
    }
    if (questionIndex >= 4) {
        return;
    } else { 
        questionIndex++; 
        displayQuestion();
    }
}
}

//incomplete - working on this
function highScores() {
    questionSection.style.display = "none";
    answerListEl.style.display = "none";
    highScore.style.display = "inline-block";
    finalScore = timeLeft;
    var scoreMessage = document.createElement("p");
    scoreMessage.innerHTML = "Quiz over! Your score is " + finalScore + "! Use the box below to enter your name and save your high score.";
    highScore.appendChild(scoreMessage);
    scoreMessage.setAttribute("style", "text-align:center");
    
    scoreForm = document.createElement("form");
    scoreForm.setAttribute("id", "score-form");
    highScore.appendChild(scoreForm);

    var scoreInput = document.createElement("input");
    scoreInput.setAttribute("type", "text");
    scoreInput.setAttribute("id", "score-input");
    highScore.appendChild(scoreInput);
    
    var saveButton = document.createElement("button");
    saveButton.setAttribute("click", "submit");
    saveButton.setAttribute("id", "save-button")
    saveButton.innerHTML = "Submit";
    highScore.appendChild(saveButton);

    var savedName = scoreInput.value;

    localStorage.setItem("finalScore", JSON.stringify(finalScore));
    localStorage.setItem("score-input", savedName, JSON.stringify(savedName));

    document.querySelector("#save-button").addEventListener("click", (event) => {
    event.preventDefault();
    storeScores(); })
    }

 function storeScores() {
    document.getElementById("high-scores").innerHTML = "";
    var highScoreList = document.createElement("ol");
    var listedScores = document.createElement("li");
    highScoreList.textContent = "High Scores";
    highScore.appendChild(highScoreList);
    highScoreList.appendChild(listedScores);
    listedScores.textContent = localStorage.getItem("scoreInput") + " " + localStorage.getItem("finalScore");

 }
 
document.querySelector("#question-start").addEventListener("click", timer);

