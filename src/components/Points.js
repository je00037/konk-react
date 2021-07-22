import '../css/App.css';

const Points = ({pointsProp, questionsAskedProp}) => {

    return (
        <div>
            <p id="points-label">Points: <span id="points-number">{pointsProp} / {questionsAskedProp}</span></p>
        </div>
    )
}

export default Points;