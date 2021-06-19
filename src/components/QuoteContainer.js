import React, { useState } from 'react';
import StartButton from './StartButton.js';
import ItsKevButton from './ItsKevButton.js';
import NotKevButton from './NotKevButton.js';

import '../css/App.css';

const QuoteContainer = () => {
  const [currentQuote, setQuote] = useState("Press the button for a quote...");
  const [currentAuthor, setAuthor] = useState("not an author");
  console.log(currentAuthor);

  return (
        <div className="Quote-container">
            <div className="Quote-text-container">
                <p className="Quote-text">{currentQuote}</p>
            </div>
            <StartButton currentQuoteProp={currentQuote} setQuoteProp={setQuote} currentAuthorProp={currentAuthor} setAuthorProp={setAuthor} />
            <ItsKevButton />
            <NotKevButton />
        </div>
    );
}

export default QuoteContainer;

