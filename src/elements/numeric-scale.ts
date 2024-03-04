import { arrayFrom } from '../utils';

export class NumericScale {
  $el: HTMLDivElement;
  $value: string;

  constructor(start: number, end: number) {
    this.$el = document.createElement('div');
    this.$el.classList.add('flex', 'items-center', 'justify-center', 'gap-1');

    arrayFrom(start, end).forEach((value) => {
      const $value = String(value);
      const $container = document.createElement('div');
      const $input = document.createElement('input');
      const $label = document.createElement('label');

      $input.type = 'radio';
      $input.name = 'choice';
      $input.value = $input.id = $input.textContent = $label.htmlFor = $value;
      $input.classList.add('hidden');

      $input.addEventListener('change', this.$onchange.bind(this));

      $label.textContent = $value;

      $label.classList.add(
        'p-3',
        'w-16',
        'text-lg',
        'bg-gray-100',
        'cursor-pointer',
        'rounded-xl',
      );

      $container.appendChild($input);
      $container.appendChild($label);
      this.$el.appendChild($container);
    });
  }

  $onchange(e: Event) {
    if (e.target instanceof HTMLInputElement) {
      this.$value = e.target.value;
    }
  }
}
