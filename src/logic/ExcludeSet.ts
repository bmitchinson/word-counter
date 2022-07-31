import { readFileSync } from 'fs';
import { loadfile } from './loadfile';

interface params {
    excludeFilePath: string;
}

export class ExcludeSet {
    public contents = new Set();

    constructor({ excludeFilePath }: params) {
        loadfile(excludeFilePath, 'ExcludeSet', (line) => {
            this.contents.add(line);
        });
    }

    public includes(item: string) {
        return this.contents.has(item);
    }
}
