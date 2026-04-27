const diagonalDifference = require('../diagonal-difference');

describe('diagonalDifference', () => {
    test('sample 3x3 matrix', () => {
        expect(diagonalDifference([[11, 2, 4], [4, 5, 6], [10, 8, -12]])).toBe(15);
    });
    test('symmetric matrix has zero difference', () => {
        expect(diagonalDifference([[1, 2, 3], [4, 5, 6], [7, 8, 9]])).toBe(0);
    });
    test('1x1 matrix', () => {
        expect(diagonalDifference([[5]])).toBe(0);
    });
    test('2x2 matrix with non-zero difference', () => {
        expect(diagonalDifference([[1, 2], [4, 3]])).toBe(2);
    });
    test('result is always non-negative', () => {
        expect(diagonalDifference([[1, 2], [3, 4]])).toBeGreaterThanOrEqual(0);
    });
});
