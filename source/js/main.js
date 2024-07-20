// https://swiperjs.com/get-started#installation
// import Swiper from "swiper";
// import {Navigation, Pagination} from "swiper/modules";
// import 'swiper/css';

const video = document.querySelector('.video');
const button = document.querySelector('.video__button');
const picture = document.querySelector('.about__preview');

const idVideo = video.dataset.video;

const createIframe = () => {
  const iframe = document.createElement('iframe');
  video.appendChild(iframe);

  iframe.setAttribute('allowfullscreen', '');
  iframe.setAttribute('src', `https://www.youtube.com/embed/${idVideo}`);
  iframe.setAttribute('allow', 'autoplay; encrypted-media');
  picture.remove();
  button.remove();

  button.removeEventListener('click', onButtonClick);
};

function onButtonClick () {
  createIframe();
}

button.addEventListener('click', onButtonClick);

