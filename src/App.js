import { useEffect, useState } from 'react';
import { getQuotesByAuthor, getRandomQuote } from './apis';
import './App.scss';
import Quote from './components/Quote';
import QuoteList from './components/QuoteList';

function App() {
  const [quote, setQuote] = useState([]);
  const [authorQuotes, setAuthorQuotes] = useState([]);
  const [show, setShow] = useState(true);

  const generateRandomQuote = () => {
    getRandomQuote().then((res) => {
      setQuote(res.data.data[0]);
    });
    setShow(true);
  };

  const getAuthorQuotes = () => {
    console.log(quote.quoteAuthor);
    getQuotesByAuthor(quote.quoteAuthor).then((res) => {
      setAuthorQuotes(res.data.data);
    });
    console.log(authorQuotes);
    setShow(false);
  };

  useEffect(() => {
    generateRandomQuote();
  }, []);

  const screen = show ? (
    <>
      <Quote text={quote.quoteText} />
      <div className='quote-author' onClick={getAuthorQuotes}>
        <span className='author'>{quote.quoteAuthor}</span>
        <span className='gern'>{quote.quoteGenre}</span>
      </div>
    </>
  ) : (
    <QuoteList list={authorQuotes} author={quote.quoteAuthor} />
  );

  return (
    <div className='container'>
      {screen}
      <button onClick={generateRandomQuote} className='random'>
        random <span class='material-icons md-36'>autorenew</span>
      </button>
    </div>
  );
}

export default App;
