import '../css/App.css';
import newQuote from '../utils/quoteGenerator';

const StartButton = ({currentQuoteProp, setQuoteProp}) => {

    const handleClick = (event) => {
        let quote;
        do {
            quote = newQuote();
        } while (currentQuoteProp === quote); 
        setQuoteProp(quote);
    }

    return (
        <div>
            <button className="Button Button-orange" onClick={handleClick}>Let's go!</button>
        </div>
    )
}

export default StartButton;

