export class MultipleLine {
  $el: HTMLTextAreaElement;

  constructor() {
    this.$el = document.createElement('textarea');
  }

  get $value() {
    return this.$el.value.trim();
  }
}
