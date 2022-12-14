export class FooterComponent {

  static onInitFooter(element) {
    element.insertAdjacentHTML(
      'beforeend',
      `<div class="footer">
        <div class="wrapper-footer">
          <div class="contacts-block" id="contacts">
            <div class="first-contact">
              <h3 class="title-first">For questions and suggestions</h3>
              <div class="contact-company">
                <img src="../../img/mail.png" alt="">
                <h4>email@shelter.com</h4>
                <img src="../../img/phone.png" alt="">
                <h4>+13 674 567 75 54</h4>
              </div>
            </div>
            <div class="second-contact">
              <h3 class="title-second">We are waiting for your visit</h3>
              <div class="loction-company">
                <img src="../../img/pin.png" alt="">
                <h4>1 Central Street, Boston (entrance from the store)</h4>
                <img src="../../img/pin.png" alt="">
                <h4>18 South Park, London</h4>
              </div>
            </div>
          </div>
          <div class="block-photo"></div>
        </div>
      </div>`
    )
  }
}
