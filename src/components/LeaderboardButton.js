import '../css/App.css';

const LeaderboardButton = ({showHide}) => {
    return (
        <button className="Button Button-blue" onClick={showHide}>Scores</button>
    )
}

export default LeaderboardButton;