const miniMaxSum = require('../mini-max-sum');

describe('miniMaxSum', () => {
    test('consecutive numbers 1 to 5', () => {
        expect(miniMaxSum([1, 2, 3, 4, 5])).toBe('10 14');
    });
    test('all elements equal', () => {
        expect(miniMaxSum([5, 5, 5, 5, 5])).toBe('20 20');
    });
    test('odd consecutive numbers', () => {
        expect(miniMaxSum([1, 3, 5, 7, 9])).toBe('16 24');
    });
    test('returns string with min and max separated by space', () => {
        const result = miniMaxSum([1, 2, 3, 4, 5]);
        expect(typeof result).toBe('string');
        expect(result.split(' ')).toHaveLength(2);
    });
});
