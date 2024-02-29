export class MultipleChoice {
  $el: HTMLTextAreaElement;

  constructor(id: string) {
    this.$el = document.createElement('textarea');
    this.$el.id = id;
  }
}
