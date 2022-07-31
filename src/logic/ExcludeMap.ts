import { readFileSync } from 'fs';

export class ExcludeMap {
    public contents = {};

    constructor(excludeFile: string) {
        try {
            const file = readFileSync(excludeFile, 'utf-8');
            file.split(/\r?\n/).forEach((line) => {
                this.contents[line] = undefined;
            });
        } catch (e) {
            // refactor: include attempted file in error message
            throw new Error('Invalid file provided to ExcludeMap');
        }
    }
}
