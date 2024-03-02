import {
  NumericScale,
  SingleLine,
  MultipleLine,
  MultipleChoice,
} from '../elements';
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
  $from: number | null;
  $to: number | null;
  $logic: Logic[];
  $survey: Survey;
  $options: Array<string>;
  $input: MultipleChoice | MultipleLine | SingleLine | NumericScale;

  constructor({
    id,
    type,
    step,
    isConditional,
    question,
    required,
    logic,
    options,
    from,
    to,
  }: IQuestion) {
    this.$id = id;
    this.$type = type;
    this.$step = step;
    this.$isConditional = isConditional;
    this.$question = question;
    this.$required = required;
    this.$logic = logic;
    this.$from = from;
    this.$to = to;
    this.$options = options;
  }

  $set(survey: Survey) {
    this.$survey = survey;
    return this;
  }

  get logic() {
    return this.$logic.find((logic) =>
      arrayFrom(logic.from, logic.to).includes(+this.$input.value),
    );
  }

  get $logical() {
    return !arrayIsEmpty(this.$logic);
  }

  $next() {
    const $button = this.$survey.$style.$button();
    $button.onclick = this.$survey.$next.bind(this.$survey);
    return $button;
  }

  $render() {
    if (this.$type === 'numeric-scale')
      this.$input = new NumericScale(
        `answer-${this.$id}`,
        this.$from as number,
        this.$to as number,
      );
    else if (this.$type === 'single-line')
      this.$input = new SingleLine(`answer-${this.$id}`);
    else if (this.$type === 'multiple-line')
      this.$input = new MultipleLine(`answer-${this.$id}`);
    else this.$input = new MultipleChoice(`answer-${this.$id}`, this.$options);

    const $question = this.$survey.$style.$question();
    const $text = this.$survey.$style.$text(this.$question);
    const $button = this.$next();

    $question.appendChild($text);
    $question.appendChild(this.$input.$el);
    $question.appendChild($button);
    return $question;
  }
}
