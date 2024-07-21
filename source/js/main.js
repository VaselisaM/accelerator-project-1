// https://swiperjs.com/get-started#installation
// import Swiper from "swiper";
// import {Navigation, Pagination} from "swiper/modules";
// import 'swiper/css';

// const tabsButton = document.querySelectorAll('.price__tab-button');


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
// const cardPriceData = cardPrice.innerHTML;
// let cardPriceShadow = cardPrice.innerHTML;
// console.log(priceCards);

const getCardPriceShadow = () => {
  priceCards.forEach((item) => {
    const cardPriceShadow = item.innerHTML;
    item.setAttribute('data-content', `${cardPriceShadow}`);
  });
};

getCardPriceShadow();

const video = document.querySelector('.video');
const playVideoButton = document.querySelector('.video__button');
const videoPreview = document.querySelector('.about__preview');

const idVideo = video.dataset.video;

const createIframe = () => {
  const iframe = document.createElement('iframe');
  video.appendChild(iframe);

  iframe.setAttribute('allowfullscreen', '');
  iframe.setAttribute('src', `https://www.youtube.com/embed/${idVideo}`);
  iframe.setAttribute('allow', 'autoplay; encrypted-media');
  videoPreview.remove();
  playVideoButton.remove();

  playVideoButton.removeEventListener('click', onPlayVideoButtonClick);
};

function onPlayVideoButtonClick () {
  createIframe();
}

playVideoButton.addEventListener('click', onPlayVideoButtonClick);

