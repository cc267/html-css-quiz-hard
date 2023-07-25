document.addEventListener("DOMContentLoaded", function () {
    const quizForm = document.getElementById("quizForm");
    const resultDiv = document.getElementById("result");
    const scoreParagraph = document.getElementById("score");
  
    quizForm.addEventListener("submit", function (event) {
      event.preventDefault();
      const formData = new FormData(quizForm);
      let score = 0;
      let userAnswers = [];
  
      for (let pair of formData.entries()) {
        const questionNumber = pair[0].slice(-1);
        const userAnswer = pair[1];
        userAnswers.push(userAnswer);
  
        if (questionNumber === "1" && userAnswer === "a") {
          score++;
        } else if (questionNumber === "2" && userAnswer === "c") {
          score++;
        } else if (questionNumber === "3" && userAnswer === "b") {
          score++;
        } else if (questionNumber === "4" && userAnswer === "b") {
          score++;
        } else if (questionNumber === "5" && userAnswer === "a") {
          score++;
        } else if (questionNumber === "6" && userAnswer === "b") {
          score++;
        } else if (questionNumber === "7" && userAnswer === "a") {
          score++;
        } else if (questionNumber === "8" && userAnswer === "a") {
          score++;
        } else if (questionNumber === "9" && userAnswer === "a") {
          score++;
        } else if (questionNumber === "10" && userAnswer === "b") {
          score++;
        }
      }
  
      const totalQuestions = 10;
      const percentageScore = (score / totalQuestions) * 100;
  
      scoreParagraph.textContent = `You scored ${score} out of ${totalQuestions} questions (${percentageScore}%).`;
      showAnswers(userAnswers);
  
      resultDiv.classList.remove("hidden");
    });
  
    function showAnswers(userAnswers) {
      const correctAnswers = ["a", "c", "b", "b", "a", "b", "a", "a", "a", "b"];
      const answerList = document.createElement("ul");
      answerList.classList.add("answer-list");
  
      for (let i = 0; i < userAnswers.length; i++) {
        const listItem = document.createElement("li");
        listItem.textContent = `Question ${i + 1}: You answered ${userAnswers[i]}.`;
  
        if (userAnswers[i] === correctAnswers[i]) {
          listItem.classList.add("correct");
        } else {
          listItem.classList.add("wrong");
          const correctAnswer = document.createElement("span");
          correctAnswer.textContent = ` Correct answer: ${correctAnswers[i]}`;
          listItem.appendChild(correctAnswer);
        }
  
        answerList.appendChild(listItem);
      }
  
      resultDiv.appendChild(answerList);
    }
  });