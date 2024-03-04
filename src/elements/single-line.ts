export class SingleLine {
  $el: HTMLInputElement;

  constructor(id: string) {
    this.$el = document.createElement('input');
    this.$el.id = id;

    this.$el.addEventListener('change', this.$onchange.bind(this))
  }

  $onchange() {
    console.log('onchange')
  }

  get $value() {
    return this.$el.value.trim();
  }
}
