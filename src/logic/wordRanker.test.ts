import { wordRanker } from './wordranker';

describe('wordRanker', () => {
    it('Returns the provided Map<string, number> sorted by number value', () => {
        const words = new Map([
            ['first', '3'],
            ['third', '1'],
            ['second', '2'],
        ]);
        expect(wordRanker({ words, desiredResults: 3 })).toEqual([
            ['first', '3'],
            ['second', '2'],
            ['third', '1'],
        ]);
    });
    it.skip('Returns the provided Map<string, number> sorted by key alphabetical order in the event of a value tie', () => {});
    it.skip('If map entries surpasses provided desiredResults, array of length desiredResults is returned', () => {});
    it.skip('If desiredResults surpasses provided map entries, array of length map entires is returned', () => {});
});
