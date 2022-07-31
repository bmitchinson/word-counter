import { ExcludeSet } from './ExcludeSet';

const excludeTestTxt = './src/test/exclude.test.txt';

describe('ExcludeMap', () => {
    it('Stores the contents of a provided text file as an object', () => {
        const excludeMap = new ExcludeSet(excludeTestTxt);
        expect(excludeMap.contents).toStrictEqual({
            nail: null,
            hammer: null,
        });
    });

    it("Throws an error if the provided text file doesn't exist", () => {
        const badFileName = 'nope.nothing';
        expect(() => new ExcludeSet(badFileName)).toThrowError(
            new Error(`Invalid file "${badFileName}" provided to ExcludeMap`),
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
