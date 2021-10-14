import React from 'react';
import Quote from './Quote';
import './QuoteList.scss';

function QuoteList({ list, author }) {
  const quotes = list.map((item) => <Quote text={item.quoteText} />);
  return (
    <>
      <h2 className='author'>{author}</h2>
      {quotes}
    </>
  );
}

export default QuoteList;
