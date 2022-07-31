import { h } from 'preact';
import { useEffect, useState } from 'preact/hooks';
import { Counter } from '../../components/Counter/Counter';
import style from './Profile.scss';

interface Props {
    user: string;
}

// Note: `user` comes from the URL, courtesy of our router
const Profile = ({ user }: Props) => {
    const [time, setTime] = useState<number>(Date.now());
    const [count, setCount] = useState<number>(0);

    useEffect(() => {
        const timer = setInterval(() => setTime(Date.now()), 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div class={style.profile}>
            <h1>Profile: {user}</h1>
            <p>This is the user profile for a user named {user}.</p>

            <div>Current time: {new Date(time).toLocaleString()}</div>

            <p>
                <Counter />
            </p>
        </div>
    );
};

export default Profile;
