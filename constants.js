export const endpoints = {
    findAll: "/historicalIPCA",
    calculate: "/historicalIPCA/calculate",
    findById: "/historicalIPCA/search/:id",
};

export const message = {
    invalidParams: "Params invalid; \nValue must be bigger than zero; \nYear params must be between 2015 and 2023 \nMonths param must be between 1 and 12"
}
