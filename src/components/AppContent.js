import '../css/App.css';
import React, { useState } from 'react';
import KevContainer from './KevContainer.js';
import QuoteContainer from './QuoteContainer.js';
import StartButton from './StartButton.js';
import ItsKevButton from './ItsKevButton.js';
import NotKevButton from './NotKevButton.js';
import Points from './Points.js';
import ResetButton from './ResetButton.js';
import newQuote from '../utils/quoteGenerator';

const placeholderQuote = {author: "Placeholder", quotation: "Hit the button to start."};
const endQuote = {author: "Placeholder", quotation: "That's all folks!"};
let usedQuotes = [];

const AppContent = () => {
  const [quote, setQuote] = useState(placeholderQuote);
  const [status, setStatus] = useState("start");
  const [points, setPoints] = useState(0);

  if (status === "reset") {
    setQuote(placeholderQuote);
    setPoints(0);
    setStatus("open");
  }

  if (status === "end") {
    document.getElementById("its-kev-button").setAttribute("style", "display: none;");
    document.getElementById("not-kev-button").setAttribute("style", "display: none;");
  }

  const handleStartClick = (event) => {
    if (usedQuotes.length === 13) {
      setQuote(endQuote); 
      setStatus("end");
      } else {
          let newQuoteObject;
          do {
            newQuoteObject = newQuote();
          } while (usedQuotes.includes(newQuoteObject.id));
          usedQuotes.push(newQuoteObject.id);
          console.log(usedQuotes);
          setQuote(newQuoteObject);
          setStatus("open");
        }
  }

  const handleResetClick = () => {
    if (status === "end") {
      document.getElementById("its-kev-button").setAttribute("style", "display: inital;");
      document.getElementById("not-kev-button").setAttribute("style", "display: initial;");
    }
    setStatus("reset");
    usedQuotes = [];
  }

  const handleKevClick = () =>  { 
    if (quote.author === "Kevin McCloud") { 
          setStatus("correct-kev");
          setPoints(points => {
              return points + 1;
          });
    } else {
          setStatus("incorrect-kev");
        }
  }

  const handleNotKevClick = () =>  { 
    if (quote.author !== "Kevin McCloud") { 
        setStatus("correct-notkev");
        setPoints(points => {
            return points + 1
        });
    } else {
          setStatus("incorrect-notkev");}
  }

  return (
    <div>
      <div className="Points-row">
        <Points pointsProp={points} />
        <ResetButton clickHandler={handleResetClick} />
      </div>
      <div className='App-content'>
        <div className='Kev-container'>
          <KevContainer />
        </div>
      <div className="Quote-container">
        <QuoteContainer statusProp={status} quoteProp={quote} />
        <StartButton statusProp={status} clickHandler={handleStartClick} resetClickHandler={handleResetClick} />
        <ItsKevButton statusProp={status} clickHandler={handleKevClick} />
        <NotKevButton statusProp={status} clickHandler={handleNotKevClick} />
      </div>
    </div>
  </div>
  );
}

export default AppContent;