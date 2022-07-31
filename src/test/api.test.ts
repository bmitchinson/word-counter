import { generateResults } from '../api/api';

const finalResult = generateResults(30000);

const correctCounts = [
    { word: 'tucked', count: 3 },
    { word: 'accounts', count: 9 },
    { word: 'joppa', count: 8 },
];

describe.each(correctCounts)(
    'e2e tests to confirm manually confirmed counts from the Moby Dick text',
    ({ word, count }) => {
        it(`Confirms that "${word}" is found ${count} times`, () => {
            expect(
                finalResult.find((ele) => {
                    return ele[0] === word && ele[1] === count;
                }),
            ).toBeTruthy();
        });
    },
);
