import './App.css';

const StartButton = (props) => {
    return (
        <div>
            <button onClick={() => props.changeTheQuote("This is the new quote")}>Get a quote</button>
        </div>
    )
}

export default StartButton;