import { ExcludeSet } from './ExcludeSet';
import { loadfile } from './loadfile';

interface params {
    textFilePath: string;
    excludeSet: ExcludeSet;
}

export class WordCounter {
    private contents = new Map<string, number>();

    constructor({ textFilePath, excludeSet }: params) {
        loadfile(textFilePath, 'WordCounter', (word) => {
            if (excludeSet.allows(word)) {
                const currentCount = this.contents.get(word);
                const updatedCount = currentCount ? currentCount + 1 : 1;
                this.contents.set(word, updatedCount);
            }
        });
    }

    get(word: string) {
        return this.contents.get(word);
    }
}
