export class Stars {
  $el: HTMLDivElement;
  $value: string;

  constructor() {
    this.$el = document.createElement('div');
  }

  $onchange(e: Event) {
    if (e.target instanceof HTMLInputElement) {
      this.$value = e.target.value;
    }
  }
}
