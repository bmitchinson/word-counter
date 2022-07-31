import { excludeListFilePath, mobydickFilePath } from '../text_files/textfiles';
import { WordCounter } from '../api/WordCounter';
import { ExcludeSet } from '../api/ExcludeSet';
import { wordRanker } from '../api/wordranker';

const ex = new ExcludeSet({ excludeFilePath: excludeListFilePath });
const w = new WordCounter({
    textFilePath: mobydickFilePath,
    excludeSet: ex,
});
const finalResult = wordRanker({ words: w.contents, desiredResults: 30000 });

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
