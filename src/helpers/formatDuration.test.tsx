import formatDuration from './formatDuration';

test('122 min should be showed as 02:02 hours', () => {
    expect(formatDuration(122)).toBe('02:02 hours');
});
