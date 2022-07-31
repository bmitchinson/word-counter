interface params {
    words: Map<string, number>;
    desiredResults: number;
}

export const wordRanker = ({ words, desiredResults }: params) => {
    return [...words]
        .sort(([wordA, countA], [wordB, countB]) => {
            if (countsAreTied(countA, countB)) {
                return preferAlphaOrderedWord(wordA, wordB);
            } else {
                return preferHigherCount(countA, countB);
            }
        })
        .slice(0, desiredResults);
};

const countsAreTied = (countA, countB) => countA === countB;

const preferHigherCount = (countA, countB) => (countA > countB ? -1 : 1);

export const preferAlphaOrderedWord = (wordA, wordB) =>
    wordB > wordA ? -1 : 1;
