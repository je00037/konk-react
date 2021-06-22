import React from 'react';
import '../css/App.css';

const QuoteContainer = ({quoteProp}) => {
  
  let quoteText = quoteProp.quotation;
  let quoteAuthor = quoteProp.author;
  let authorLabel = document.getElementById("author-label");

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

