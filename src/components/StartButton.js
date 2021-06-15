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
            <button className="Button Button-orange" onClick={() => {props.changeTheQuote(nextQuote)}}>Let's go!</button>
        </div>
    )
}

export default StartButton;

/* why do I need to pass a function which accesses the prop to the click handler, instead of just passing the prop itself?
and can i declare that function somewhere else in either the component or file so i can just pass the function name instead of 
the full function?
*/
