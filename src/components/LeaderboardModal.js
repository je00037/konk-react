import '../css/App.css';

const LeaderboardModal = ({setDisplay}) => {
    /* const [leaders, setLeaders] = useState(null);

    const fetchData = async () => {
        const result = await fetch('http://localhost:8000/leaderboard');
        const data = await result.json();
        setLeaders(data);
        console.log(leaders);
    };

    fetchData();
*/
    return (
        <div className="modal display-block">
            <section className="modal-main">
                <h3>Here are the current high scores:</h3>
                <button type="button" className="Button Button-grey" onClick={setDisplay}>Close</button>
            </section>
        </div>
    )
}

export default LeaderboardModal;