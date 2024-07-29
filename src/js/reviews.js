import { getReviews } from './api.js';
import { refs } from './refs.js';
import Swiper from 'swiper/bundle';

// import styles bundle
import 'swiper/css/bundle';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/keyboard';

export async function renderReviews() {
  try {
    const reviews = await getReviews();

    if (reviews.length === 0) {
      refs.errorMessage.textContent = 'Not found';
      return;
    }

    reviews.forEach(review => {
      const li = document.createElement('li');
      li.classList.add('swiper-slide');
      li.classList.add('reviews-slide');
      li.innerHTML = `
        <img class="review-img" src="${review.avatar_url}" alt="${review.author}'s avatar">
        <h3 class="review-author">${review.author}</h3>
        <p class="review-comment">${review.review}</p>
      `;
      refs.reviewsList.appendChild(li);
    });

    const swiper = new Swiper('.swiper-container', {
      direction: 'horizontal',
      navigation: {
        nextEl: '.reviews-btn-next',
        prevEl: '.reviews-btn-prev',
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 16,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 16,
        },
        1440: {
          slidesPerView: 4,
          spaceBetween: 16,
        },
      },

      keyboard: {
        enabled: true,
        onlyInViewport: false,
      },
    });
  } catch (error) {
    refs.errorMessage.textContent = 'Not found';
  }
}

document.addEventListener('DOMContentLoaded', renderReviews);
