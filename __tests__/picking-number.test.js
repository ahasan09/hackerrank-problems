const pickingNumbers = require('../picking-number');

describe('pickingNumbers', () => {
    test('sample array with adjacent values', () => {
        expect(pickingNumbers([4, 6, 5, 3, 3, 1])).toBe(3);
    });
    test('best pick covers 1s and 2s', () => {
        expect(pickingNumbers([1, 2, 2, 3, 1, 2])).toBe(5);
    });
    test('all elements the same', () => {
        expect(pickingNumbers([3, 3, 3, 3])).toBe(4);
    });
    test('single element array', () => {
        expect(pickingNumbers([5])).toBe(1);
    });
    test('two adjacent values each with multiple occurrences', () => {
        expect(pickingNumbers([2, 2, 4, 4, 4, 3, 3])).toBe(5);
    });
});
