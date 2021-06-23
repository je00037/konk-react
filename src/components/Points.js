import '../css/App.css';

const Points = ({currentPoints}) => {
    console.log(currentPoints);
    return (
        <div>
            <p id="points-label">Points: <span id="points-number">{currentPoints}</span></p>
        </div>
    )
}

export default Points;