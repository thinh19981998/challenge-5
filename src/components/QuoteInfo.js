import React from 'react';

function QuoteInfo({ quote, getAuthorQuotes }) {
  return (
    <div className='quote-author' onClick={getAuthorQuotes}>
      <span className='author'>{quote.quoteAuthor}</span>
      <span className='gern'>{quote.quoteGenre}</span>
    </div>
  );
}

export default QuoteInfo;
