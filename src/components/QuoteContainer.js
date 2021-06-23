import React from 'react';
import '../css/App.css';

const QuoteContainer = ({statusProp, quoteProp}) => {

  let quoteText = quoteProp.quotation;
  let quoteAuthor;


  if (statusProp === "incorrect-kev" || statusProp === "correct-notkev") {
    quoteAuthor = quoteProp.author;
  }

  return (
        <div>
            <div className="Quote-text-container">
                <p className="Quote-text">{quoteText}</p>
                <div id="author-label">{quoteAuthor}</div>
            </div>
        </div>
    );
}

export default QuoteContainer;

