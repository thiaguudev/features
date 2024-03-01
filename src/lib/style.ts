import { SurveyConfig } from '../types';

export class Style {
  $config: SurveyConfig;

  constructor(config: SurveyConfig) {
    this.$config = config;
  }

  $start() {
    const $start = document.createElement('button');
    $start.textContent = 'Start';
    $start.classList.add(
      'p-2',
      'w-16',
      'ml-auto',
      'rounded-md',
      'font-bold',
      this.$config.buttonTextColor,
      this.$config.buttonBackgroundColor,
    );
    return $start;
  }

  $question() {
    const $question = document.createElement('div');
    $question.classList.add(
      'flex',
      'flex-col',
      'gap-3',
      'min-w-[500px]',
      'text-center',
    );
    return $question;
  }

  $text(text: string) {
    const $text = document.createElement('p');
    $text.textContent = text;
    $text.classList.add('font-bold');
    return $text;
  }

  $container() {
    const $container = document.createElement('div');
    $container.classList.add(
      'absolute',
      'bottom-0',
      'left-0',
      'w-full',
      'bg-slate-200',
      'flex',
      'flex-col',
      'items-center',
      'justify-center',
      'rounded-md',
      'p-2',
      'text-sm',
      'shadow-md',
    );
    return $container;
  }
}
