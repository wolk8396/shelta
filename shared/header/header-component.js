export class HeaderComponent {

  static onInitHeader(element) {
    element.insertAdjacentHTML(
     'afterbegin',
      `<div class="header-menu" isGetEl>
        <div class="title" isGetEl>
          <div class="wrapper-title">
            <h3 class="title-shelter">Cozy House</h3>
            <img class="burger" src="/img/Burger.png" alt="">
          </div>
          <div class="under-title">Shelter for pets in Boston</div>
        </div>
        <div class="block-url" isGetEl>
          <nav class="url" isGetEl>
            <ul class="url-menu">
              <li>
                <a class="isActiveRouter" href="/shelta.html">About the shelter</a>
              </li>
              <li>
                <a class="isInactiveRouter" href="/pages/our-pets.html">Our pets</a>
              </li>
              <li>
                <a class="isInactiveRouter" href="/shelta.html#Help">Help the shelter</a>
              </li>
              <li>
                <a class="isInactiveRouter" href="#contacts">Contacts</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>`
    )
  }

  static onLinksMenu() {
    const btn_burger = document.querySelector('.burger');
    const getEl = document.querySelectorAll('[isGetEl]');
    const links = document.querySelectorAll('li > a');
    const block_url = document.querySelector('.block-url');
    const pathHref = window.location.href;

    const fun_burger = ()  => {
      (document.body.classList.contains('isActive_body')) ?
        document.body.classList.remove('isActive_body'):
        document.body.classList.add('isActive_body');

      getEl.forEach(item => {
        (item.classList.contains('isActive')) ?
          item.classList.remove('isActive'):
          item.classList.add('isActive');
      })
    };

    const CloseMenu = () => {
      getEl.forEach(item => {
        (item.classList.contains('isActive')) ?
        item.classList.add('isActive'):
        item.classList.remove('isActive');
      })
    }

    const onReset = () => {
      if (window.innerWidth > 633) {
        fun_burger();
      }
    }

    links.forEach(a => {
      (a.href !== pathHref) ?
        a.classList.replace('isActiveRouter', 'isInactiveRouter') :
        a.classList.replace('isInactiveRouter', 'isActiveRouter');

      a.onclick = () => CloseMenu();
    })

    btn_burger.onclick =() => fun_burger();

    block_url.onclick =() => fun_burger();

    window.addEventListener('resize', onReset);
  }
}
