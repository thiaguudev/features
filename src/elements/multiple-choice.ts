export class MultipleChoice {
  $el: any;
  $options: Array<string>;

  constructor(id: string, options: Array<string>) {
    this.$el = document.createElement('div');
    this.$options = options;
    this.$el.id = id;
    this.$options.forEach((option) => {
      const input = document.createElement('input');
      input.type = 'radio';
      input.name = 'choice';
      input.value = option;

      const label = document.createElement('label');
      label.htmlFor = option;
      label.textContent = option;

      this.$el.appendChild(input);
      this.$el.appendChild(label);
    });
  }

  get value() {
    return (<any>document.querySelector('[name="choice"]:checked'))?.value;
  }
}
