import React from 'react';
import Quote from './Quote';
import './QuoteList.scss';

function QuoteList({
  list,
  author,
  currentPage,
  totalPage,
  previousPage,
  nextPage,
}) {
  const quotes = list.map((item) => (
    <Quote text={item.quoteText} key={item._id} />
  ));

  return (
    <>
      <h2 className='author'>{author}</h2>
      {quotes}
      <div className='pagination'>
        <button onClick={previousPage} disabled={currentPage === 1}>
          previous
        </button>
        <span>{`Page ${currentPage} of ${totalPage}`}</span>
        <button onClick={nextPage} disabled={currentPage === totalPage}>
          next
        </button>
      </div>
    </>
  );
}

export default QuoteList;
