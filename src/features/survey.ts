import { Question } from './question';
import { SurveyConfig } from '../types';
import { Style } from '../lib/style';

export class Survey {
  static cookies = {};

  $config: SurveyConfig;
  $current: Question;
  $questions: Question[];
  $container: HTMLDivElement;
  $style: Style;

  constructor(config: SurveyConfig) {
    this.$config = config;
    this.$questions = config.questions.map((question) =>
      new Question(question).$set(this),
    );
    this.$style = new Style(config);
    window.addEventListener('DOMContentLoaded', () =>
      setTimeout(this.$initialize.bind(this), config.timeToShow * 1000),
    );
  }

  $clear() {
    this.$container.innerHTML = '';
  }

  $end() {
    setTimeout(() => this.$container.remove(), 2000);
  }

  $welcome() {
    const $welcome = this.$style.$text(this.$config.welcomeMessage);
    this.$container.appendChild($welcome);
  }

  $thanks() {
    const $thanks = this.$style.$text(this.$config.thanksMessage);
    this.$container.appendChild($thanks);
  }

  $submit() {
    const $success = true;
    this.$questions.forEach((question) => {
      console.log(`${question.$question} -> ${question.$input?.$value}`);
    });
    if ($success) {
      this.$thanks();
      this.$end();
    }
  }

  $next() {
    if (this.$current.$required) if (!this.$current.$input.$value) return;
    let $question = null;

    if (this.$current.$logical) {
      const logic = this.$current.logic;
      if (logic) {
        $question = this.$questions.find(
          (question) => question.$id === logic.questionId,
        );
      }
    }

    if (!$question) {
      $question = this.$questions.find((question) => {
        return question.$step === (this.$current.$step as number) + 1;
      });
    }

    this.$clear();

    if ($question) {
      this.$current = $question;
      this.$container.appendChild(this.$current.$render());
    } else {
      this.$submit();
    }
  }

  $start() {
    this.$current = this.$questions.find(
      (question) => question.$step === 1,
    ) as Question;
    this.$clear();
    this.$container.appendChild(this.$current.$render());
  }

  $initialize() {
    this.$container = this.$style.$container();

    this.$welcome();

    const $start = this.$style.$start();
    $start.onclick = this.$start.bind(this);

    this.$container.appendChild($start);
    document.body.appendChild(this.$container);
  }
}
