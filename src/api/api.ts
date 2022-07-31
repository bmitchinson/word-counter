import express from 'express';
import { excludeListFilePath, mobydickFilePath } from '../text_files/textfiles';
import { ExcludeSet } from './ExcludeSet';
import { WordCounter } from './WordCounter';
import { wordRanker } from './wordRanker';

const port = process.env['PORT'] ? parseInt(process.env['PORT']) : 3000;

const generateResults = () => {
    const ex = new ExcludeSet({ excludeFilePath: excludeListFilePath });
    const w = new WordCounter({
        textFilePath: mobydickFilePath,
        excludeSet: ex,
    });
    return wordRanker({
        words: w.contents,
        desiredResults: 100,
    });
};

const results = generateResults();

const app = express();
app.get('/api/results', (req, res) => {
    res.send({ data: results });
});

app.use(express.static('build'));

app.listen(port, function () {
    console.log(`App is listening on port ${port}!`);
});
