const express = require('express');
const app = express();
const mongoose = require('mongoose');
var cors = require('cors')
const scoreModel = require('./scoreModel');

app.use(express.json())
app.use(cors())
app.options('*', cors());

mongoose.connect('mongodb://localhost/scores', { useNewUrlParser: true});
var db = mongoose.connection;
if(!db)
    console.log("Error connecting to db");
else
    console.log("Db connected successfully");



app.get('/scores', async (request, response) => {
    
    const scores = await scoreModel.find().sort( { score: -1 } );

    try {
        response.send(scores);
    } catch (error) {
        response.status(500).send(error);
    }
});

app.post('/scores', async (request, response) => {
    const score = new scoreModel(request.body);
    try {
        await score.save();
        response.send(score);
    } catch (error) {
        response.status(500).send(error);
    }
});

app.listen(process.env.PORT || 3000, () => console.log(`App available on ${process.env.PORT || 3000}`))