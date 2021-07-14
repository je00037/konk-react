import '../css/App.css';

const ItsKevButton = ({statusProp, clickHandler}) => {
    let buttonText;

    switch(statusProp) {
        case "start" :
        case "open" :
        case "correct-notkev" :
        case "incorrect-notkev" :
            buttonText = "It's Kev";
            break;
        case "correct-kev" : 
            buttonText = "Correct!";
            break;
        case "incorrect-kev" :
            buttonText = "Wrong!";
            break;
        case "end" :
            return null;
        default :
            console.log("the game status is set to an unexpected value");
    }

    return (
        <div>
            <button id="its-kev-button" className="Button Button-green" onClick={() => clickHandler("kev")}>{buttonText}</button>
        </div>
    )
}

export default ItsKevButton;