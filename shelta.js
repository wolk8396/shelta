import { SliderComponent } from './shared/slider/slider-component.js';
import { animal } from './shared/const/date-animal.js';
import { Operation } from './shared/operation/operation.js';
import { HeaderComponent } from './shared/header/header-component.js';
import { CartAnimal} from './shared/cart-animal/cart.js';
import { FooterComponent } from './shared/footer/footer-component.js';
import {ModalComponent} from './shared/modal-window/modal-component.js';

const slider = document.querySelector('.wrapper-slider');
const header = document.querySelector('.header-wrapper');
const wrapper = document.querySelector('.wrapper');
const body = document.querySelector('body')

const shelter = () => {
  const btn_forward = document.querySelector('.arrow_forward');
  const btn_backward = document.querySelector('.arrow_backward');
  let wrapper_cart = document.querySelector('.line_cart');
  let step = 0;
  let position = 0;
  let endLine = 0;
  let flag;

  const sliderList = number => {
    wrapper_cart.style.right = null;
    position = 0;

    if (number !== 1) {
      (animal.length % number !== 0) ? flag = false : flag = true;
    } else flag = true;
  };

  const mobilePhoneResize1268 = () => {
    if (window.innerWidth > 1230) {
      window.removeEventListener('resize',  mobilePhoneResize1268);
      sliderList(3);
      step = 1080;
      endLine = Operation.Fn_number(animal, 3) * step;

      Operation.addListeners(window, 'resize', [
        mobilePhoneResize1230,
        mobilePhoneResize730
      ])
    }
  };

  const mobilePhoneResize1230 = () => {
    if (window.innerWidth < 1230 && window.innerWidth > 730) {
      window.removeEventListener('resize',  mobilePhoneResize1230);
      sliderList(2);
      step = 620;
      endLine = Operation.Fn_number(animal, 2) * step;

      Operation.addListeners(window, 'resize', [
        mobilePhoneResize730,
        mobilePhoneResize1268
      ])
    }
  };

  const mobilePhoneResize730 = () => {
    if(window.innerWidth < 730) {
      window.removeEventListener('resize',  mobilePhoneResize730);
      sliderList(1);
      flag = true;
      step = 310;
      endLine = Operation.Fn_number(animal, 1) * step;

      Operation.addListeners(window, 'resize', [
        mobilePhoneResize1230,
        mobilePhoneResize1268
      ])
    }
  };

  Operation.onInitScreen(
    mobilePhoneResize1268,
    mobilePhoneResize730,
    mobilePhoneResize1230);

  const sliderNext = () => {
    position += step;
    if (flag) {
      (endLine === position) ? position = 0 : null;
        wrapper_cart.style.right =  position + 'px';
    } else {
      (endLine < position) ? position = 0 : null;
        wrapper_cart.style.right =  position + 'px';
    }
  };

  const sliderBack = () => {
    position -= step;

    if (flag) {
      (position < 0) ? position =  endLine - step : null;
      wrapper_cart.style.right =  position + 'px';
    } else {
      (position < 0) ? position =  endLine : null;
      wrapper_cart.style.right =  position + 'px';
    }
  };

  btn_forward.onclick = () => sliderBack();

  btn_backward.onclick = () => sliderNext();

  Operation.addListeners(window, 'resize', [
    mobilePhoneResize1268,
    mobilePhoneResize1230,
    mobilePhoneResize730
  ]);
};

new SliderComponent(slider, CartAnimal).onRender();

HeaderComponent.onInitHeader(header);

HeaderComponent.onLinksMenu(wrapper);

FooterComponent.onInitFooter(wrapper);

new ModalComponent(body).onInitModal()

shelter();
