import { bookTestTxt, excludeTestTxt } from '../test/text_files/testfilestest';
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
            expect(wordCounter.contents.get(word)).toBeFalsy();
        });
    });

    it('Includes words not contained in the provided ExcludeList', () => {
        const wordCounter = new WordCounter({
            textFilePath: bookTestTxt,
            excludeSet,
        });
        ['apple', 'orange', 'peach'].forEach((fruit) => {
            expect(wordCounter.contents.get(fruit)).toBeTruthy();
        });
    });

    it('Strips punctuation characters from words in the text', () => {
        const wordCounter = new WordCounter({
            textFilePath: bookTestTxt,
            excludeSet,
        });
        ['orange!', 'orange:', 'peach,', 'apple.'].forEach((fruit) => {
            expect(wordCounter.contents.get(fruit)).toBeFalsy();
        });
    });

    it('Sets the key value to the count of words in the text', () => {
        const wordCounter = new WordCounter({
            textFilePath: bookTestTxt,
            excludeSet,
        });
        [
            { fruit: 'orange', expectedCount: 3 },
            { fruit: 'peach', expectedCount: 4 },
            { fruit: 'apple', expectedCount: 4 },
        ].forEach(({ fruit, expectedCount }) => {
            expect(wordCounter.contents.get(fruit)).toEqual(expectedCount);
        });
    });
});
