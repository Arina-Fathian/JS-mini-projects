const answersArray = [];

const firstQuestion = prompt("2 * 7 ?");
const secondQuestion = prompt("9 / 3 ?");
const thirdQuestion = prompt("4 * 4 ?");

const quizAnswers = document.querySelector(".quiz-answers");
const quizIcon = document.querySelectorAll(".quiz-icon span");
let userAnswers = 0;

function results(answer, correct) {
  if (answer == correct) {
    answersArray.push(true);
    userAnswers++;
  } else {
    answersArray.push(false);
  }
}

results(firstQuestion, 14);
results(secondQuestion, 3);
results(thirdQuestion, 16);

console.log(answersArray);

quizIcon.forEach((spans, index) => {
  if (answersArray[index]) {
    spans.style.background = "#0f0";
  } else {
    spans.style.background = "#f00";
  }
});

quizAnswers.innerText = `${userAnswers}/3`;
