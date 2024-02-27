import { Config, Question } from "../types";

export class API {
  static async post() {
    console.log("submit form");
  }

  static async get(config: Config) {
    return {
      ...config,
      id: "sw-85-rp",
      type: "nps",
      hasFeedback: true,
      welcomeMessage: "",
      questions: [
        {
          id: 'sw-18-61',
          main: true,
          type: "numeric-scale",
          question:
            "How likely is it that you would recommend [Organization X] to a friend or colleague?",
          required: true,
        },
        {
          id: 'sw-18-62',
          main: false,
          type: "single-line",
          question: "Other How likely is it that you would recommend [Organization X] to a friend or colleague?",
          required: true,
          logic: [{
            questionId: 'sw-18-64'
          }],
        },
        {
          id: 'sw-18-63',
          main: false,
          type: "multiple-line",
          question: "How likely is it that you would recommend [Organization X] to a friend or colleague?",
          required: false,
          logic: [],
        },
        {
          id: 'sw-18-64',
          main: false,
          type: "multiple-select",
          question: "How likely is it that you would recommend [Organization X] to a friend or colleague?",
          required: true,
          logic: [],
        },
      ] as Question[],
      timeToShow: 2,
    };
  }
}
