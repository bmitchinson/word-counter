import { WordCounter } from './WordCounter';

const bookTestTxt = './src/test/text.test.txt';

describe('WordCounter', () => {
    it('Stores contents of a text file as keys in an object', () => {
        const wordCounter = new WordCounter(bookTestTxt);
        ['apple', 'orange', 'peach'].forEach((fruit) => {
            expect(wordCounter.contents.has(fruit)).toBe(true);
        });
    });

    it("Throws an error if the provided text file doesn't exist", () => {
        const badFileName = 'nope.nothing';
        expect(() => new WordCounter(badFileName)).toThrowError(
            new Error(`Invalid file "${badFileName}" provided to WordCounter`),
        );
    });

    // todo: pass in ExcludeList to constructor
});
