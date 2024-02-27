import { API } from "./lib/API";
import { Config } from "./types";

import "./style.css";
import { Survey } from "./features/survey";
import { Feedback } from "./features/feedback";

class App {
  survey: any;

  constructor(config: Config) {
    this.initialize(config);
  }

  async initialize(config: Config) {
    const response = await API.get(config);

    if (response.hasFeedback) {
      const feedback = new Feedback(config);
      feedback.show();
    }

    new Survey(response);
  }
}

const config = {
  project: "sw-85-rd",
  access: "sw-68-wy",
} as Config;

new App(config);
