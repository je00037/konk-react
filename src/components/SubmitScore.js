import '../css/App.css';
import { useState } from 'react';

const SubmitScore = ({points}) => {
    const [name, setName] = useState("");

    const handleChange = (event) => {
        setName(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        updateLeaderboard();
    }

    const updateLeaderboard = async () => {
        await fetch('/leaderboard', {
            method: 'post',
            body: JSON.stringify({
                "user": name,
                "points": points,
            }),
            headers: {
                'Accept': 'application/json',
                "Content-Type": "application/json",
            },
        });
    }
    
    return (
        <form id="name-submit" onSubmit={handleSubmit}>
            <label className="Quote-text" htmlFor="name">Enter your name to submit your score!</label><br/>
            <input id="name" type="text" value={name} onChange={handleChange}></input><br/>
            <input className="Button Button-blue" id="submit" type="submit" ></input>
        </form>
    )
}


export default SubmitScore;