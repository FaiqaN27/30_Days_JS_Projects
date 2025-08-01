const data = [
  {
    id: 1,
    question: "What is JavaScript?",
    answer: "JS is an abbreviation for JavaScript, which is a dynamic and interpreted programming language primarily known for its role in web development.",
  },
  {
    id: 2,
    question: "What is the difference between var, let, and const?",
    answer:
      "`var` is function-scoped, `let` and `const` are block-scoped. `const` cannot be reassigned.",
  },
  {
    id: 3,
    question: "How many frameworks are there in JavaScript?",
    answer:
      "There are at least 24 JavaScript frameworks, including Vue. js, Angular. js, Node. js, React.",
  },
  {
    id: 4,
    question: "What is an API?",
    answer:
      "API stands for Application Programming Interface. It allows communication between software systems.",
  },
  {
    id: 5,
    question: "What is JSX?",
    answer:
      "JSX is a syntax extension for JavaScript that looks similar to XML or HTML and is used in React.",
  },
];

const accordionWrapper = document.getElementById("accordion");

function createAccordionData() {
  accordionWrapper.innerHTML = data
    .map(
      (item) =>
        `<div class="accordion-item"><div class="accordion-title">
      <h3>${item.question}</h3>
      <i class="fa-solid fa-arrow-down"></i></div>
      <div class="accordion-content"><p>${item.answer}</p></div></div>`
    )
    .join("");
}
createAccordionData();
const getAccordionTitles = document.querySelectorAll(".accordion-title");

getAccordionTitles.forEach((currentItem) => {
  currentItem.addEventListener("click", (event) => {
    if (currentItem.classList.contains("active")) {
      currentItem.classList.remove("active");
    } else {
      let getAlreadyActiveClasses = document.querySelectorAll(".active");
      getAlreadyActiveClasses.forEach((currentActiveItem) => {
        currentActiveItem.classList.remove("active");
      });
      currentItem.classList.add("active");
    }
  });
});
