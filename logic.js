//functions: timer function, start all function, game function

var startButton = document.getElementById("question-start");
var questionSection = document.getElementById("questions");
var quizBody = document.getElementById("quiz-body");
var answerListEl = document.getElementById("answersList");
var answer1 = document.getElementById("answer1");
var answer2 = document.getElementById("answer2");
var answer3 = document.getElementById("answer3");
var answer4 = document.getElementById("answer4");
var timerCountdown = document.getElementById("timer-div");
var timeLeft = 75;
var penalty = 0;

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


//console.log(quizQuestions)
//console.log(quizQuestions[3].question)
//console.log(quizQuestions[4].choices[2])




function displayQuestion () {
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
    document.querySelector("li").addEventListener("click", checkAnswers); }



function checkAnswers(event) {
    var rightAnswer = event.target;
    var answerMessage = document.createElement("p")
    document.body.append(answerMessage);
        if (rightAnswer == quizQuestions[questionIndex].correctAnswer) {
            answerMessage.textContent = "Correct!"
    }
    else {
        answerMessage.textContent = "Incorrect!";
        //penalty = (timeLeft - 10);
   
    }
}
   
   
//
   



    

    

    function timer() {

        if (timeLeft >= 1) {
         timerCountdown.textContent = "Timer: " + timeLeft;
        } else {
            return;
        }
      1000;  
    }

document.addEventListener("click", displayQuestion)
//insert function to start timer when this is pushed
