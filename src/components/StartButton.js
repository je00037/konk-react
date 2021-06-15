import newQuote from '../utils/quoteGenerator';
import '../css/App.css';

const StartButton = (props) => {
    return (
        <div>
            <button onClick={() => props.changeTheQuote(newQuote)}>Get a quote</button>
        </div>
    )
}

export default StartButton;
