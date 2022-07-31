import { readFileSync } from 'fs';

export const loadFile = (
    fileName: string,
    className: string,
    callbackPerWord: Function,
) => {
    try {
        const file = readFileSync(fileName, 'utf-8');
        file.split(/\s+/).forEach((word) => {
            const punctuationRemoved = removePunctuation(word);
            if (stringIsNotANumber(punctuationRemoved))
                callbackPerWord(punctuationRemoved);
        });
    } catch (e) {
        throw new Error(`Invalid file "${fileName}" provided to ${className}`);
    }
};

export const stringIsNotANumber = (word: string) => {
    return !word.match(/^[0-9]+$/);
};

export const removePunctuation = (word: string) => {
    const symbolsToRemove = /[!.\-\—\%?:,\(\)\$&*;‘\“\’”]/g;
    return word.replace(symbolsToRemove, '');
};
