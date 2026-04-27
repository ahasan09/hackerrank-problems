const countApplesAndOranges = require('../apple-orange');

describe('countApplesAndOranges', () => {
    test('sample: 2 apples and 1 orange land on house', () => {
        expect(countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1, 3], [5, -6])).toEqual([2, 1]);
    });
    test('no fruit lands on the house', () => {
        expect(countApplesAndOranges(7, 11, 5, 15, [-5, -4], [7, 8])).toEqual([0, 0]);
    });
    test('all fruit lands on the house', () => {
        expect(countApplesAndOranges(1, 5, 3, 4, [-1, 0, 1], [-3, -1, 0])).toEqual([3, 3]);
    });
    test('house at right edge of tree distances', () => {
        expect(countApplesAndOranges(2, 2, 2, 2, [0], [0])).toEqual([1, 1]);
    });
});
