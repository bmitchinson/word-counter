import { readFileSync } from 'fs';
import { loadfile } from './loadfile';

export class ExcludeSet {
    public contents = new Set();

    constructor(excludeFile: string) {
        loadfile(excludeFile, 'ExcludeSet', (line) => {
            this.contents.add(line);
        });
    }

    public includes(item: string) {
        return this.contents.has(item);
    }
}
