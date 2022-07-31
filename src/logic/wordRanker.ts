interface params {
    words: Map<string, number>;
    desiredResults: number;
}

type MapItem = [string, number];

export const wordRanker = ({ words, desiredResults }: params) => {
    return [...words]
        .sort(([wordA, countA]: MapItem, [wordB, countB]: MapItem) => {
            if (countsAreTied(countA, countB)) {
                return preferAlphaOrderedWord(wordA, wordB);
            } else {
                return preferHigherCount(countA, countB);
            }
        })
        .slice(0, desiredResults);
};

const countsAreTied = (countA: number, countB: number) => countA === countB;

const preferHigherCount = (countA: number, countB: number) =>
    countA > countB ? -1 : 1;

export const preferAlphaOrderedWord = (wordA: string, wordB: string) =>
    wordB > wordA ? -1 : 1;
