import quoteData from '../data.json';

export const quotes = quoteData;

const randomInteger = (min, max) => 
    Math.floor(Math.random() * (max - min + 1)) + min;
  

const getQuote = (arr) => {
    let randomIndex = randomInteger(1, quotes.length - 1);
    let randomQuote = arr[randomIndex];
    return randomQuote;
  }

export const newQuote = () => getQuote(quotes);
