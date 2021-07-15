import '../css/App.css';

const Points = ({pointsProp}) => {

    return (
        <div>
            <p id="points-label">Points: <span id="points-number">{pointsProp}</span></p>
        </div>
    )
}

export default Points;