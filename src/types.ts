export type Config = {
  project: string;
  access: string;
};

export type SurveyConfig = {
  questions: Question[];
  welcomeMessage: string;
  timeToShow: number;
  thanksMessage: string;
  buttonTextColor: string;
  buttonBackgroundColor: string;
};

export type FeedbackConfig = unknown;

export type QuestionType =
  | 'single-line'
  | 'multiple-line'
  | 'numeric-scale'
  | 'multiple-choice';

export type Logic = {
  questionId: string;
  from: number;
  to: number;
};

export type Question = {
  id: string;
  question: string;
  logic: Logic[];
  type: QuestionType;
  required: boolean;
  isConditional?: boolean;
  step?: number;
  options: Array<string>;
  from: number | null;
  to: number;
};
