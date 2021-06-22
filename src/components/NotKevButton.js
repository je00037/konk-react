import '../css/App.css';

const NotKevButton = ({currentAuthorProp, authorLabelProp, setGameStateProp, redButtonProp, setRedButtonProp}) => {
        
    const handleClick = () => { 
            if (currentAuthorProp === "Kevin McCloud") 
                { setRedButtonProp("WRONG!");
                setGameStateProp("incorrect");
            } else {
                setRedButtonProp("CORRECT!");
                authorLabelProp.textContent = `${currentAuthorProp}`;
                setGameStateProp("correct");
    }
        }

    return (
        <div>
            <button id="not-kev-button" className="Button Button-red" onClick={handleClick}>{redButtonProp}</button>
        </div>
    )
}

export default NotKevButton;