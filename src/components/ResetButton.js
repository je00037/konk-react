import '../css/App.css';

const ResetButton = ({clickHandler}) => {
    return (
        <button className="Button Button-grey" onClick={clickHandler}>Reset</button>
    )
};

export default ResetButton;