import '../css/App.css';
import newQuote from '../utils/quoteGenerator';

const StartButton = ({currentQuoteProp, setQuoteProp, setAuthorProp, buttonLabelProp}) => {

    const handleClick = (event) => {
        let quoteObject;
        let quoteText;
        let quoteAuthor;
        do {
            quoteObject = newQuote();
            quoteText = quoteObject.quotation;
            quoteAuthor = quoteObject.author;
        } while (currentQuoteProp === quoteText); 
        setQuoteProp(quoteText);
        setAuthorProp(quoteAuthor);
    }
    
    return (
        <div>
            <button className="Button Button-orange" onClick={handleClick}>{buttonLabelProp}</button>
        </div>
    )
}

export default StartButton;

