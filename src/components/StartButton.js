import '../css/App.css';

const StartButton = ({statusProp, clickHandler}) => {

    let buttonText = "Go!";
    if (statusProp !== "start") {
            buttonText = "Next";
        }

    return (
        <div>
            <button className="Button Button-orange" onClick={clickHandler}>{buttonText}</button>
        </div>
    )
}

export default StartButton;

