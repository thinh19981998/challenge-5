import { useEffect, useState } from 'react';
import { getQuotesByAuthor, getRandomQuote } from './apis';
import './App.scss';
import Quote from './components/Quote';
import QuoteList from './components/QuoteList';

function App() {
  const [quote, setQuote] = useState([]);
  const [authorQuotes, setAuthorQuotes] = useState([]);
  const [show, setShow] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  const generateRandomQuote = async () => {
    setIsLoading(true);
    await getRandomQuote().then((res) => {
      setQuote(res.data.data[0]);
    });
    setShow(true);
    setIsLoading(false);
  };

  const getAuthorQuotes = async () => {
    setIsLoading(true);
    await getQuotesByAuthor(quote.quoteAuthor).then((res) => {
      setAuthorQuotes(res.data.data);
    });
    setShow(false);
    setIsLoading(false);
  };

  useEffect(() => {
    setIsLoading(true);
    generateRandomQuote();
  }, []);

  const screen = isLoading ? (
    <h1>Loading...</h1>
  ) : show ? (
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
