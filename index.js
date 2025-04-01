import express from 'express';
const app = express();
import  { endpoints, message } from './constants.js';
import IPCAService from './service/IPCA.js';

app.get(endpoints.findAll, (req, res) =>{
    const year = req.query.year;
    let historicalInflation = IPCAService.findAll();
    if (year) {
        historicalInflation = historicalInflation.filter((ipca) => ipca.year === parseInt(year));
    }
    historicalInflation.length > 0 ? res.json(historicalInflation) : res.status(404).json({message: `${year} not found`}); 
});

app.get(endpoints.calculate, (req, res) =>{
    const { value, initialYear, initialMonth, finalYear, finalMonth } = req.query;

    const isValidParams = IPCAService.validate([
        { value }, { initialYear }, { initialMonth }, { finalYear }, { finalMonth }
    ]);

    if (isValidParams) {
        const IPCAS = IPCAService.calculate(value, initialYear, initialMonth, finalYear, finalMonth);
        res.json(IPCAS);
    } else {
        res.status(400).json({message: message.invalidParams});
    }
});

app.get(endpoints.findById, (req, res) => {
    const id = req.params.id;
    const result = IPCAService.findById(id);
    result ? res.json(result) : res.status(404).json({message: "IPCA not found"});
});


app.listen(8080, () => console.log('Server started'));