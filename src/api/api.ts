import express from 'express';
import { excludeListFilePath, mobydickFilePath } from '../text_files/textfiles';
import { ExcludeSet } from './ExcludeSet';
import { WordCounter } from './WordCounter';
import { wordRanker } from './wordRanker';

export const app = express();
export const generateResults = (desiredResults: number) => {
    const ex = new ExcludeSet({ excludeFilePath: excludeListFilePath });
    const w = new WordCounter({
        textFilePath: mobydickFilePath,
        excludeSet: ex,
    });
    return wordRanker({
        words: w.contents,
        desiredResults,
    });
};

app.get('/api/results', (req, res) => {
    const start = Date.now();
    const results = generateResults(100);
    const duration = Date.now() - start;
    const timeString = ((duration / 1000) % 60).toString();
    res.send({ data: results, timeInMs: timeString });
});

app.use(express.static('build'));
