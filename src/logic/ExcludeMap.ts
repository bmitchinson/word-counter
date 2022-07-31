import { readFileSync } from 'fs';

export class ExcludeMap {
    constructor(excludeFile: string) {
        try {
            const file = readFileSync(excludeFile, 'utf-8');
        } catch (e) {
            throw new Error('Invalid file provided to ExcludeMap');
        }
    }

    public contents = {
        nail: undefined,
        hammer: undefined,
    };
}
