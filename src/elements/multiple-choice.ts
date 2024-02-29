export type HTMLDivElementInput = HTMLDivElement & { value: string };

export class MultipleChoice {
  $el: HTMLDivElementInput;
  $options: Array<string>;

  constructor(id: string, options: Array<string>) {
    this.$el = document.createElement('div') as HTMLDivElementInput;
    this.$options = options;
    this.$el.id = id;
    this.$options.forEach((option) => {
      const input = document.createElement('input');
      input.type = 'radio';
      input.name = 'choice';
      input.id = option;

      const label = document.createElement('label');
      label.htmlFor = option;
      label.textContent = option;

      this.$el.appendChild(input);
      this.$el.appendChild(label);
    });
  }

  get value() {
    return (<HTMLDivElementInput>document.querySelector('[name="score"]')).value;
  }
}
