import getCourseDuration from './getCourseDuration';

test('122 min should be showed as 02:02 hours', () => {
    expect(getCourseDuration(122)).toBe('02:02 hours');
});
