import { useEffect, useState } from 'react';
import { getQuotesByAuthor, getRandomQuote } from './apis';
import './App.scss';
import Quote from './components/Quote';
import QuoteInfo from './components/QuoteInfo';
import QuoteList from './components/QuoteList';

function App() {
  const [quote, setQuote] = useState([]);
  const [pagination, setPagination] = useState({
    currentPage: 1,
    totalPage: null,
  });
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
    setPagination({
      currentPage: 1,
      totalPage: null,
    });
  };

  const getAuthorQuotes = async (page) => {
    setIsLoading(true);
    await getQuotesByAuthor(quote.quoteAuthor, page).then((res) => {
      setAuthorQuotes(res.data.data);
      setPagination({
        ...pagination,
        totalPage: res.data.pagination.totalPages,
      });
    });
    setShow(false);
    setIsLoading(false);
  };

  const nextPage = () => {
    setPagination({
      ...pagination,
      currentPage: pagination.currentPage++,
    });
    getAuthorQuotes(pagination.currentPage);
  };

  const previousPage = () => {
    setPagination({
      ...pagination,
      currentPage: pagination.currentPage--,
    });
    getAuthorQuotes(pagination.currentPage);
  };

  useEffect(() => {
    generateRandomQuote();
  }, []);

  const screen = isLoading ? (
    <h1>Loading...</h1>
  ) : show ? (
    <>
      <Quote text={quote.quoteText} />
      <QuoteInfo quote={quote} getAuthorQuotes={getAuthorQuotes} />
    </>
  ) : (
    <QuoteList
      list={authorQuotes}
      author={quote.quoteAuthor}
      pagination={pagination}
      nextPage={nextPage}
      previousPage={previousPage}
      currentPage={pagination.currentPage}
      totalPage={pagination.totalPage}
    />
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
