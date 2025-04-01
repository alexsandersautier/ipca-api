import express from 'express';
const app = express();
import endpoints from './constants.js';
import findAll from './service/IPCA.js';

app.get(endpoints.findAll, (req, res) =>{
    const historicalInflation = findAll();
    res.json(historicalInflation);
});

app.listen(8080, () => console.log('Server started'));