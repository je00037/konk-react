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



const AppContent = () => {

  const [quote, setQuote] = useState({author: "Placeholder", quotation: "Hit the button to start."});
  const [status, setStatus] = useState("start");
  const [points, setPoints] = useState(0);

  const handleStartClick = (event) => {
    let currentQuote = quote.quotation;

    let newQuoteObject;
    do {
        newQuoteObject = newQuote();
    } while (newQuoteObject.quotation === currentQuote);

    setQuote(newQuoteObject);
    setStatus("open");

    /* not sure if this will actually work - reading state and setting new state in the same function? Do I need to call setQuote and setStatus with a function that simply returns those values instead?*/
}

  return (
  
    <div>
      <div className="Points-row">
        <Points currentPoints={points} />
        <ResetButton />
      </div>
      <div className='App-content'>
        <div className='Kev-container'>
          <KevContainer />
        </div>
      <div className="Quote-container">
        <QuoteContainer statusProp={status} quoteProp={quote} />
        <StartButton statusProp={status} clickHandler={handleStartClick} />
        <ItsKevButton statusProp={status} setStatusProp={setStatus} authorProp={quote.author} pointsProp={points} setPointsProp={setPoints} />
        <NotKevButton statusProp={status} setStatusProp={setStatus} authorProp={quote.author} pointsProp={points} setPointsProp={setPoints}/>
      </div>
    </div>
  </div>
  );
}

export default AppContent;