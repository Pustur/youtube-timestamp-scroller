/* Functions */
function isTimestamp(element) {
  return (
    element.tagName === 'A' &&
    YOUTUBE_ID_REGEX.test(element.getAttribute('href'))
  );
}

function videoPauseHandler() {
  lastClickedTimestamp?.scrollIntoView({ block: 'center' });
  lastClickedTimestamp = null;
}

function setupVideo() {
  video = document.querySelector('video');
  video?.addEventListener('pause', videoPauseHandler);
}

function documentClickHandler(e) {
  if (isTimestamp(e.target)) {
    lastClickedTimestamp = e.target;

    if (!video) setupVideo();
  }
}

/* Variables */
const YOUTUBE_ID_REGEX = /^\/watch\?v=[\w-]+&t=\d+s$/i;
let video = null;
let lastClickedTimestamp = null;

/* Events */
document.addEventListener('click', documentClickHandler);
