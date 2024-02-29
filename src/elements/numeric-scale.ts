export class NumericScale {
  $el: HTMLTextAreaElement;

  constructor(id: string) {
    this.$el = document.createElement('textarea');
    this.$el.id = id;
  }

  get value() {
    return this.$el.value;
  }
}
