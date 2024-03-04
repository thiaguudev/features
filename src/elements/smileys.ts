export class Smileys {
  $el: HTMLDivElement;
  $value: string;

  constructor() {
    this.$el = document.createElement('div');
    [1, 2, 3, 4, 5].forEach((option) => {
      const $value = String(option);
      const $container = document.createElement('div');
      const $input = document.createElement('input');
      $input.type = 'radio';
      $input.value = $value;
      $input.id = $value;

      const $label = document.createElement('label');
      $label.htmlFor = $value;

      $container.appendChild($input);
      $container.appendChild($label);
    });

    this.$el.appendChild($container);
  }

  $onchange(e: Event) {
    if (e.target instanceof HTMLInputElement) {
      this.$value = e.target.value;
    }
  }
}
