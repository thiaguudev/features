import { Question, SurveyConfig } from "../types";

export class Survey {
  isInitialize: boolean;
  config: SurveyConfig;
  currentQuestion: number;
  container: any;

  static cookies = {};

  constructor(surveyConfig: SurveyConfig) {
    this.isInitialize = false;
    this.config = surveyConfig;
    this.currentQuestion = 0;

    window.addEventListener("DOMContentLoaded", () =>
      setTimeout(() => this.show(), surveyConfig.timeToShow * 1000)
    );
  }

  checkConditions(conditions: any, currentAnswer: any) {
    if (!conditions) return true;

    const dependentQuestion = this.config.questions.find(
      (question) => question.id === conditions.questionId
    );
    const dependentAnswer = (<HTMLInputElement>(
      document.getElementById("answer")
    )).value;
    console.log("here", dependentQuestion, dependentAnswer);
    return dependentAnswer === conditions.answer;
  }

  submit() {
    console.log("Submit form");
  }

  nextQuestion() {
    const currentAnswer = (<HTMLInputElement>document.getElementById("answer"))
      .value;

    if (
      this.checkConditions(
        this.config.questions[this.currentQuestion].logic,
        currentAnswer
      )
    ) {
      console.log('pass');
      document.getElementById(
        this.config.questions[this.currentQuestion].id
      )!.style.display = "none";
      this.currentQuestion++;
      if (this.currentQuestion < this.config.questions.length) {
        this.container.innerHTML = "";
        const newQuestionElement = this.createQuestion(
          this.config.questions[this.currentQuestion]
        );
        this.container.appendChild(newQuestionElement);
      } else {
        this.submit();
      }
    }
  }

  createQuestion(question: Question) {
    const questionElement = document.createElement("div");
    questionElement.setAttribute("id", question.id);

    const questionText = document.createElement("p");
    questionText.textContent = question.question;

    questionElement.appendChild(questionText);

    switch (question.type) {
      case "numeric-scale":
        const numeric = document.createElement("input");
        numeric.setAttribute("type", "text");
        numeric.setAttribute("id", `answer`);
        questionElement.appendChild(numeric);
        break;

      case "single-line":
        const input = document.createElement("input");
        input.setAttribute("type", "text");
        // input.setAttribute("id", `answer${question.id}`);
        input.setAttribute("id", `answer`);
        questionElement.appendChild(input);
        break;

      case "multiple-line":
        const textarea = document.createElement("input");
        questionElement.appendChild(textarea);
        break;
    }

    const button = document.createElement("button");
    button.textContent = "next";
    button.addEventListener("click", this.nextQuestion.bind(this));
    questionElement.appendChild(button);

    return questionElement;
  }

  show() {
    this.container = document.createElement("div");
    this.container.classList.add("rounded-md", "w-[300px]", "p-2", "text-sm");

    const currentQuestion = this.createQuestion(
      this.config.questions[this.currentQuestion]
    );

    this.container.appendChild(currentQuestion);

    document.body.appendChild(this.container);
  }
}
