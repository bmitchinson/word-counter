import { h } from 'preact';
import style from './WordList.scss';

interface props {
    words: [string, number][];
}

export const WordList = ({ words }: props) => {
    return (
        <div style={style.wordlist}>
            {words.map(([word, count]: [string, number]) => {
                return (
                    <li>
                        {word}: {count}
                    </li>
                );
            })}
        </div>
    );
};
