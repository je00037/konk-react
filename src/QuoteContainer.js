import React, { useState } from 'react';
import StartButton from './StartButton';
import './App.css';

const QuoteContainer = () => {
  const [quote, setQuote] = useState("Press the button for a quote!");  
  return (
        <div className="Quote-container">
            <p className="Quote-text">{quote}</p>
            <StartButton changeTheQuote={setQuote}/>
        </div>
    );
}

export default QuoteContainer;

