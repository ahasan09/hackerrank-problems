const timeConversion = require('../time-conversion');

describe('timeConversion', () => {
    test('AM time is unchanged (no offset)', () => {
        expect(timeConversion('06:40:03AM')).toBe('06:40:03');
    });
    test('12:00:00AM (midnight) converts to 00:00:00', () => {
        expect(timeConversion('12:00:00AM')).toBe('00:00:00');
    });
    test('12:00:00PM (noon) stays 12:00:00', () => {
        expect(timeConversion('12:00:00PM')).toBe('12:00:00');
    });
    test('PM hour adds 12', () => {
        expect(timeConversion('01:30:00PM')).toBe('13:30:00');
    });
    test('12AM edge case preserves minutes and seconds', () => {
        expect(timeConversion('12:59:59AM')).toBe('00:59:59');
    });
    test('11PM converts correctly', () => {
        expect(timeConversion('11:45:54PM')).toBe('23:45:54');
    });
});
