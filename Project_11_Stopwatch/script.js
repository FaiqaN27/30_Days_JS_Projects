let [seconds, minutes, hours] = [0, 0, 0];
const displayTime = document.getElementById('display-time');
let timer = null;
const playIcon = document.getElementById('play-icon');

function watch() {
  seconds++;
  if (seconds == 60) {
    seconds = 0;
    minutes++;
    if (minutes == 60) {
      minutes = 0;
      hours++;
    }
  }

  let h = hours < 10 ? "0" + hours : hours;
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;

  displayTime.innerHTML = h + ":" + m + ":" + s;
  playIcon.src = './assets/pause.png'

}

function startWatch() {
  if (timer != null) {
    clearInterval(timer);
  }
  timer = setInterval(watch, 1000);
}

function stopWatch() {
  clearInterval(timer);
  playIcon.src = './assets/start.png'
}

function resetWatch() {
  clearInterval(timer);
  [seconds, minutes, hours] = [0, 0, 0];
  displayTime.innerHTML = "00:00:00";
  playIcon.src = './assets/start.png'
}