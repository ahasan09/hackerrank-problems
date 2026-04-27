const birthdayCakeCandles = require('../birthday-cake-candle');

describe('birthdayCakeCandles', () => {
    test('sample array returns count of tallest candles', () => {
        expect(birthdayCakeCandles([3, 2, 1, 3, 5, 2, 5, 1, 1, 2, 3, 4, 5, 5])).toBe(4);
    });
    test('all candles the same height', () => {
        expect(birthdayCakeCandles([3, 3, 3, 3])).toBe(4);
    });
    test('only one tallest candle', () => {
        expect(birthdayCakeCandles([1, 2, 3, 4, 5])).toBe(1);
    });
    test('two candles tied for tallest', () => {
        expect(birthdayCakeCandles([4, 4, 1, 3])).toBe(2);
    });
    test('single candle', () => {
        expect(birthdayCakeCandles([7])).toBe(1);
    });
});
