import { readFileSync } from 'fs';
import { loadFile } from './loadFile';

interface params {
    excludeFilePath: string;
}

export class ExcludeSet {
    public contents = new Set();

    constructor({ excludeFilePath }: params) {
        loadFile(excludeFilePath, 'ExcludeSet', (line) => {
            this.contents.add(line);
        });
    }

    public allows(item: string) {
        return !this.contents.has(item);
    }
}
