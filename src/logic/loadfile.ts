import { readFileSync } from 'fs';

export const loadfile = (
    fileName: string,
    className: string,
    callbackPerLine: Function,
) => {
    try {
        const file = readFileSync(fileName, 'utf-8');
        file.split(/\r?\n/).forEach((line) => {
            callbackPerLine(line);
        });
    } catch (e) {
        throw new Error(`Invalid file "${fileName}" provided to ${className}`);
    }
};
