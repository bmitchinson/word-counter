import { ExcludeSet } from './ExcludeSet';
import { loadfile } from './loadfile';

interface params {
    textFilePath: string;
    excludeSet: ExcludeSet;
}

export class WordCounter {
    private contents = new Map<string, number>();
    private excludeSet;

    constructor({ textFilePath, excludeSet }: params) {
        this.excludeSet = excludeSet;
        loadfile(textFilePath, 'WordCounter', (line) => {
            this.contents.set(line, 0);
        });
    }

    get(word: string) {
        return !this.excludeSet.includes(word) && this.contents.has(word);
    }
}
