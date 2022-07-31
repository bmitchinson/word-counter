import { multiply } from './multiplier';

describe('Multiplier', () => {
    test('returns the result of 2 * 3 as 6', () => {
        expect(multiply(2, 3)).toBe(6);
    });
});
