import newQuote from './quoteGenerator';
import './App.css';

const StartButton = (props) => {
    return (
        <div>
            <button onClick={() => props.changeTheQuote({newQuote})}>Get a quote</button>
        </div>
    )
}

export default StartButton;