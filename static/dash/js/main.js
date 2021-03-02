window.onload = function () {
  /*===== EXPANDER MENU  =====*/
  /*const showMenu = (toggleId, navbarId, bodyId)=>{
    const toggle = document.getElementById(toggleId),
    navbar = document.getElementById(navbarId),
    bodypadding = document.getElementById(bodyId)
  
    if(toggle && navbar){
      toggle.addEventListener('click', ()=>{
        navbar.classList.toggle('expander')
  
        bodypadding.classList.toggle('body-pd')
      })
    }
  }
  showMenu('nav-toggle','navbar','body-pd')*/

  /*===== LINK ACTIVE  =====*/
  const linkColor1 = document.querySelectorAll('.nav__link');
  const linkColor2 = document.querySelectorAll('.tab-l');
  function col_link(name, active_class) {
    const linkColor = document.querySelectorAll(`${name}`);
    function colorLink() {
      linkColor.forEach((l) => l.classList.remove(`${active_class}`));
      this.classList.add(`${active_class}`);
    }
    linkColor.forEach((l) => l.addEventListener('click', colorLink));
  }
  col_link('.nav__link', 'active');

  const tabs = document.querySelectorAll('[data-txt-target]');
  const tabContents = document.querySelectorAll('[data-txt-content]');

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      const target = document.querySelector(tab.dataset.txtTarget);
      tabContents.forEach((tabContent) => {
        tabContent.classList.remove('tb-1-active');
      });
      tabs.forEach((tab) => {
        tab.classList.remove('tb-1-active');
      });
      tab.classList.add('tb-1-active');
      target.classList.add('tb-1-active');
    });
  });

  /*=====  COLLAPSE MENU  =====*/
  const linkCollapse = document.querySelectorAll('.collapse__link');
  var i;

  for (i = 0; i < linkCollapse.length; i++) {
    linkCollapse[i].addEventListener('click', function () {
      const collapseMenu = this.nextElementSibling;
      collapseMenu.classList.toggle('showCollapse');

      const rotate = collapseMenu.previousElementSibling;
      rotate.classList.toggle('rotate');
    });
  }

  /*linkCollapse.forEach((link) => {
    link.addEventListener('click', () => {
      const collapseMenu = this.nextElementSibling;
      collapseMenu.classList.toggle('showCollapse');
  
      const rotate = collapseMenu.previousElementSibling;
      rotate.classList.toggle('rotate');
    });
  });*/

  /*Input-name-app*/
  const appInput = document.querySelector('[data-input = "app-name"]');
  appInput.addEventListener('input', () => {
      if(appInput.value.lenght <= 4) {
          appInput.classList.add('alert')
      }
  });

};
