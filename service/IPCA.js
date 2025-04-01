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
            let result = ipca;
            if (initialYear) {
                result = result.year === parseInt(initialYear);
            }

            if (initialMonth) {
                result = result.month === parseInt(initialMonth);
            }

            if (finalYear) {
                result = result.year === parseInt(finalYear);
            }

            if (finalMonth) {
                result = result.month === parseInt(finalMonth);
            }
        });

        const currentValue = filtered.reduce((total, ipca) => total *= (1 + (ipca.ipca/100)), value);
        return currentValue;
    }

    validate(params) {
        for (const param of params) {
            if ((!isNaN(param.value)) || (Number(param.value) < 0)){
                return false;
            }

            if ((Object.keys(param).includes("year")) && (Number(param.value) < 2015 || Number(param.value) > 2023)) {
                return false;
            }
            
            if ((Object.keys(param).includes("month")) && (Number(param.value) < 1 || Number(param.value) > 12)) {
                return false;
            }
        }

        return true;
    }
}

const IPCAService = new IPCA();
export default IPCAService;