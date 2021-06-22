import '../css/App.css';

const NotKevButton = ({statusProp, setStatusProp, authorProp}) => {
        
    let buttonText = "Not Kev";

    if (statusProp === "correct-notkev") {
        buttonText = "Correct!"
    }

    if (statusProp === "incorrect-notkev") {
        buttonText = "Wrong!"
    }

    const handleNotKevClick = () =>  { 
        if (authorProp !== "Kevin McCloud") { 
              setStatusProp("correct-notkev");
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