import express from 'express';
const app = express();
import endpoints, { message } from './constants.js';
import IPCAService from './service/IPCA.js';

app.get(endpoints.findAll, (req, res) =>{
    const year = req.query.year;
    let historicalInflation = IPCAService.findAll();
    if (year) {
        historicalInflation = historicalInflation.filter((ipca) => ipca.year === parseInt(year));
    }
    historicalInflation.length > 0 ? res.json(historicalInflation) : res.status(404).json({message: "Params invalid"}); 
});

app.get(endpoints.findById, (req, res) => {
    const id = req.params.id;
    const result = IPCAService.findById(id);
    result ? res.json(result) : res.status(404).json({message: "IPCA not found"});
});

app.get(endpoints.calculate, (req, res) =>{
    const value = req.query.value;
    const initialYear = req.query.initialYear;
    const initialMonth = req.query.initialMonth;
    const finalYear = req.query.finalYear;
    const finalMonth = req.query.finalMonth;

    const isValidParams = IPCAService.validate([{value: value}, {initialYear: initialYear}, {initialMonth: initialMonth}, {finalYear: finalYear}, {finalMonth: finalMonth}]);

    if (isValidParams) {
        const IPCAS = IPCAService.calculate(value, initialYear, initialMonth, finalYear, finalMonth);
        res.json(IPCAS);
    } else {
        res.json(400).json(message.invalidParams);
    }
});

app.listen(8080, () => console.log('Server started'));