import '../css/App.css';
import newQuote from '../utils/quoteGenerator';

const StartButton = (props) => {

    const handleClick = (event) => {
        console.log(event);
        let quote;
        do {
            quote = newQuote();
        } while (props.currentQuoteProp === quote); 
        props.setQuoteProp(quote);
    }

    return (
        <div>
            <button className="Button Button-orange" onClick={handleClick}>Let's go!</button>
        </div>
    )
}

export default StartButton;

