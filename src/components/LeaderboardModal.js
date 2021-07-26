import '../css/App.css';
import { useState } from 'react';

const LeaderboardModal = ({handleClose}) => {

    return (
        <div className="modal display-block">
            <section className="modal-main">
                <h3>Here are the current high scores:</h3>
                <button type="button" className="Button Button-grey" onClick={handleClose}>Close</button>
            </section>
        </div>
    )
}

export default LeaderboardModal;