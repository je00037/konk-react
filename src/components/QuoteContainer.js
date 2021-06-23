import React from 'react';
import '../css/App.css';

const QuoteContainer = ({statusProp, quoteProp}) => {

  let quoteText = quoteProp.quotation;
  let quoteAuthor = quoteProp.author;


  if (statusProp === "incorrect-kev" || statusProp === "correct-notkev") {
    document.getElementById("author-label").textContent = quoteAuthor;
  }

  return (
        <div className="Quote-container">
            <div className="Quote-text-container">
                <p className="Quote-text">{quoteText}</p>
                <div id="author-label"></div>
            </div>
        </div>
    );
}

export default QuoteContainer;

