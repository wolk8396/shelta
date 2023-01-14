export class ModalComponent {
  #Attributes;
  #btn_close;
  #modal_wrapper;
  #isKey;

  constructor(element) {
    this.element = element
  }

  get onGetDate() {}

  set onGetDate(value) {
    this.onUpDateModal(value);
  }

  onInitModal () {
    this.element.insertAdjacentHTML(
      'afterbegin',
      `<div class="modal-window">
          <div class="wrapper-modal">
            <button class="btn_close">
              <img src="../../img/close_img.png" alt="">
            </button>
            <div class="information-pets">
              <img update="img" class="pet-img" src="" alt="">
              <div class="content">
                <div class="wrapper-information">
                  <div class="title-modal">
                    <h3 update="nameAnimal" class="title-modal-pet"></h3>
                    <h4 update="breed" class="breed"></h4>
                  </div>
                  <p update="description" class="description-pet"></p>
                  <ul class="list-items">
                    <li class="item">
                      <span class="pet-item">Age:</span>
                      <span update="age" class="pet-point"></span>
                    </li>
                    <li class="item">
                      <span class="pet-item">Inoculations:</span>
                      <span update="Inoculations" class="pet-point"></span>
                    </li>
                    <li class="item">
                      <span class="pet-item">Disease:</span>
                      <span update="disease" class="pet-point"></span>
                    </li>
                    <li class="item">
                      <span class="pet-item">Parasites:</span>
                      <span update="parasites" class="pet-point"></span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>`);

    this.#btn_close = document.querySelector('.btn_close');

    this.#btn_close.onclick =() => this.onClearModal();
  }

  onUpDateModal(value) {
    this.#modal_wrapper = document.querySelector('.modal-window');
    this.#Attributes = document.querySelectorAll('[update]');

    this.#Attributes.forEach(element => {
      this.#isKey = element.getAttribute('update');
      (element.tagName === "IMG") ?
        element.src = value[this.#isKey] :
        element.innerHTML = value[this.#isKey];
    });
    this.#modal_wrapper.style.display = 'block';
  }

  onClearModal() {
    this.#modal_wrapper = document.querySelector('.modal-window');
    this.#Attributes = document.querySelectorAll('[update]');
    this.#modal_wrapper.style.display = 'none';

      this.#Attributes.forEach(item => {
        (item.tagName === "IMG") ?
        item.src ='' : item.innerHTML = null;
      })
  }

}
