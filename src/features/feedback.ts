import { FeedbackConfig } from "../types";

export class Feedback {
  isInitialize: boolean;
  config: FeedbackConfig;

  constructor(feedbackConfig: FeedbackConfig) {
    this.isInitialize = false;
    this.config = feedbackConfig;
  }

  show() {
    console.log("Show feedback");
  }
}
