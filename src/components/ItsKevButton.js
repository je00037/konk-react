import '../css/App.css';

const ItsKevButton = ({currentAuthorProp, authorLabelProp, setGameStateProp, greenButtonProp, setGreenButtonProp}) => {
    
    const handleClick = () =>  { 
        if (currentAuthorProp === "Kevin McCloud") { 
                setGreenButtonProp("CORRECT!");
                setGameStateProp("correct");
        } else {
                setGreenButtonProp("WRONG!");
                authorLabelProp.textContent = `${currentAuthorProp}`;
                setGameStateProp("incorrect");}
}

    return (
        <div>
            <button id="its-kev-button" className="Button Button-green" onClick={handleClick}>{greenButtonProp}</button>
        </div>
    )
}

export default ItsKevButton;