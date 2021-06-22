import '../css/App.css';
import newQuote from '../utils/quoteGenerator';

const StartButton = ({currentQuoteProp, setQuoteProp, setAuthorProp, buttonLabelProp, gameStateProp, setGameStateProp, greenButtonProp, setGreenButtonProp, redButtonProp, setRedButtonProp}) => {

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

        document.getElementById("author-label").textContent = "";

        if (greenButtonProp === "CORRECT!" || "WRONG!") {
            setGreenButtonProp("It's Kev!")  
        };
        if (redButtonProp === "CORRECT!" || "WRONG!") {
            setRedButtonProp("Not Kev!")        
        };

        setGameStateProp("open");
    }
    
/* initially I wanted to read gameStateProp to update the buttonProps but because I'm then setting gameStateProp later in the function I don't think the initial value, before re-setting it, gets acknowledged.
How can I read and set a state value in the same function when using the useState hook?
*/

    return (
        <div>
            <button className="Button Button-orange" onClick={handleClick}>{buttonLabelProp}</button>
        </div>
    )
}

export default StartButton;

