import React from 'react';
import { render } from 'react-dom';
import {
    BrowserRouter,
    Link,
    Switch,
    Route
} from 'react-router-dom';

const App = () => (
    <div>
        <Header />
        <Main />
    </div>
);

render((
    <BrowserRouter>
        <App />
    </BrowserRouter>
), document.getElementById('root'));
