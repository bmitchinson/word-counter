import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './Header.scss';

export const Header = () => (
    <header class={style.header}>
        <h1 id="title">Word Counter Submission</h1>
        <h1 id="link">
            <a
                href="https://mitchinson.dev"
                rel="noreferrer noopener"
                target="_blank"
            >
                Ben Mitchinson
            </a>
        </h1>
    </header>
);
