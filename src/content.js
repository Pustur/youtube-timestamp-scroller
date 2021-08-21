/* Functions */
function isTimestamp(element) {
  return (
    element.tagName === 'A' &&
    YOUTUBE_ID_REGEX.test(element.getAttribute('href'))
  );
}

function videoPauseHandler() {
  if (!lastClickedTimestamp) return;

  const comment = lastClickedTimestamp.closest('ytd-comment-renderer');

  lastClickedTimestamp.scrollIntoView({ block: 'center' });
  lastClickedTimestamp = null;

  if (!comment) return;

  comment.classList.add(HIGHLIGHT_CLASS);
  setTimeout(() => comment.classList.remove(HIGHLIGHT_CLASS), 1000);
}

function setupVideo() {
  video = document.querySelector('video');

  if (video) video.addEventListener('pause', videoPauseHandler);
}

function documentClickHandler(e) {
  if (isTimestamp(e.target)) {
    lastClickedTimestamp = e.target;

    if (!video) setupVideo();
  }
}

/* Variables */
const YOUTUBE_ID_REGEX = /^\/watch\?v=[\w-]+&t=\d+s$/i;
const HIGHLIGHT_CLASS = 'yts-highlight-animation';
let video = null;
let lastClickedTimestamp = null;

/* Events */
document.addEventListener('click', documentClickHandler, { capture: true });
