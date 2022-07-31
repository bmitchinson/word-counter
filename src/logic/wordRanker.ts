interface params {
    words: Map<string, number>;
    desiredResults: number;
}

export const wordRanker = ({ words, desiredResults }: params) => {
    return [...words].sort().slice(0, desiredResults);
};
