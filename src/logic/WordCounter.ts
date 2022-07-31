import { loadfile } from './loadfile';

export class WordCounter {
    public contents = new Map<string, number>();

    constructor(textFileName: string) {
        loadfile(textFileName, 'WordCounter', (line) => {
            this.contents.set(line, 0);
        });
    }
}
