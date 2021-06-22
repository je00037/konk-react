import '../css/App.css';
import React, { useState } from 'react';
import KevContainer from './KevContainer.js';
import QuoteContainer from './QuoteContainer.js';
import StartButton from './StartButton.js';
import ItsKevButton from './ItsKevButton.js';
import NotKevButton from './NotKevButton.js';
import newQuote from '../utils/quoteGenerator';


const AppContent = () => {

  const [quote, setQuote] = useState({author: "Placeholder", quotation: "Hit the button to start."});
  const [status, setStatus] = useState("start");

  const handleStartClick = (event) => {
    document.getElementById("author-label").textContent = "";
    let currentQuote = quote.quotation;

    let newQuoteObject;
    do {
        newQuoteObject = newQuote();
    } while (newQuoteObject.quotation === currentQuote.quotation);

    setQuote(newQuoteObject);
    setStatus("open");

    /* not sure if this will actually work - reading state and setting new state in the same function? Do I need to call setQuote and setStatus with a function that simply returns those values instead?*/
}

  return (
    <div className='App-content'>
      <KevContainer />
      <QuoteContainer quoteProp={quote} />
      <StartButton statusProp={status} clickHandler={handleStartClick} />
      <ItsKevButton statusProp={status} setStatusProp={setStatus} authorProp={quote.author} />
      <NotKevButton statusProp={status} setStatusProp={setStatus} authorProp={quote.author} />
    </div>
  );
}

export default AppContent;