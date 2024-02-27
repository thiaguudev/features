export type Config = {
  project: string;
  access: string;
};

export type SurveyConfig = {
  questions: Question[]
  timeToShow: number
};

export type FeedbackConfig = any;

export type QuestionType = "single-line" | "multiple-line" | "numeric-scale";

export type Logic = {};

export type Question = {
  id: string;
  main: boolean;
  question: string;
  logic?: Logic[];
  type: QuestionType;
  required: boolean;
};
