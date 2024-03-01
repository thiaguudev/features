export class NumericScale {
  $el: HTMLDivElement;

  constructor(id: string) {
    this.$el = document.createElement('div');
    this.$el.classList.add('flex', 'items-center', 'justify-center', 'gap-1');
    this.$el.id = id;

    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].forEach((value) => {
      const $container = document.createElement('div');
      const $input = document.createElement('input');
      const $label = document.createElement('label');

      $input.type = 'radio';
      $input.name = 'choice';
      $input.value = `${value}`;
      $label.textContent = `${value}`;
      $input.classList.add('hidden');

      $label.classList.add('p-3', 'bg-red-500', 'w-10');

      $container.appendChild($input);
      $container.appendChild($label);
      this.$el.appendChild($container);
    });
  }

  get value() {
    return (<HTMLInputElement>document.querySelector('[name="choice"]:checked'))
      ?.value;
  }
}
