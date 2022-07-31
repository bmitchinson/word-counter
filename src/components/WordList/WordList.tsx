import { h } from 'preact';
import style from './WordList.scss';

interface props {
    words: [string, number][];
}

export const WordList = ({ words }: props) => {
    return (
        <div class={style.wordlist}>
            {words.map(([word, count]: [string, number], rank) => {
                return <li>{`#${rank + 1}: "${word}" - (${count} Times)`}</li>;
            })}
        </div>
    );
};
