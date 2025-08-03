const stars = document.querySelectorAll(".fa-star-o");
const selectedRatingValueText = document.querySelector(".selected-rated-value");

let currentTotalSelectedStars = -1;
stars.forEach((item, index) => {
  item.dataset.rating = index + 1;
  item.addEventListener("mouseover", handleMouseOver);
  item.addEventListener("mouseleave", handleMouseLeave);
  item.addEventListener("click", handleOnClick);
});

function handleMouseOver(event) {
  const currentRatingValue = event.target.dataset.rating;
  if (!currentRatingValue) return;
  else handleUpdateRatingState(currentRatingValue);
  console.log(event.target.dataset);
}

function handleUpdateRatingState(getCurrentRatingValue) {
  for (let i = 0; i < 5; i++) {
    if (i < getCurrentRatingValue) {
      stars[i].classList.replace("fa-star-o", "fa-star");
    } else {
      stars[i].classList.replace("fa-star", "fa-star-o");
    }
  }
}

function handleOnClick(event) {
  const currentRatingValue = event.target.dataset.rating;
  currentTotalSelectedStars = currentRatingValue;
  handleUpdateRatingState(currentTotalSelectedStars);
  selectedRatingValueText.innerText = currentTotalSelectedStars;
}
function handleMouseLeave() {
  handleUpdateRatingState(currentTotalSelectedStars);
}
