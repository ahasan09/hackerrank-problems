const compareTriplets = require('../compare-triplets');

describe('compareTriplets', () => {
    test('alice wins two rounds, bob wins one', () => {
        expect(compareTriplets([17, 28, 30], [99, 16, 8])).toEqual([2, 1]);
    });
    test('one win each with a tie', () => {
        expect(compareTriplets([5, 6, 7], [3, 6, 10])).toEqual([1, 1]);
    });
    test('alice wins all rounds', () => {
        expect(compareTriplets([5, 5, 5], [1, 2, 3])).toEqual([3, 0]);
    });
    test('all rounds tied', () => {
        expect(compareTriplets([3, 3, 3], [3, 3, 3])).toEqual([0, 0]);
    });
    test('bob wins all rounds', () => {
        expect(compareTriplets([1, 2, 3], [5, 5, 5])).toEqual([0, 3]);
    });
});
