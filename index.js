import express from 'express';
const app = express();
import endpoints from './constants.js';

app.get(endpoints.findAll, (req, res) =>{
    res.json({message: 'hello world'});
});

app.listen(8080, () => console.log('Server started'));