import { readFileSync } from 'fs';

export class ExcludeSet {
    public contents = {};

    constructor(excludeFile: string) {
        try {
            const file = readFileSync(excludeFile, 'utf-8');
            file.split(/\r?\n/).forEach((line) => {
                this.contents[line] = null;
            });
        } catch (e) {
            throw new Error(
                `Invalid file "${excludeFile}" provided to ExcludeMap`,
            );
        }
    }

    public includes(item) {
        return this.contents[item] === null;
    }
}
