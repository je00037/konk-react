import express from 'express';
import bodyParser from 'body-parser';
import { MongoClient } from 'mongodb';
import path from 'path';

const app = express();

app.use(express.static(path.join(__dirname, '/build')));
app.use(bodyParser.json());

app.get('/leaderboard', async (req, res) => {
    try {
        const client = await MongoClient.connect('mongodb://localhost:27017', { useNewUrlParser: true });
        const db = client.db('konk-data');

        const leaderboardData = await db.collection('leaderboard').find({}).sort({"points": -1}).limit(10).toArray();
        res.set('Access-Control-Allow-Origin', '*');
        res.status(200).json(leaderboardData);
        client.close();
    } catch (error) {
        res.status(500).json({ message: "error!", error });
    }
});

app.post('/leaderboard', async (req, res) => {    
    try {
        const client = await MongoClient.connect('mongodb://localhost:27017', { useNewUrlParser: true });
        const db = client.db('konk-data');
        const { user, points } = req.body;

        await db.collection('leaderboard').insertOne(
            {
                "user": user,
                "points": points,
            }
        );
        res.status(200).json({ message: "success!" });
        client.close();
    } catch (error) {
        res.status(500).json({ message: "error!", error})
    }
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/build/index.html'));
})

app.listen(8000, () => console.log("listening on port 8000"));