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

export {playVideoButton, onPlayVideoButtonClick};
