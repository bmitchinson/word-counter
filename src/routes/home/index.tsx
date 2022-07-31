import { h } from 'preact';
import style from './Home.scss';

const Home = () => (
    <div class={style.home}>
        <div class={style.column}>
            <h1>Home</h1>
            <p>This is the Home component!</p>
        </div>
    </div>
);

export default Home;
