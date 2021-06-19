import React, { useState } from 'react';
import StartButton from './StartButton.js';
import ItsKevButton from './ItsKevButton.js';
import NotKevButton from './NotKevButton.js';

import '../css/App.css';

const QuoteContainer = () => {
  const [currentQuote, setQuote] = useState("Press the button for a quote...");
  const [currentAuthor, setAuthor] = useState("");

  let authorLabel = document.getElementById("author-label");

  let buttonLabel = "";
    if (currentAuthor === "") {buttonLabel = "Let's go"} else {buttonLabel = "Next"};

  return (
        <div className="Quote-container">
            <div className="Quote-text-container">
                <p className="Quote-text">{currentQuote}</p>
                <div id="author-label"></div>
            </div>
            <StartButton 
            currentQuoteProp={currentQuote} 
            setQuoteProp={setQuote} 
            currentAuthorProp={currentAuthor} 
            setAuthorProp={setAuthor} 
            buttonLabelProp={buttonLabel} />
            <ItsKevButton 
            currentAuthorProp={currentAuthor} 
            authorLabelProp={authorLabel}/>
            <NotKevButton 
            currentAuthorProp={currentAuthor} 
            authorLabelProp={authorLabel}/>
        </div>
    );
}

export default QuoteContainer;

