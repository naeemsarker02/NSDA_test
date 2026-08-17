document.addEventListener("DOMContentLoaded", function () {

  var quiz = document.querySelector("#plant-quiz");

  if (!quiz) return;

  var answers = {};
  var steps = quiz.querySelectorAll(".quiz-step");

  function showStep(number) {
    steps.forEach(function (step) {
      step.classList.toggle(
        "d-none",
        step.dataset.step !== number
      );
    });
  }

  function getResult() {

    if (answers.pet === "yes") {
      return {
        name: "Calathea",
        description: "A pet-friendly choice with bold foliage."
      };
    }

    if (answers.sunlight === "low" &&
        answers.care === "low") {
      return {
        name: "Snake Plant",
        description: "A low-maintenance plant that handles lower light."
      };
    }

    if (answers.sunlight === "bright" &&
        answers.care === "high") {
      return {
        name: "Fiddle Leaf Fig",
        description: "A bright-space plant for someone who enjoys regular care."
      };
    }

    return {
      name: "Monstera Deliciosa",
      description: "A versatile choice for bright indirect light."
    };
  }

  quiz.querySelectorAll(".quiz-option").forEach(function (button) {

    button.addEventListener("click", function () {

      answers[button.dataset.question] = button.dataset.value;

      var next = Number(
        button.closest(".quiz-step").dataset.step
      ) + 1;

      if (next <= 3) {
        showStep(String(next));
        return;
      }

      var result = getResult();

      document.getElementById("quizResultName").textContent =
        result.name;

      document.getElementById("quizResultDesc").textContent =
        result.description;

      showStep("result");
    });

  });


  document.getElementById("quizRestartBtn")
    .addEventListener("click", function () {

      answers = {};
      showStep("1");

    });

});