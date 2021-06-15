import React, { useState } from 'react';
import StartButton from './StartButton.js';
import ItsKevButton from './ItsKevButton.js';
import NotKevButton from './NotKevButton.js';
import '../css/App.css';

const QuoteContainer = () => {
  const [quote, setQuote] = useState("Press the button for a quote...");  
  return (
        <div className="Quote-container">
            <p className="Quote-text">{quote}</p>
            <StartButton currentQuote={quote} changeTheQuote={setQuote}/>
            <ItsKevButton />
            <NotKevButton />
        </div>
    );
}

export default QuoteContainer;

