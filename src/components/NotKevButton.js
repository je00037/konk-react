import '../css/App.css';

const NotKevButton = ({statusProp, clickHandler}) => {
        
    let buttonText;

    switch(statusProp) {
        case "start" :
        case "open" :
        case "correct-kev" :
        case "incorrect-kev" :
        case "end" :
            buttonText = "Not Kev";
            break;
        case "correct-notkev" :
            buttonText = "Correct!";
            break;
        case "incorrect-notkev" :
            buttonText = "Wrong!";
            break;
        default :
            console.log("game status is set to an unexpected value");
    }

    return (
        <div>
            <button id="not-kev-button" className="Button Button-red" onClick={clickHandler}>{buttonText}</button>
        </div>
    )
}

export default NotKevButton;