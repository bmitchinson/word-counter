import { ExcludeMap } from './ExcludeMap';

describe('ExcludeMap', () => {
    it.skip('Stores the contents of a provided text file as an object', () => {
        excludeMap = new ExcludeMap('../test/exclude.test.txt');
        expect(excludeMap.contents).toStrictEqual({
            nail: undefined,
            hammer: undefined,
        });
    });

    it.skip("Throws an error if the provided text file doesn't exist", () => {
        expect(() => new ExcludeMap('nope.nothing')).toThrowError(
            new Error('Invalid file provided to ExcludeMap'),
        );
    });
});
