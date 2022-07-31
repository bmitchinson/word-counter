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
        loadfile(textFilePath, 'WordCounter', (word) => {
            const currentCount = this.contents.get(word);
            const updatedCount = currentCount ? currentCount + 1 : 1;
            this.contents.set(word, updatedCount);
        });
    }

    get(word: string) {
        return !this.excludeSet.includes(word) && this.contents.get(word);
    }
}
