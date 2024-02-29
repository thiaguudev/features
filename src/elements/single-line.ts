export class SingleLine {
  $el: HTMLInputElement;

  constructor(id: string) {
    this.$el = document.createElement('input');
    this.$el.id = id;
  }

  get value() {
    return this.$el.value;
  }
}
