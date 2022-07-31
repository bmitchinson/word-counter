import { bookTestTxt, excludeTestTxt } from '../test/testfiles';
import { ExcludeSet } from './ExcludeSet';
import { WordCounter } from './WordCounter';

const excludeSet = new ExcludeSet({ excludeFilePath: excludeTestTxt });

describe('WordCounter', () => {
    it('Stores contents of a text file as keys in an object', () => {
        const wordCounter = new WordCounter({
            textFilePath: bookTestTxt,
            excludeSet,
        });
        ['apple', 'orange', 'peach'].forEach((fruit) => {
            expect(wordCounter.contents.has(fruit)).toBe(true);
        });
    });

    it("Throws an error if the provided text file doesn't exist", () => {
        const badFileName = 'nope.nothing';
        expect(
            () => new WordCounter({ textFilePath: badFileName, excludeSet }),
        ).toThrowError(
            new Error(`Invalid file "${badFileName}" provided to WordCounter`),
        );
    });

    // refactor: describe "#get", remove redundant constructor tests here
    // and in excludeset

    it('Excludes files contained in a provided ExcludeList', () => {
        const wordCounter = new WordCounter({
            textFilePath: bookTestTxt,
            excludeSet,
        });
        ['nail', 'hammer'].forEach((word) => {
            expect(wordCounter.get(word)).toBe(false);
        });
    });
});
