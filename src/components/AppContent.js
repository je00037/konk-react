import "../css/App.css";
import React, { useState, useEffect } from "react";
import KevContainer from "./KevContainer.js";
import QuoteContainer from "./QuoteContainer.js";
import StartButton from "./StartButton.js";
import ItsKevButton from "./ItsKevButton.js";
import NotKevButton from "./NotKevButton.js";
import Points from "./Points.js";
import ResetButton from "./ResetButton.js";
import LeaderboardButton from "./LeaderboardButton.js";
import LeaderboardModal from "./LeaderboardModal.js";
import SubmitScore from "./SubmitScore.js";
import { newQuote, quotes } from "../utils/quoteGenerator";

const placeholderQuote = {
  author: "Placeholder",
  quotation: "Hit the button to start.",
};
let usedQuotes = [];
let questionsAsked = 0;
let leaderboardData;

const fetchData = async () => {
  const result = await fetch("http://localhost:8000/leaderboard");
  leaderboardData = await result.json();
};

const AppContent = () => {
  const [quote, setQuote] = useState(placeholderQuote);
  const [status, setStatus] = useState("start");
  const [points, setPoints] = useState(0);
  const [scoresModalShow, setScoresModalShow] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  if (status === "reset") {
    usedQuotes = [];
    setQuote(placeholderQuote);
    setPoints(0);
    setStatus("open");
  }

  const handleStartClick = () => {
    if (usedQuotes.length === quotes.length - 1) {
      setStatus("end");
    } else {
      let newQuoteObject;
      do {
        newQuoteObject = newQuote();
      } while (usedQuotes.includes(newQuoteObject.id));
      usedQuotes.push(newQuoteObject.id);
      setQuote(newQuoteObject);
      questionsAsked += 1;
      setStatus("open");
    }
  };

  const handleResetClick = () => {
    questionsAsked = 0;
    setStatus("reset");
  };

  const handleGuessClick = (buttonPressed) => {
    if (buttonPressed === "kev") {
      if (quote.author === "Kevin McCloud") {
        setStatus("correct-kev");
        setPoints((points) => {
          return points + 1;
        });
      } else {
        setStatus("incorrect-kev");
      }
    }

    if (buttonPressed === "not-kev") {
      if (quote.author !== "Kevin McCloud") {
        setStatus("correct-notkev");
        setPoints((points) => {
          return points + 1;
        });
      } else {
        setStatus("incorrect-notkev");
      }
    }
  };

  const handleScoresModal = async () => {
    await fetchData();
    setScoresModalShow(!scoresModalShow);
  };

  return (
    <>
      {scoresModalShow ? (
        <LeaderboardModal
          setDisplay={handleScoresModal}
          apiData={leaderboardData}
        />
      ) : null}
      <div className="Points-row">
        <Points pointsProp={points} questionsAskedProp={questionsAsked} />
        <ResetButton clickHandler={handleResetClick} />
        <LeaderboardButton showHide={handleScoresModal} />
      </div>
      <div className="App-content">
        <div className="Kev-container">
          <KevContainer />
        </div>
        <div className="Quote-container">
          <QuoteContainer
            statusProp={status}
            quoteProp={quote}
            pointsProp={points}
          />
          {status === "end" ? <SubmitScore points={points} /> : null}
          <StartButton
            statusProp={status}
            clickHandler={handleStartClick}
            resetClickHandler={handleResetClick}
          />
          <ItsKevButton statusProp={status} clickHandler={handleGuessClick} />
          <NotKevButton statusProp={status} clickHandler={handleGuessClick} />
        </div>
      </div>
    </>
  );
};

export default AppContent;
