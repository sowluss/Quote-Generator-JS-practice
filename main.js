const quotes = [{
    name: 'Carol Burnett',
    quote: 'Only I can change my life. No one can do it for me.'
  },
  {
    name: 'Robert H. Schuller',
    quote: 'Problems are not stop signs, they are guidelines.'
  },

  {
    name: 'Mark Twain',
    quote: 'The secret of getting ahead is getting started.'
  },

  {
    name: 'Charles R. Swindoll',
    quote: 'Life is 10% per what happens to you and 90% how you react to it.'
  },

  {
    name: 'Arthur Ashe',
    quote: 'Start where you are. Use what you have. Do what you can.'
  }
]

const quoteBtn = document.querySelector('#quoteBtn');
const quoteAuthor = document.querySelector('#author');
const quote = document.querySelector('#quote');

quoteBtn.addEventListener('click', displayQuote);

function displayQuote() {
  let number = Math.floor(Math.random() * quotes.length);
  quoteAuthor.innerHTML = quotes[number].name;
  quote.innerHTML = quotes[number].quote;
} 