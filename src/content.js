/* Functions */
function isTimestamp(element) {
  return (
    element.tagName === 'A' &&
    YOUTUBE_ID_REGEX.test(element.getAttribute('href'))
  );
}

function documentClickHandler(e) {
  if (isTimestamp(e.target)) lastClickedTimestamp = e.target;
}

function videoPauseHandler() {
  lastClickedTimestamp?.scrollIntoView({ block: 'center' });
  lastClickedTimestamp = null;
}

/* Variables */
const YOUTUBE_ID_REGEX = /^\/watch\?v=[\w-]+&t=\d+s$/i;
const video = document.querySelector('video');
let lastClickedTimestamp = null;

/* Events */
document.addEventListener('click', documentClickHandler);
video?.addEventListener('pause', videoPauseHandler);
