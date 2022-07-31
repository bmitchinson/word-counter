import { removePunctuation, stringIsNotANumber } from './loadFile';

describe('loadFile', () => {
    const stringsWithNumbers = [
        ['10234', false],
        ['valid', true],
        ['12valid13', true],
        ['valid1', true],
        ['valid', true],
        ['1', false],
    ];
    describe.each(stringsWithNumbers)(
        `stringIsNotANumber`,
        (input, expected) => {
            it(`reports ${input} as ${expected ? 'not ' : ''}a number`, () => {
                expect(stringIsNotANumber(input)).toBe(expected);
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
        'test’”',
    ];
    describe.each(stringsWithPunctuation)(`removePunctuation`, (badString) => {
        it(`${badString} results in "test"`, () => {
            expect(removePunctuation(badString)).toBe('test');
        });
    });
});
