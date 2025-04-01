import express from 'express';
const app = express();
import endpoints from './constants.js';
import findAll from './service/IPCA.js';

app.get(endpoints.findAll, (req, res) =>{
    const historicalInflation = findAll();
    res.json(historicalInflation);
});

app.get(endpoints.findById, (req, res) => {
    const id = req.params.id;
    
});

app.listen(8080, () => console.log('Server started'));