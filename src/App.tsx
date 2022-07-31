import { h } from 'preact';
import { Route, Router } from 'preact-router';

import { Header } from './components/Header/Header';

// Code-splitting is automated for `routes` directory
import Home from './routes/Home';
import Profile from './routes/Profile';

export const App = () => (
    <div id="app">
        <Header />
        <Router>
            <Route path="/" component={Home} />
            <Route path="/profile/" component={Profile} user="me" />
            <Route path="/profile/:user" component={Profile} />
        </Router>
    </div>
);
