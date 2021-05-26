//functions: timer function, start all function, game function

var startButton = document.getElementById("question-start");
//var questionSection = document.getElementById("questions");
var timerCountdown = document.getElementById("timer-div");
var answersSection = document.getElementById("answers");
var timeLeft = 100;

const quizQuestions = [
    { question: "question 1",
    answers: {a: "aa", 
    b: "bb", 
    c: "cc", 
    d: "dd"}, 
correctAnswer: "c"
},
{ question: "question 2",
    answers: {a: "aa", 
    b: "bb", 
    c: "cc", 
    d: "dd"} ,
correctAnswer: "b"
},
{ question: "question 3",
answers: {a: "aa", 
b: "bb", 
c: "cc", 
d: "dd"}, 
correctAnswer: "d"
},
{ question: "question 4",
    answers: {a: "aa", 
    b: "bb", 
    c: "cc", 
    d: "dd"}, 
correctAnswer: "a"
},
{ question: "question 5",
    answers: {a: "aa", 
    b: "bb", 
    c: "cc", 
    d: "dd"}, 
correctAnswer: "b"
},
{ question: "question 6",
    answers: {a: "aa", 
    b: "bb", 
    c: "cc", 
    d: "dd"}, 
correctAnswer: "a"
},
{ question: "question 7",
    answers: {a: "aa", 
    b: "bb", 
    c: "cc", 
    d: "dd"}, 
correctAnswer: "c"
},
{ question: "question 8",
    answers: {a: "aa", 
    b: "bb", 
    c: "cc", 
    d: "dd"}, 
correctAnswer: "d"
},]


//quizQuestions.forEach(question => console.log(question));
console.log(quizQuestions)
console.log(quizQuestions[3].question)
function timer() {

    if (timeLeft >= 1) {
     timerCountdown.textContent = "Timer: " + timeLeft;
    } else {
        return;
    }
  1000;  
}


function runQuiz (){
   var htmlOutput = [];
   var possibleAnswers = [];
var i = (Math.floor(Math.random() * quizQuestions.length));

   quizQuestions.forEach((question, index, quizQuestions) => {
    htmlOutput = quizQuestions[i];
    document.getElementById("questions").innerHTML = quizQuestions[i].question;
    document.getElementById("answers").innerHTML = JSON.stringify(quizQuestions[i].answers);
    document.querySelector(".answersList").style.display="block";
            var answer1 = document.getElementById("button1");
            var answer2 = document.getElementById("button2");
            var answer3 = document.getElementById("button3");
            var answer4 = document.getElementById("button4");
            answer1 = answers[0];
            answer2 = answers[1];
            answer3 = answers[2];
            answer4 = answers[3];
    
        }
    );{
    
        console.log(i);
        }

    }


document.addEventListener("click", runQuiz)
//insert function to start timer when this is pushed
    