import { ExcludeSet } from './ExcludeSet';
import { loadfile } from './loadfile';

interface params {
    textFileName: string;
    excludeSet: ExcludeSet;
}

export class WordCounter {
    public contents = new Map<string, number>();
    private excludeSet;

    constructor({ textFileName, excludeSet }: params) {
        this.excludeSet = excludeSet;
        loadfile(textFileName, 'WordCounter', (line) => {
            this.contents.set(line, 0);
        });
    }

    get(word: string) {
        return !this.excludeSet.includes(word) && this.contents.has(word);
    }
}
