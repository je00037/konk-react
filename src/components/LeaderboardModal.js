import '../css/App.css';

const LeaderboardModal = ({setDisplay, apiData}) => {
   
/*
    TRY HOLDING THE LEADERBOARD DATA IN APPCONTENT AND PASS TO MODAL AS A PROP, THEN HAVE AN UPDATER FUNCTION
    ALSO IN APPCONTENT WHICH GETS THE LATEST DATA FROM DB AND UPDATES THE LEADERBOARD DATA VARIABLE. THEN PASS THIS
    FUNCTION TO LEADERBOARD BUTTON TO BE TRIGGERED ON CLICK
*/

    return (
        <div className="modal display-block">
            <section className="modal-main">
                <p className="modal-heading">Here are the current high scores:</p>
                <ol className="leaders-list">
                    {apiData.map((item, index) => index === 0 ? <li className="modal-list-item-leader" key={item._id}>{item.user}, {item.points}</li> : <li className="modal-list-item" key={item._id}>{item.user}, {item.points}</li>)}
                </ol>
                <button type="button" className="Button Button-grey" onClick={setDisplay}>Close</button>
            </section>
        </div>
    )
}

export default LeaderboardModal;