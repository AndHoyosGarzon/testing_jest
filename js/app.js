// One euro is:
let oneEuroIs = {
    JPY: 156.5, // japan yen
    USD: 1.07, // us dollar
    GBP: 0.79, // british pound
}


const fromDollarToYen = (usd) => {
    return usd * oneEuroIs.JPY;
}

const fromEuroToDollar = (euro) => {
    return euro * oneEuroIs.USD;
}

const fromYenToPound = (jpy) => {
    return jpy * oneEuroIs.GBP;
}


module.exports = { fromDollarToYen, fromEuroToDollar, fromYenToPound };