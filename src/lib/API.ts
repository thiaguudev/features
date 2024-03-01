import { Config, Question } from '../types';

export class API {
  static async $post() {}

  static async $get(config: Config) {
    return {
      ...config,
      id: 'sw-85-rp',
      type: 'nps',
      hasFeedback: true,
      welcomeMessage: 'Welcome. Can you help us?',
      thanksMessage: 'Thanks for your help!',
      skipComment: false,
      buttonTextColor: 'text-white',
      buttonBackgroundColor: 'bg-emerald-400',
      isMobile: true,
      questions: [
        {
          id: 'sw-18-61',
          type: 'numeric-scale',
          question:
            'How likely is it that you would recommend [Organization X] to a friend or colleague?',
          required: true,
          logic: [],
          step: 1,
        },
        {
          id: 'sw-18-62',
          type: 'single-line',
          question: 'How easy was using Refiner so far?',
          required: false,
          logic: [
            {
              questionId: 'sw-18-64',
              from: 3,
              to: 7,
            },
          ],
          step: 2,
        },
        {
          id: 'sw-18-63',
          type: 'multiple-line',
          question:
            'On a scale of 1-7, how would you rate the effort it takes to use our X feature?',
          required: false,
          logic: [],
          step: 3,
        },
        {
          id: 'sw-18-64',
          isConditional: true,
          type: 'multiple-choice',
          question: 'On a scale of 1-7, how easy was it to use the X feature?',
          required: true,
          options: ['one', 'two'],
          logic: [],
        },
      ] as Question[],
      timeToShow: 0,
    };
  }
}
