import Accordion from 'accordion-js';

const container = document.querySelector('.accordion-container-faq');
const accordion = new Accordion(container, {
  duration: 400,
  showMultiple: true,
  onOpen: function (currentElement) {
    const down = currentElement.querySelector('.an-icon-button-down');
    const up = currentElement.querySelector('.an-icon-button-up');
    down.classList.toggle('open');
    up.classList.toggle('open');
  },
  onClose: function (currentElement) {
    const down = currentElement.querySelector('.an-icon-button-down');
    const up = currentElement.querySelector('.an-icon-button-up');
    down.classList.toggle('open');
    up.classList.toggle('open');
  },
});
