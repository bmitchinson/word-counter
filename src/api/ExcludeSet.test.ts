import { excludeTestTxt } from '../test/text_files/testfilestest';
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

    describe('#allows', () => {
        it('returns false if contents include the provided value', () => {
            const excludeFile = new ExcludeSet({
                excludeFilePath: excludeTestTxt,
            });
            ['nail', 'hammer'].forEach((text) => {
                expect(excludeFile.allows(text)).toBe(false);
            });
        });
        it('returns true if contents *does not* include the provided value', () => {
            const excludeFile = new ExcludeSet({
                excludeFilePath: excludeTestTxt,
            });
            expect(excludeFile.allows('brick')).toBe(true);
        });
    });
});
