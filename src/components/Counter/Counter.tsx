import { Fragment, h } from 'preact';
import { useState } from 'preact/hooks';
import style from './counter.scss';

export const Counter = () => {
    const [count, setCount] = useState<number>(0);

    return (
        <Fragment>
            <div class={style['counter-row']}>
                <button
                    onClick={() => setCount((count) => count + 1)}
                    data-testid="increment-btn"
                >
                    Click Me
                </button>
                <p>Clicked {count} times</p>
            </div>
            <button onClick={() => setCount(() => 0)}>Reset</button>
        </Fragment>
    );
};
