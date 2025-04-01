const endpoints = {
    findAll: "/historicalIPCA",
    findById: "/historicalIPCA/:id",
    calculate: "/historicoIPCA/calculo",
};

export const message = {
    invalidParams: "Params invalid; \nValue must be bigger than zero; \nYear params must be between 2015 and 2023 \nMonths param must be between 1 and 12"
}

export default endpoints;
