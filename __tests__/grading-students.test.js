const gradingStudents = require('../grading-students');

describe('gradingStudents', () => {
    test('sample grades with mixed rounding', () => {
        expect(gradingStudents([73, 67, 38, 33])).toEqual([75, 67, 40, 33]);
    });
    test('grades below 38 are not rounded', () => {
        expect(gradingStudents([29, 35, 37])).toEqual([29, 35, 37]);
    });
    test('grades at exact multiple of 5 are not rounded', () => {
        expect(gradingStudents([40, 50, 60])).toEqual([40, 50, 60]);
    });
    test('grades with remainder > 2 are rounded up', () => {
        expect(gradingStudents([84, 78, 93])).toEqual([85, 80, 95]);
    });
    test('grade at 38 threshold is rounded correctly', () => {
        expect(gradingStudents([38])).toEqual([40]);
    });
});
