import { ExcludeSet } from './ExcludeSet';
import { loadFile } from './loadFile';

interface params {
    textFilePath: string;
    excludeSet: ExcludeSet;
}

export class WordCounter {
    public contents = new Map<string, number>();

    constructor({ textFilePath, excludeSet }: params) {
        loadFile(textFilePath, 'WordCounter', (word) => {
            if (excludeSet.allows(word)) {
                const currentCount = this.contents.get(word);
                const updatedCount = currentCount ? currentCount + 1 : 1;
                this.contents.set(word, updatedCount);
            }
        });
    }
}
