import axios from 'axios';

export const getRandomQuote = () =>
  axios.get('https://quote-garden.herokuapp.com/api/v3/quotes/random');

export const getQuotesByAuthor = (author) =>
  axios.get(
    `https://quote-garden.herokuapp.com/api/v3/quotes?author=${author}`
  );
