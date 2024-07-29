function addClassToListItems(idSelector, className) {
  const id = document.querySelector(idSelector);
  if (id) {
    const listItems = document.querySelectorAll('.marquee-inner li');
    listItems.forEach(item => {
      item.classList.add(className);
    });
  }
}
function removeClassToListItems(idSelector, className) {
  const id = document.querySelector(idSelector);
  if (id) {
    const listItems = document.querySelectorAll('.marquee-inner li');
    listItems.forEach(item => {
      item.classList.remove(className);
    });
  }
}

const options = {
  rootMargin: '20px 0px',
  threshold: 0,
};

function onItersection(entries) {
  const entry = entries[0];
  if (entry.isIntersecting) {
    addClassToListItems('#covers', 'js-marquee-line');
  } else {
    removeClassToListItems('#covers', 'js-marquee-line');
  }
}

export const observer = new IntersectionObserver(onItersection, options);
