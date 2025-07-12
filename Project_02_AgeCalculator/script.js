const calcBtn = document.getElementById('cal-btn');
let displayOutput = document.getElementById('display-output');

let userInput = document.getElementById('date-input');
userInput.max = new Date().toISOString().split("T")[0];

calcBtn.addEventListener("click", function () {
  let birthDay = new Date(userInput.value);

  let inputDate = birthDay.getDate();
  let inputMonth = birthDay.getMonth() + 1;
  let inputYear = birthDay.getFullYear();

  let today = new Date();

  let currDate = today.getDate();
  let currMonth = today.getMonth() + 1;
  let currYear = today.getFullYear();

  let birthDate, birthMonth, birthYear;

  birthYear = currYear - inputYear;

  if (currMonth >= inputMonth) {
    birthMonth = currMonth - inputMonth;
  }
  else {
    birthYear--;
    birthMonth = 12 + currMonth - inputMonth;
  }

  if (currDate >= inputDate) {
    birthDate = currDate - inputDate;
  }
  else {
    birthMonth--;
    birthDate = getDaysInMonth(currYear, currMonth - 1) + currDate - inputDate;
  }

  if (birthMonth < 0) {
    birthMonth = 11;
    birthYear--;
  }

  displayOutput.innerHTML = `You are ${birthYear} years , ${birthMonth} months & ${birthDate} days old.`
})

function getDaysInMonth(year, month) {
  return new Date(year, month, 0).getDate();
}