import { FeedbackConfig } from '../types';

export class Feedback {
  $config: FeedbackConfig;

  constructor(feedbackConfig: FeedbackConfig) {
    this.$config = feedbackConfig;
    this.$initialize();
  }

  $initialize() {
  }
}
