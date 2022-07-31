import { preferAlphaOrderedWord, wordRanker } from './wordranker';

describe('wordRanker', () => {
    it('Returns the provided Map<string, number> sorted by number value', () => {
        const words = new Map([
            ['z - first', 3],
            ['x - third', 1],
            ['y - second', 2],
        ]);
        expect(wordRanker({ words, desiredResults: 3 })).toEqual([
            ['z - first', 3],
            ['y - second', 2],
            ['x - third', 1],
        ]);
    });

    it('Returns the provided Map<string, number> sorted by key alphabetical order in the event of a value tie', () => {
        const words = new Map([
            ['a - six', 1],
            ['w - four', 1],
            ['z - first', 3],
            ['b - five', 1],
            ['x - second', 2],
            ['y - third', 1],
        ]);
        expect(wordRanker({ words, desiredResults: 6 })).toEqual([
            ['z - first', 3],
            ['x - second', 2],
            ['a - six', 1],
            ['b - five', 1],
            ['w - four', 1],
            ['y - third', 1],
        ]);
    });

    it('If map entries surpasses provided desiredResults, array of length desiredResults is returned', () => {
        const words = new Map([
            ['first', 3],
            ['second', 2],
            ['third', 1],
        ]);
        expect(wordRanker({ words, desiredResults: 2 })).toEqual([
            ['first', 3],
            ['second', 2],
        ]);
    });

    it('If desiredResults surpasses provided map entries, array of length map entires is returned', () => {
        const words = new Map([
            ['first', 3],
            ['second', 2],
            ['third', 1],
        ]);
        expect(wordRanker({ words, desiredResults: 5 })).toEqual([
            ['first', 3],
            ['second', 2],
            ['third', 1],
        ]);
    });

    const alphaOrderAssertions = [
        { preferredWord: 'batman', lesserWord: 'a', expected: 1 },
        { preferredWord: 'a', lesserWord: 'batman', expected: -1 },
        { preferredWord: 'cross', lesserWord: 'pineapple', expected: -1 },
    ];
    describe.each(alphaOrderAssertions)(
        'preferAlphaOrderedWord',
        ({ preferredWord, lesserWord, expected }) => {
            it(`Sorts ${preferredWord} and ${lesserWord} alphabetically`, () => {
                expect(preferAlphaOrderedWord(preferredWord, lesserWord)).toBe(
                    expected,
                );
            });
        },
    );
});
