import '../css/App.css';

const ItsKevButton = ({currentAuthorProp, authorLabelProp}) => {
    
    const handleClick = () =>  { 
        if (currentAuthorProp === "Kevin McCloud") { 
                document.getElementById("its-kev-button").textContent = "CORRECT!"
    } else {
    document.getElementById("its-kev-button").textContent = "WRONG!";
    authorLabelProp.textContent = `${currentAuthorProp}`
}
}

    return (
        <div>
            <button id="its-kev-button" className="Button Button-green" onClick={handleClick}>It's Kev!</button>
        </div>
    )
}

export default ItsKevButton;