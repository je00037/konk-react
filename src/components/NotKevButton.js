import '../css/App.css';

const NotKevButton = ({statusProp, setStatusProp, authorProp, pointsProp, setPointsProp}) => {
        
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