import historicalInflation from '../data/data.js';

export default class IPCA {
    constructor(){}
    
    findAll() {
        return historicalInflation;
    }
    
    findById(id) {
        return historicalInflation.find(ipca => ipca.id === parseInt(id));
    }
}
