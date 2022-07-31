import { readFileSync } from 'fs';
import { loadFile } from './loadFile';

interface params {
    excludeFilePath: string;
}

export class ExcludeSet {
    public contents = new Set();

    constructor({ excludeFilePath }: params) {
        loadFile(excludeFilePath, 'ExcludeSet', (word: string) => {
            this.contents.add(word);
        });
    }

    public allows(item: string) {
        return !this.contents.has(item);
    }
}
