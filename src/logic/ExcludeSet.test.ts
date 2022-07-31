import { ExcludeSet } from './ExcludeSet';

const excludeTestTxt = './src/test/exclude.test.txt';

describe('ExcludeSet', () => {
    it('Stores the contents of a provided text file as a set', () => {
        const excludeSet = new ExcludeSet(excludeTestTxt);
        expect(excludeSet.contents).toEqual(new Set(['nail', 'hammer']));
    });

    it("Throws an error if the provided text file doesn't exist", () => {
        const badFileName = 'nope.nothing';
        expect(() => new ExcludeSet(badFileName)).toThrowError(
            new Error(`Invalid file "${badFileName}" provided to ExcludeSet`),
        );
    });

    describe('#includes', () => {
        it('returns true if contents include the provided value', () => {
            const excludeFile = new ExcludeSet(excludeTestTxt);
            expect(excludeFile.includes('nail')).toBe(true);
        });
        it('returns false if contents *does not* include the provided value', () => {
            const excludeFile = new ExcludeSet(excludeTestTxt);
            expect(excludeFile.includes('brick')).toBe(false);
        });
    });
});
