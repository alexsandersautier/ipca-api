import express from 'express';
const app = express();
import endpoints from './constants.js';
import IPCAService from './service/IPCA.js';

app.get(endpoints.findAll, (req, res) =>{
    const historicalInflation = IPCAService.findAll();
    res.json(historicalInflation);
});

app.get(endpoints.findById, (req, res) => {
    const id = req.params.id;
    const result = IPCAService.findById(id);
    result ? res.json(result) : res.status(404).json({message: "IPCA not found"});
});

app.listen(8080, () => console.log('Server started'));