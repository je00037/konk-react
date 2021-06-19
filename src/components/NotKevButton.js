import '../css/App.css';

const NotKevButton = ({currentAuthorProp, authorLabelProp}) => {
        
    const handleClick = () => { 
            if (currentAuthorProp === "Kevin McCloud") 
                { document.getElementById("not-kev-button").textContent = "WRONG!";
            } else {
                document.getElementById("not-kev-button").textContent = "CORRECT!";
                authorLabelProp.textContent = `${currentAuthorProp}`
    }
        }

    return (
        <div>
            <button id="not-kev-button" className="Button Button-red" onClick={handleClick}>Not Kev!</button>
        </div>
    )
}

export default NotKevButton;