import '../css/App.css';

const ItsKevButton = ({statusProp, setStatusProp, authorProp}) => {
    let buttonText = "It's Kev";
    if (statusProp === "correct-kev") {
        buttonText = "Correct!"
    }

    if (statusProp === "incorrect-kev") {
        buttonText = "Wrong!"
    }

    const handleKevClick = () =>  { 
        if (authorProp === "Kevin McCloud") { 
              setStatusProp("correct-kev");
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