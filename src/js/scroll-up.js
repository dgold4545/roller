const scrollUp = document.querySelector('.scroll-up');

const updateScrollUpVisibility = () => {
  const scrollPosition = window.scrollY;
  if (scrollPosition > 800) {
    scrollUp.classList.add('scroll-up-active');
  } else {
    scrollUp.classList.remove('scroll-up-active');
  }
};

window.addEventListener('scroll', updateScrollUpVisibility);
