import historicalInflation from '../data/data.js';

class IPCA {
    constructor(){}
    
    findAll() {
        return historicalInflation;
    }
    
    findById(id) {
        return historicalInflation.find(ipca => ipca.id === parseInt(id));
    }

    calculate(value, initialYear, initialMonth, finalYear, finalMonth) {
        const filtered = historicalInflation.filter((ipca) => {
            let result;
            if (parseInt(initialYear) > 0) {
                result = ipca.year === parseInt(initialYear) ? ipca : null;
            }

            if (parseInt(initialMonth) > 0) {
                result = ipca.month === parseInt(initialMonth)? ipca : null;
            }

            if (parseInt(finalYear) > 0) {
                result = ipca.year === parseInt(finalYear)? ipca : null;
            }

            if (parseInt(finalMonth) > 0) {
                result = ipca.month === parseInt(finalMonth)? ipca : null;
            }
            return result;
        });
        const currentValue = filtered.reduce((total, ipca) => total *= (1 + (ipca.ipca/100)), value);
        return currentValue.toFixed(2);
    }

    validate(params) {
        for (const param of params) {
            if ((Object.keys(param).includes("value")) && ((isNaN(param.value)) || (Number(param.value) < 0))){
                return false;
            }
            if ((Object.keys(param).includes("Year")) && (Number(param.value) < 2015 || Number(param.value) > 2023)) {
                return false;
            }
            
            if ((Object.keys(param).includes("Month")) && (Number(param.value) < 1 || Number(param.value) > 12)) {
                return false;
            }
        }

        return true;
    }
}

const IPCAService = new IPCA();
export default IPCAService;