export class MultipleChoice {
  $el: HTMLDivElement;
  $options: Array<string>;
  $value: string;

  constructor(id: string, options: Array<string>) {
    this.$el = document.createElement('div');
    this.$options = options;
    this.$el.id = id;
    this.$options.forEach((option) => {
      const $input = document.createElement('input');
      $input.type = 'radio';
      $input.name = 'choice';
      $input.value = option;

      $input.addEventListener('change', this.$onchange.bind(this));

      const $label = document.createElement('label');
      $label.htmlFor = option;
      $label.textContent = option;

      this.$el.appendChild($input);
      this.$el.appendChild($label);
    });
  }

  $onchange(e: Event) {
    if (e.target instanceof HTMLInputElement) this.$value = e.target.value;
  }
}
