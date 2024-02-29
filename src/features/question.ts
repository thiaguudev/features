import { NumericScale, SingleLine, MultipleLine, MultipleChoice } from '../elements';
import { HTMLDivElementInput } from '../elements/multiple-choice';
import { QuestionType } from '../types';
import type { Question as IQuestion, Logic } from '../types';
import { arrayFrom, arrayIsEmpty } from '../utils';
import { Survey } from './survey';

export class Question {
  $id: string;
  $type: QuestionType;
  $step?: number;
  $isConditional?: boolean;
  $question: string;
  $required: boolean;
  $logic: Logic[];
  $survey: Survey;
  $options: Array<string>;
  $el: HTMLInputElement | HTMLTextAreaElement | HTMLDivElementInput;

  constructor({ id, type, step, isConditional, question, required, logic, options }: IQuestion) {
    this.$id = id;
    this.$type = type;
    this.$step = step;
    this.$isConditional = isConditional;
    this.$question = question;
    this.$required = required;
    this.$logic = logic;
    this.$options = options;
  }

  set(survey: Survey) {
    this.$survey = survey;
    return this;
  }

  get logic() {
    return this.$logic.find((logic) => arrayFrom(logic.from, logic.to).includes(+this.$el.value));
  }

  get $logical() {
    return !arrayIsEmpty(this.$logic);
  }

  render() {
    const question = document.createElement('div');
    question.classList.add('flex', 'flex-col', 'gap-3');

    const text = document.createElement('p');
    text.textContent = this.$question;

    switch (this.$type) {
      case 'numeric-scale':
        this.$el = new NumericScale(`answer-${this.$id}`).$el;
        break;

      case 'single-line':
        this.$el = new SingleLine(`answer-${this.$id}`).$el;
        break;

      case 'multiple-line':
        this.$el = new MultipleLine(`answer-${this.$id}`).$el;
        break;

      case 'multiple-choice':
        this.$el = new MultipleChoice(`answer-${this.$id}`, this.$options).$el;
        break;
    }

    const button = document.createElement('button');
    button.textContent = 'Next';
    button.classList.add(
      'p-2',
      'w-16',
      'ml-auto',
      'bg-emerald-600',
      'text-white',
      'rounded-md',
      'hover:bg-emerald-500',
    );
    button.onclick = this.$survey.next.bind(this.$survey);

    question.appendChild(text);
    question.appendChild(this.$el);
    question.appendChild(button);
    return question;
  }
}
