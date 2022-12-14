export class PaginationComponent {

  constructor(date, cards_wrapper, CartAnimal) {
    this.date = date,
    this.cards_wrapper = cards_wrapper,
    this.CartAnimal = CartAnimal
  }

  onInitPagination() {

    this.date.forEach(el => {
      const cart_animal = new this.CartAnimal(el).onInitCart();
      this.cards_wrapper.append(cart_animal);
    });
    console.log( this.cards_wrapper);
  }
}
