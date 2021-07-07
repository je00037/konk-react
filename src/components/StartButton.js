import '../css/App.css';

const StartButton = ({statusProp, clickHandler, resetClickHandler}) => {
    let buttonText;
    switch(statusProp) {
        case "start" :
            buttonText = "Go!";
            return (
                <div>
                    <button id="start-button" className="Button Button-orange" onClick={clickHandler}>{buttonText}</button>
                </div>
                );
        case "end" :
            buttonText = "Play Again?";
            return (
                <div>
                    <button id="start-button" className="Button Button-orange" onClick={resetClickHandler}>{buttonText}</button>
                </div>
            );
        default :
            buttonText = "Next";
            return (
                <div>
                    <button id="start-button" className="Button Button-orange" onClick={clickHandler}>{buttonText}</button>
                </div>
            );
    }
}

/*
    let buttonText = "Go!";

    if (statusProp === "end") {
        buttonText = "Play Again?"
        return (
            <div>
                <button id="start-button" className="Button Button-orange" onClick={resetClickHandler}>{buttonText}</button>
            </div>
        )
    } else if (statusProp !== "start") {
        buttonText = "Next";
        return (
            <div>
                <button id="start-button" className="Button Button-orange" onClick={clickHandler}>{buttonText}</button>
            </div>
        )
    } else return (
            <div>
                <button id="start-button" className="Button Button-orange" onClick={clickHandler}>{buttonText}</button>
            </div>
        )
}
*/

export default StartButton;

