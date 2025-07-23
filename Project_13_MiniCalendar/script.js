const date = document.getElementById('date');
const day = document.getElementById('day');
const month = document.getElementById('month');
const year = document.getElementById('year');

function getDate() {
  const today = new Date();
  const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  let d = today.getDate();
  date.innerHTML = d < 10 ? "0" + d : d;
  day.innerHTML = weekDays[today.getDay()];
  month.innerHTML = months[today.getMonth()];
  year.innerHTML = today.getFullYear();
}

getDate();
setInterval(getDate, 1000 * 60 * 60 * 24);