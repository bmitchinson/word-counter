import { readFileSync } from 'fs';

export const loadfile = (
    fileName: string,
    className: string,
    callbackPerWord: Function,
) => {
    try {
        const file = readFileSync(fileName, 'utf-8');
        file.split(/\s+/).forEach((word) => {
            const punctuationRemoved = word.replace(/[!.?:,]/, '');
            callbackPerWord(punctuationRemoved);
        });
    } catch (e) {
        throw new Error(`Invalid file "${fileName}" provided to ${className}`);
    }
};
