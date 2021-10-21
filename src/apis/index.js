import axios from 'axios';

export const getRandomQuote = () =>
  axios.get('https://quote-garden.herokuapp.com/api/v3/quotes/random');

export const getQuotesByAuthor = (author, page, limit = 10) =>
  axios.get(
    `https://quote-garden.herokuapp.com/api/v3/quotes?author=${author}&limit=${limit}&page=${page}`
  );
