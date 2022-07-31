import { excludeTestTxt } from '../test/testfiles';
import { ExcludeSet } from './ExcludeSet';

describe('ExcludeSet', () => {
    it("Throws an error if the provided text file doesn't exist", () => {
        const badFileName = 'nope.nothing';
        expect(
            () => new ExcludeSet({ excludeFilePath: badFileName }),
        ).toThrowError(
            new Error(`Invalid file "${badFileName}" provided to ExcludeSet`),
        );
    });

    describe('#includes', () => {
        it('returns true if contents include the provided value', () => {
            const excludeFile = new ExcludeSet({
                excludeFilePath: excludeTestTxt,
            });
            ['nail', 'hammer'].forEach((text) => {
                expect(excludeFile.includes('nail')).toBe(true);
            });
        });
        it('returns false if contents *does not* include the provided value', () => {
            const excludeFile = new ExcludeSet({
                excludeFilePath: excludeTestTxt,
            });
            expect(excludeFile.includes('brick')).toBe(false);
        });
    });
});
