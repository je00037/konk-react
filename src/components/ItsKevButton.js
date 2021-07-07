import '../css/App.css';

const ItsKevButton = ({statusProp, setStatusProp, authorProp, pointsProp, setPointsProp}) => {
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
        default :
            console.log("the game status is set to an unexpected value");
    }

    const handleKevClick = () =>  { 
        if (authorProp === "Kevin McCloud") { 
              setStatusProp("correct-kev");
              setPointsProp(pointsProp + 1);
        } else {
              setStatusProp("incorrect-kev");}
    }

    return (
        <div>
            <button id="its-kev-button" className="Button Button-green" onClick={handleKevClick}>{buttonText}</button>
        </div>
    )
}

export default ItsKevButton;