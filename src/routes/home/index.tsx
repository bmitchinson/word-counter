import { h } from 'preact';
import { WordList } from '../../components/WordList/WordList';
import { MapItem } from '../../api/wordranker';
import style from './Home.scss';
import { useEffect, useState } from 'preact/hooks';

const Home = () => {
    const [results, setResults] = useState([] as MapItem[]);
    const [time, setTime] = useState('');

    const queryResults = () => {
        fetch('/api/results')
            .then((res) => res.json())
            .then(({ data, timeInMs }) => {
                setTime(`Processed words in ${timeInMs}s`);
                setResults(data);
            });
    };

    return (
        <div class={style.home}>
            <div class={style.column}>
                <p>
                    Clicking "Process Text!" will make a call to the API to read
                    in the Moby Dick text file and stop list.
                </p>
                <p>
                    The top 100 results will be displayed, as well as the
                    execution time. See the GitHub repo for more context and
                    technical details: {'   '}
                    <a
                        href="https://github.com/bmitchinson/word-counter"
                        rel="noreferrer noopener"
                        target="_blank"
                    >
                        bmitchinson/word-counter
                    </a>
                </p>
                <p>
                    Thank you for taking time to view the application 🙏 {'\n'}
                    <a
                        href="https://mitchinson.dev"
                        rel="noreferrer noopener"
                        target="_blank"
                    >
                        https://mitchinson.dev
                    </a>
                </p>
                <button onClick={queryResults}>Process Text! 🐋</button>
                {time && <p>{`${time}`}</p>}
            </div>
            <div class={style.column}>
                <WordList words={results} />
            </div>
        </div>
    );
};

export default Home;
