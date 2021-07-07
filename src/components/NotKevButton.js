import '../css/App.css';

const NotKevButton = ({statusProp, setStatusProp, authorProp, pointsProp, setPointsProp}) => {
        
    let buttonText;

    switch(statusProp) {
        case "start" :
        case "open" :
        case "correct-kev" :
        case "incorrect-kev" :
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

    const handleNotKevClick = () =>  { 
        if (authorProp !== "Kevin McCloud") { 
              setStatusProp("correct-notkev");
                setPointsProp(pointsProp + 1);
        } else {
              setStatusProp("incorrect-notkev");}
    }

    return (
        <div>
            <button id="not-kev-button" className="Button Button-red" onClick={handleNotKevClick}>{buttonText}</button>
        </div>
    )
}

export default NotKevButton;