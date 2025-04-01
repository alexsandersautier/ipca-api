import historicalInflation from '../data/data.js';

class IPCA {
    constructor(){}
    
    findAll() {
        return historicalInflation;
    }
    
    findById(id) {
        return historicalInflation.find(ipca => ipca.id === parseInt(id));
    }
}

const IPCAService = new IPCA();
export default IPCAService;