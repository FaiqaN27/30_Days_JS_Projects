let progress = document.getElementById('progress');
let song = document.getElementById('song');
let ctrlIcon = document.getElementById('play-icon');

song.onloadedmetadata = function () {
  progress.max = song.duration;
  progress.value = song.currentTime;
}

function playPause() {
  if (ctrlIcon.classList.contains("fa-pause")) {
    song.pause();
    ctrlIcon.classList.remove("fa-pause");
    ctrlIcon.classList.add("fa-play");
    clearInterval(timer);
  }
  else {
    song.play();
    ctrlIcon.classList.remove("fa-play");
    ctrlIcon.classList.add("fa-pause");
    timer = setInterval(() => {
      progress.value = song.currentTime;
    }, 500)
  }
}

progress.onchange = function () {
  song.currentTime = progress.value;
  song.play();
  ctrlIcon.classList.remove("fa-play");
  ctrlIcon.classList.add("fa-pause");
}

song.onended = function () {
  ctrlIcon.classList.remove("fa-pause");
  ctrlIcon.classList.add("fa-play");
};