import {ModalComponent} from '../modal-window/modal-component.js'

export class CartAnimal {

  constructor(date) {
    this.date = date
  }

  onInitCart() {
    const {img, nameAnimal} = this.date;
    const cart_animal = document.createElement('div');
    const img_animal = document.createElement('img');
    const title_animal = document.createElement('div');
    const btn_animal = document.createElement('button');

    img_animal.src = img;
    title_animal.innerText = nameAnimal;
    btn_animal.innerText = 'Learn more';

    cart_animal.className = 'cart_animal';
    title_animal.className = 'title-pet';
    btn_animal.className = 'btn-pet';

    cart_animal.append(img_animal, title_animal, btn_animal);

    btn_animal.onclick = () => {
      new ModalComponent().onGetDate = this.date;
    }

    return cart_animal
  }
}
