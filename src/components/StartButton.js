import '../css/App.css';

const StartButton = ({statusProp, clickHandler, resetClickHandler}) => {
    let buttonText;
    let handleClick;
    switch(statusProp) {
        case "start" :
            buttonText = "Go!";
            handleClick = clickHandler;
            break;
        case "end" :
            buttonText = "Play Again?";
            handleClick = resetClickHandler;
            break;
        default :
            buttonText = "Next";
            handleClick = clickHandler;
    }

    return (
        <div>
            <button id="start-button" className="Button Button-orange" onClick={handleClick}>{buttonText}</button>
        </div>
    );
}

export default StartButton;

