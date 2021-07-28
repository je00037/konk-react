import '../css/App.css';

const LeaderboardModal = ({setDisplay, leadersData, apiData}) => {
   
/*
    TRY HOLDING THE LEADERBOARD DATA IN APPCONTENT AND PASS TO MODAL AS A PROP, THEN HAVE AN UPDATER FUNCTION
    ALSO IN APPCONTENT WHICH GETS THE LATEST DATA FROM DB AND UPDATES THE LEADERBOARD DATA VARIABLE. THEN PASS THIS
    FUNCTION TO LEADERBOARD BUTTON TO BE TRIGGERED ON CLICK
*/

    return (
        <div className="modal display-block">
            <section className="modal-main">
                <h3>Here are the current high scores:</h3>
                <ul>
                    {apiData.map(item => <li key={item._id}>{item.user}, {item.points}</li>)}
                </ul>
                <button type="button" className="Button Button-grey" onClick={setDisplay}>Close</button>
            </section>
        </div>
    )
}

export default LeaderboardModal;