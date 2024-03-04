export class Thumbs {
  $el: HTMLDivElement;
  $value: string;

  constructor() {
    this.$el = document.createElement('div');

    [0, 1].forEach((option) => {
      const $value = String(option);
      const $container = document.createElement('div');
      const $input = document.createElement('input');
      const $label = document.createElement('label');

      $input.type = 'radio';
      $input.value = $value;
      $input.id = $value;
      $label.htmlFor = $value;

      const $img = document.createElement('img');
      $img.src = `/thumbs/${option}.svg`;
      $img.classList.add(
        'w-6',
        'h-6',
        'hover:stroke-black-500',
        'fill-white',
        'stroke-white',
      );

      $input.addEventListener('change', this.$onchange.bind(this));

      $label.classList.add(
        'cursor-pointer',
        'flex',
        'items-center',
        'justify-center',
      );
      $input.classList.add('hidden');
      $container.classList.add(
        'bg-black',
        'w-12',
        'h-12',
        'flex',
        'justify-center',
        'items-center',
        'rounded-full',
        'cursor-pointer',
        'hover:bg-gray-300',
      );
      this.$el.classList.add(
        'flex',
        'justify-center',
        'items-center',
        'space-x-3',
      );

      $label.appendChild($img);
      $container.appendChild($input);
      $container.appendChild($label);
      this.$el.appendChild($container);
    });
  }

  $onchange(e: Event) {
    if (e.target instanceof HTMLInputElement) {
      this.$value = e.target.value;
    }
  }
}
