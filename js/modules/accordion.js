export default class Accordion {
  constructor(list) {
    this.accordionList = document.querySelectorAll(list);
    this.activeClass = 'ativo';
  }

  toggleAccordion(item) {
    this.classList.toggle(this.activeClass);
    this.nextElementSibling.classList.toggle(this.activeClass);
  }

  // adiciona os eventos ao accordion
  addAccordingEvent() {
    this.accordionList.forEach((item) => {
      item.addEventListener('click', () => this.toggleAccordion(item));
    });
  }

  // iniciar funcao
  init() {
    if (accordionList.length) {
      //ativar primeiro item
      this.toggleAccordion(this.accordionList[0]);
      this.addAccordingEvent();
    }
  }
}
