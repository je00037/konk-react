import '../css/App.css';
import { useState } from 'react';

const SubmitScore = ({points}) => {
    const [name, setName] = useState("");
    const [submit, setSubmit] = useState(false);

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
        }).then(response => { 
            if (response.status === 200) {
               setSubmit(true)}}
        );
    }
    
    return (
        <form id="name-submit" onSubmit={handleSubmit}>
            <label className="Quote-text" htmlFor="name">{ !submit ? "Enter your name to submit your score!" : "Submitted!" }</label><br/>
            { !submit ? <input id="name" type="text" value={name} onChange={handleChange}></input> : null }
            { !submit ? <input className="Button Button-blue" id="submit" type="submit" ></input> : null }
        </form>
    )
}


export default SubmitScore;