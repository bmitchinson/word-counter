import { h } from 'preact';
import { Route, Router } from 'preact-router';

import { Header } from './components/Header/Header';

// Code-splitting is automated for `routes` directory
import Home from './routes/Home';

export const App = () => (
    <div id="app">
        <Header />
        <Router>
            <Route path="/" component={Home} />
        </Router>
    </div>
);
