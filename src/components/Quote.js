import React from 'react';
import './Quote.scss';

function Quote({ text }) {
  return <div className='quote'>"{text}"</div>;
}

export default Quote;
