import express from 'express';
import bodyParser from 'body-parser';
import { MongoClient } from 'mongodb';

const app = express();

app.use(bodyParser.json());

app.get('/leaderboard', async (req, res) => {
    try {
        const client = await MongoClient.connect('mongodb://localhost:27017', { useNewUrlParser: true });
        const db = client.db('konk-data');

        const leaderboardData = await db.collection('leaderboard').find({}).toArray();
        res.set('Access-Control-Allow-Origin', '*');
        res.status(200).json(leaderboardData);
        client.close();
    } catch (error) {
        res.status(500).json({ message: "error!", error });
    }
});

app.listen(8000, () => console.log("listening on port 8000"));