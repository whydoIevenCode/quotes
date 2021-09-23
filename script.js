// element selection

const getBtn = document.querySelector(".btn-get");
const quoteBox = document.querySelector(".quote");
const author = document.querySelector(".author");

//other variables
let apiQuotes = [];
let quote = [];

//pick a quote and manipulate the html
function pickQuote() {
  //random
  quote = apiQuotes[Math.trunc(Math.random() * apiQuotes.length)];
  console.log(quote);

  //html manipulation
  quoteBox.textContent = `" ${quote.text} "`;
  if (!quote.author) {
    author.textContent = `- Unknown`;
  } else {
    author.textContent = ` - ${quote.author}`;
  }
}

// get quotes
async function getQuotes() {
  const apiUrl = "https://type.fit/api/quotes";
  try {
    const response = await fetch(apiUrl);
    apiQuotes = await response.json();
    console.log(apiQuotes);
  } catch (err) {
    //error
  }
  pickQuote();
}
getQuotes();
getBtn.addEventListener("click", pickQuote);
