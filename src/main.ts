import { API } from './lib/API';
import { Config } from './types';
import { Survey } from './features/survey';
import { Feedback } from './features/feedback';
import { mobileCheck } from './utils';

import './style.css';

class App {
  constructor(config: Config) {
    this.$initialize(config);
  }

  async $initialize(config: Config) {
    const $response = await API.$get(config);
    const $isMobile = mobileCheck();

    if (!$response.isMobile && $isMobile) return;

    if ($response.hasFeedback) new Feedback(config);

    new Survey($response);
  }
}

const config = {
  project: 'sw-85-rd',
  access: 'sw-68-wy',
} as Config;

new App(config);
