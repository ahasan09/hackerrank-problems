const birthday = require('../birthday-chocolate');

describe('birthday', () => {
    test('single element matches target', () => {
        expect(birthday([4], 4, 1)).toBe(1);
    });
    test('two consecutive subsequences match', () => {
        expect(birthday([1, 2, 1, 3, 2], 3, 2)).toBe(2);
    });
    test('no subsequence matches', () => {
        expect(birthday([1, 1, 1, 1, 1, 1], 3, 1)).toBe(0);
    });
    test('uniform array with multiple overlapping windows', () => {
        expect(birthday([1, 1, 1, 1, 1, 1], 3, 3)).toBe(4);
    });
    test('entire array as one window', () => {
        expect(birthday([2, 3], 5, 2)).toBe(1);
    });
});
