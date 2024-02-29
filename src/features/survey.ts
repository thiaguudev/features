import { SurveyConfig } from '../types';
import { Question } from './question';

export class Survey {
  static cookies = {};

  $config: SurveyConfig;
  $currentQuestion: Question;
  $questions: Question[];
  $container: HTMLDivElement;

  constructor(config: SurveyConfig) {
    this.$config = config;
    this.$questions = config.questions.map((question) => new Question(question).set(this));
    this.$currentQuestion = this.$questions.find((question) => question.$step === 1) as Question;
    window.addEventListener('DOMContentLoaded', () => setTimeout(() => this.initialize(), config.timeToShow * 1000));
  }

  submit() {
    console.log('Submit form', this.$questions);
  }

  next() {
    if (this.$currentQuestion.$required) {
      if (!this.$currentQuestion.$el.value) {
        return;
      }
    }

    let nextQuestion = null;

    if (this.$currentQuestion.$logical) {
      const logic = this.$currentQuestion.logic;
      if (logic) {
        nextQuestion = this.$questions.find((question) => question.$id === logic.questionId);
      }
    }

    if (!nextQuestion) {
      nextQuestion = this.$questions.find((question) => {
        return question.$step === (this.$currentQuestion.$step as number) + 1;
      });
    }

    if (nextQuestion) {
      this.$currentQuestion = nextQuestion;
      this.$container.innerHTML = '';
      this.$container.appendChild(this.$currentQuestion.render());
    } else {
      this.submit();
    }
  }

  initialize() {
    this.$container = document.createElement('div');
    this.$container.classList.add('flex', 'justify-center', 'rounded-md', 'w-[300px]', 'p-2', 'text-sm', 'shadow-md');
    this.$container.appendChild(this.$currentQuestion.render());

    document.body.appendChild(this.$container);
  }
}
