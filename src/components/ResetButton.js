import '../css/App.css';

const ResetButton = ({setPointsProp, setStatusProp, setQuoteProp, placeholderQuoteProp}) => {
    
    const handleClick = () => {
        setPointsProp(0);
        setStatusProp("start");
        setQuoteProp(placeholderQuoteProp);
    }
    
    return (
        <button className="Button Button-grey" onClick={handleClick}>Reset</button>
    )
};



export default ResetButton;