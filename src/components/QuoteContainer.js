import React, { useState } from 'react';
import StartButton from './StartButton.js';
import ItsKevButton from './ItsKevButton.js';
import NotKevButton from './NotKevButton.js';

import '../css/App.css';

const QuoteContainer = () => {
  const [currentQuote, setQuote] = useState("Press the button for a quote...");
  const [currentAuthor, setAuthor] = useState("");
  const [gameState, setGameState] = useState("open");
  const [greenButton, setGreenButton] = useState("It's Kev!");
  const [redButton, setRedButton] = useState("Not Kev!");
  console.log(gameState);


  let authorLabel = document.getElementById("author-label");

  let startButtonLabel = "";
    if (currentAuthor === "") {startButtonLabel = "Let's go"} else {startButtonLabel = "Next"};



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
            buttonLabelProp={startButtonLabel}
            gameStateProp={gameState}
            setGameStateProp={setGameState}
            greenButtonProp={greenButton}
            setGreenButtonProp={setGreenButton}
            redButtonProp={redButton}
            setRedButtonProp={setRedButton}
           />
            <ItsKevButton 
            currentAuthorProp={currentAuthor} 
            authorLabelProp={authorLabel}
            gameStateProp={gameState}
            setGameStateProp={setGameState}
            greenButtonProp={greenButton}
            setGreenButtonProp={setGreenButton}
            />
            <NotKevButton 
            currentAuthorProp={currentAuthor} 
            authorLabelProp={authorLabel}
            gameStateProp={gameState}
            setGameStateProp={setGameState}
            redButtonProp={redButton}
            setRedButtonProp={setRedButton}
            />
        </div>
    );
}

export default QuoteContainer;

