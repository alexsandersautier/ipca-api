import historicalInflation from '../data/data.js';

export default function findAll() {
    return historicalInflation;
}

export default function findById(id) {
    return historicalInflation.find(ipca => ipca.id === id);
}