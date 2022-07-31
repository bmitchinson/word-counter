import { readFileSync } from 'fs';

export class WordCounter {
    public contents = new Map<string, number>();

    constructor(textFileName: string) {
        // refactor: fileLoader function that calls callback
        // duplicated code between WordCounter and ExcludeSet
        try {
            const file = readFileSync(textFileName, 'utf-8');
            file.split(/\r?\n/).forEach((line) => {
                this.contents.set(line, 0);
            });
        } catch (e) {
            throw new Error(
                `Invalid file "${textFileName}" provided to WordCounter`,
            );
        }
    }
}
