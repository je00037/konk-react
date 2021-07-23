import '../css/App.css';

const LeaderboardModal = ({handleClose}) => {
    return (
        <div className="modal display-block">
            <section className="modal-main">
                <button type="button" onClick={handleClose}>Close</button>
            </section>
        </div>
    )
}

export default LeaderboardModal;