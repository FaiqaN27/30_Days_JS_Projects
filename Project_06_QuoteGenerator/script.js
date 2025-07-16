const quoteBtn = document.getElementById("quote-btn");
const tweetBtn = document.getElementById("tweet-btn");
const api_url = "https://api.quotable.io/random";
let quote = document.getElementById('quote');
let author = document.getElementById('author');

quoteBtn.addEventListener("click", () => getQuote(api_url));

async function getQuote(api_url) {
  const res = await fetch(api_url);
  const data = await res.json();

  quote.innerHTML = data.content;
  author.innerHTML = data.author;
}

tweetBtn.addEventListener("click", () => {
  console.log("hi");
  window.open("https://twitter.com/intent/tweet?text=" + quote.innerHTML + " by------ " + author.innerHTML, "Tweet window", "width= 600 , height = 300");
})


getQuote(api_url);