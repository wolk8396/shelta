import { FooterComponent } from '../shared/footer/footer-component.js';
import {HeaderComponent } from '../shared/header/header-component.js';
import { animal } from '../shared/const/date-animal.js';
import { PaginationComponent } from '../shared/pagination/pagination-component.js';
import { CartAnimal} from '../shared/cart-animal/cart.js';
import { Operation } from '../shared/operation/operation.js';
import {ModalComponent} from '../shared/modal-window/modal-component.js'

const body = document.querySelector('body')
const wrapper = document.querySelector('.wrapper-pets');
const header = document.querySelector('.header');
const cards = document.querySelector('.cards_container');
const last_page  = document.querySelector('.last-page');
const first_page = document.querySelector('.first-page');
let counter_page = document.querySelector('.counter-page');
const next_page = document.querySelector('.next-page');
const previous_page = document.querySelector('.previous-page');
const buttons  = document.querySelectorAll('.btn');

const Remove_cards = () => {
  const cart_animal = document.querySelectorAll('.cart_animal');
  cart_animal.forEach(item => item.remove());
}

const onBtnAttribute =(...elements) => {
  buttons.forEach((item, i) => {
    (elements.includes(item.classList[0])) ?
      item.setAttribute('disabled', true):
      item.removeAttribute('disabled');
  })
}

const setAttributeBtn = (value, animal) => {
  switch (true) {
    case (value === animal.length):
      onBtnAttribute('next-page', 'last-page');
      break;
    case (value === 1):
      onBtnAttribute('previous-page', 'first-page');
      break;
    case (value === animal.length - 1):
      next_page.removeAttribute('disabled');
      last_page.removeAttribute('disabled');
      break;
    case (value > 1):
      previous_page.removeAttribute('disabled');
      first_page.removeAttribute('disabled');
      break;
  }
};

const onChangPage = (page, count, array) => {
  setAttributeBtn(count , array);
  Remove_cards();
  new PaginationComponent(array[page], cards, CartAnimal).onInitPagination();
};

const choseSome = (value, tets) => {
  const element = value.classList;
  let count;
  let page;

  switch (true) {
    case element.contains('next-page'):
      count = Number(++counter_page.innerHTML);
      page = tets.length - (tets.length - (count - 1));
      onChangPage(page, count, tets);
      break;
    case element.contains('previous-page'):
      count = Number(--counter_page.innerHTML);
      page = (tets.length - 1) - ((tets.length - count));
      onChangPage(page, count, tets);
      break;
    case element.contains('last-page'):
      counter_page.innerHTML = tets.length;
      onChangPage(tets.length-1, tets.length, tets);
      break;
    case element.contains('first-page'):
      counter_page.innerHTML = 1;
      onChangPage(0, 1, tets);
      break;
  }
};

const createArrayRandom = (countPage, step) => {
  let newArray = [];

  for (let i = 0; i < countPage; i++) {
    (step === 0) ?
      newArray.push([...animal.sort(()=> Math.random() - 0.5)]):
      newArray.push([...animal.sort(()=> Math.random() - 0.5)].slice(0, step));
  };

  const tets = newArray.reduce((acc, item) => {
    return [...acc, ...item.sort(()=> Math.random() - 0.5)]
  }, []).reduce((acc, item, i, product) => {
    return !(i % step) ? acc.concat([product.slice(i, i + step)]) : acc
  }, []);

  console.log(tets);
  next_page.onclick = () => choseSome(next_page, tets);

  previous_page.onclick = () => choseSome(previous_page, tets);

  last_page.onclick = () => choseSome(last_page, tets);

  first_page.onclick = () => choseSome(first_page, tets);

  counter_page.innerHTML = 1;

  onChangPage(0, 1, tets);
};

const mobilePhoneResize1268 = () => {
  if (window.innerWidth > 1230) {
    window.removeEventListener('resize',  mobilePhoneResize1268);
    createArrayRandom(6, 8);
    Operation.addListeners(window, 'resize', [
      mobilePhoneResize1230,
      mobilePhoneResize730
    ])
  }
};

const mobilePhoneResize1230 = () => {
  if (window.innerWidth < 1230 && window.innerWidth > 745) {
    window.removeEventListener("resize", mobilePhoneResize1230);
    createArrayRandom(8, 6);
    Operation.addListeners(window, 'resize', [
      mobilePhoneResize730,
      mobilePhoneResize1268
    ])
  }
};

const mobilePhoneResize730 = () => {
  if(window.innerWidth < 745) {
    window.removeEventListener('resize', mobilePhoneResize730);
    createArrayRandom(16, 3);
    Operation.addListeners(window, 'resize', [
      mobilePhoneResize1230,
      mobilePhoneResize1268
    ])
  }
};

Operation.addListeners(window, 'resize', [
  mobilePhoneResize1268,
  mobilePhoneResize1230,
  mobilePhoneResize730
]);

Operation.onInitScreen(
  mobilePhoneResize1268,
  mobilePhoneResize730,
  mobilePhoneResize1230);

HeaderComponent.onInitHeader(header);

HeaderComponent.onLinksMenu();

FooterComponent.onInitFooter(wrapper);

new ModalComponent(body).onInitModal();
