import newQuote from '../utils/quoteGenerator';
import '../css/App.css';

const StartButton = (props) => {

    let currentQuote = props.currentQuote;
    let nextQuote;
    let regenCounter = 0;

    do {
        nextQuote = newQuote();
        regenCounter++;
        console.log(regenCounter);
    } while (nextQuote === currentQuote); 

    return (
        <div>
            <button onClick={() => {props.changeTheQuote(nextQuote)}}>Get a quote</button>
        </div>
    )
}

export default StartButton;

/* why do I need to pass a function which accesses the prop to the click handler, instead of just passing the prop itself? */
