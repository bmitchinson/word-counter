import { removePunctuation, stringIsNotANumber } from './loadFile';

describe('loadFile', () => {
    const stringsWithNumbers = [
        { word: '10234', expected: false },
        { word: 'valid', expected: true },
        { word: '12valid13', expected: true },
        { word: 'valid1', expected: true },
        { word: 'valid', expected: true },
        { word: '1', expected: false },
    ];
    describe.each(stringsWithNumbers)(
        `stringIsNotANumber`,
        ({ word, expected }) => {
            it(`reports ${word} as ${expected ? 'not ' : ''}a number`, () => {
                expect(stringIsNotANumber(word)).toBe(expected);
            });
        },
    );

    const stringsWithPunctuation = [
        'te‘“st',
        'test',
        '!test',
        'te.st',
        '—te.!st',
        '%tes:t',
        'te-st?',
        'te,st',
        'tes(t',
        'te)st',
        'test*;',
        'tes&t',
        'test”',
    ];
    describe.each(stringsWithPunctuation)(`removePunctuation`, (badString) => {
        it(`"${badString}" results in "test"`, () => {
            expect(removePunctuation(badString)).toBe('test');
        });
    });
});
