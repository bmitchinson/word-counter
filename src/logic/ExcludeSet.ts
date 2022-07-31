import { readFileSync } from 'fs';

export class ExcludeSet {
    public contents = new Set();

    constructor(excludeFile: string) {
        try {
            const file = readFileSync(excludeFile, 'utf-8');
            file.split(/\r?\n/).forEach((line) => {
                this.contents.add(line);
            });
        } catch (e) {
            throw new Error(
                `Invalid file "${excludeFile}" provided to ExcludeSet`,
            );
        }
    }

    public includes(item) {
        return this.contents.has(item);
    }
}
