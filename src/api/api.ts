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
    const results = generateResults(100);
    res.send({ data: results });
});

app.use(express.static('build'));
