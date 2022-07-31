import { bookTestTxt, excludeTestTxt } from '../test/testfiles';
import { ExcludeSet } from './ExcludeSet';
import { WordCounter } from './WordCounter';

const excludeSet = new ExcludeSet({ excludeFilePath: excludeTestTxt });

describe('WordCounter', () => {
    it("Throws an error if the provided text file doesn't exist", () => {
        const badFileName = 'nope.nothing';
        expect(
            () => new WordCounter({ textFilePath: badFileName, excludeSet }),
        ).toThrowError(
            new Error(`Invalid file "${badFileName}" provided to WordCounter`),
        );
    });

    it('Excludes words contained in the provided ExcludeList', () => {
        const wordCounter = new WordCounter({
            textFilePath: bookTestTxt,
            excludeSet,
        });
        ['nail', 'hammer'].forEach((word) => {
            expect(wordCounter.get(word)).toBe(false);
        });
    });

    it('Includes words not contained in the provided ExcludeList', () => {
        const wordCounter = new WordCounter({
            textFilePath: bookTestTxt,
            excludeSet,
        });
        ['apple', 'orange', 'peach'].forEach((fruit) => {
            expect(wordCounter.contents.has(fruit)).toBe(true);
        });
    });

    it('Strips punctuation characters from words in the text', () => {
        const wordCounter = new WordCounter({
            textFilePath: bookTestTxt,
            excludeSet,
        });
        ['orange!', 'orange:', 'peach,', 'apple.'].forEach((fruit) => {
            // refactor: to use #get + isTruthy. Make structure private.
            expect(wordCounter.contents.has(fruit)).toBe(false);
        });
    });

    it('Sets the key value to the count of words in the text', () => {
        const wordCounter = new WordCounter({
            textFilePath: bookTestTxt,
            excludeSet,
        });
        [
            ['orange', 3],
            ['peach', 4],
            ['apple', 4],
        ].forEach(([fruit, expectedCount]) => {
            expect(wordCounter.get(fruit)).toEqual(expectedCount);
        });
    });
});
