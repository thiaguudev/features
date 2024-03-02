import { arrayFrom } from "../utils";

export class NumericScale {
  $el: HTMLDivElement;

  constructor(id: string, start: number, end: number) {
    this.$el = document.createElement('div');
    this.$el.classList.add('flex', 'items-center', 'justify-center', 'gap-1');
    this.$el.id = id;

    arrayFrom(start, end).forEach((value) => {
      const $container = document.createElement('div');
      const $input = document.createElement('input');
      const $label = document.createElement('label');

      $input.type = 'radio';
      $input.name = 'choice';
      $input.value = `${value}`;
      $input.id = `${value}`;
      $label.textContent = `${value}`;
      $input.classList.add('hidden');

      $label.classList.add(
        'p-3',
        'bg-red-500',
        'w-10',
        'text-black',
        'bg-gray-100',
        'cursor-pointer'
      );
      $label.htmlFor = `${value}`;

      $container.appendChild($input);
      $container.appendChild($label);
      this.$el.appendChild($container);
    });
  }

  get value() {
    console.log('iii', (<HTMLInputElement>document.querySelector('[name="choice"]:checked'))
    ?.value)
    return (<HTMLInputElement>document.querySelector('[name="choice"]:checked'))
      ?.value;
  }
}
