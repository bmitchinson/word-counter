import { stringIsNotANumber } from './loadFile';

describe('loadFile', () => {
    const strings = [
        ['10234', false],
        ['valid', true],
        ['12valid13', true],
        ['valid1', true],
        ['valid', true],
        ['1', false],
    ];
    describe.each(strings)(`stringIsNotANumber`, (input, expected) => {
        it(`reports ${input} as ${expected ? 'not ' : ''}a number`, () => {
            expect(stringIsNotANumber(input)).toBe(expected);
        });
    });
});
