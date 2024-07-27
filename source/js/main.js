// https://swiperjs.com/get-started#installation
// import Swiper from 'swiper';
// import {Navigation, Pagination} from 'swiper/modules';
// import 'swiper/css';
// import {playVideoButton, onPlayVideoButtonClick} from './modules/video.js';

// const tabsButton = document.querySelectorAll('.price__tab-button');

// new Swiper('.slider');

// tabsButton.forEach(function(item) {
//   item.addEventListener('click', onTabsButtonClick);
//   let currentButton = item;
//   function onTabsButtonClick () {
//     tabsButton.forEach(function(item) {
//       item.classList.remove('active')
//     });
//     currentButton.classList.add('active');
//   }

// });

const priceCards = document.querySelectorAll('.tab-card__price');

const getCardPriceShadow = () => {
  priceCards.forEach((item) => {
    const cardPriceShadow = item.innerHTML;
    item.setAttribute('data-content', `${cardPriceShadow}`);
  });
};

getCardPriceShadow();

// playVideoButton.addEventListener('click', onPlayVideoButtonClick);

