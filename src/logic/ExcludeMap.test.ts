import { ExcludeMap } from './ExcludeMap';

describe('ExcludeMap', () => {
    it('Stores the contents of a provided text file as an object', () => {
        const excludeMap = new ExcludeMap('./src/test/exclude.test.txt');
        expect(excludeMap.contents).toStrictEqual({
            nail: null,
            hammer: null,
        });
    });

    it("Throws an error if the provided text file doesn't exist", () => {
        const badFileName = 'nope.nothing';
        expect(() => new ExcludeMap(badFileName)).toThrowError(
            new Error(`Invalid file "${badFileName}" provided to ExcludeMap`),
        );
    });
});
