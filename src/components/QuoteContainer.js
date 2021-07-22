import React from 'react';
import '../css/App.css';

const QuoteContainer = ({statusProp, quoteProp, pointsProp}) => {
  const poorEffortMessage = "That's rubbish - more Grand Designs needed for you.";
  const notBadMessage = "Not bad - you're starting to tune-in to Kev.";
  const greatMessage = "Excellent job, are you Kev himself?";
  let quoteText = quoteProp.quotation;
  let quoteAuthor;


  if (statusProp === "incorrect-kev" || statusProp === "correct-notkev") {
    quoteAuthor = quoteProp.author;
  }

  return (
    <div className="Quote-text-container">
      {statusProp === "end" ? <p className="Quote-text">Game over! You scored <strong>{pointsProp}</strong> points.<br/><br/> {pointsProp <= 4 ? poorEffortMessage : pointsProp <= 10 ? notBadMessage : greatMessage}</p> : <p className="Quote-text">{quoteText}</p>}
      <div id="author-label">{quoteAuthor}</div>
    </div>
  );
}

export default QuoteContainer;

