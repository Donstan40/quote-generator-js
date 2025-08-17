const quoteContainer = document.getElementById('quote-container');
const quoteElement = document.getElementById('quote');
const authorElement = document.getElementById('author');
const generateQuoteBtn = document.getElementById('generate-quote-btn');

const quotes = [
  { quote: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
  { quote: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
  { quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" },
  // Add more quotes here...
];

generateQuoteBtn.addEventListener('click', generateQuote);

function generateQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];
  quoteElement.textContent = randomQuote.quote;
  authorElement.textContent = — ${randomQuote.author};
}

generateQuote(); // Generate a quote on page load
