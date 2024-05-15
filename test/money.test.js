const {fromDollarToYen, fromEuroToDollar, fromYenToPound} = require('../js/app')


test('2 USD convertidos a JPY equivalen a = 313 JPY', () => {
    let result = fromDollarToYen(2);
    expect(result).toBe(313)
})

test('2 Euros convertidos a USD equivalen a = 2.14 USD', () => {
    let result = fromEuroToDollar(2);
    expect(result).toBe(2.14)
})

test('5 JPY convertidos a GBP equivalen a = 3.95 GBP', () => {
    let result = fromYenToPound(5);
    expect(result).toBe(3.95)
})