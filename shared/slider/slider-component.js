 import { animal } from '../const/date-animal.js'

 export class SliderComponent {

  constructor(el_slider,  CartAnimal) {
    this.el_slider = el_slider;
    this.CartAnimal = CartAnimal
  }

  onRender() {
    const btn_forward = document.createElement('button');
    const btn_backward = document.createElement('button');
    const container_slider = document.createElement('div');
    const line_cart = document.createElement('div');
    const arrow_img_1 = document.createElement('img');
    const arrow_img_2 = document.createElement('img');

    container_slider.className = 'wrapper_cart';
    line_cart.className = 'line_cart';
    btn_forward.className = 'arrow_forward';
    btn_backward.className = 'arrow_backward';

    arrow_img_1.src = '../../img/Arrow.png';
    arrow_img_2.src = '../../img/Arrow (1).png'

    btn_forward.append(arrow_img_1);
    btn_backward.append(arrow_img_2);
    this.el_slider.append(btn_forward);
    container_slider.append(line_cart);

    animal.forEach(el => {
      const cart_animal = new this.CartAnimal(el).onInitCart();

      line_cart.append(cart_animal);
      this.el_slider.append(container_slider);
    });

    this.el_slider.append(btn_backward);
  }
}
