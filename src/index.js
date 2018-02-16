import React from 'react';
import { render } from 'react-dom';
import {
    BrowserRouter,
    Link,
    Switch,
    Route
} from 'react-router-dom';

const Main = () => (
    <main>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/roster" component={Roster} />
            <Route path="/schedule" compononet={Schedule} />
        </Switch>
    </main>
)

const Header = () => (
    <header>
        <nav>
            <ul>
                <li><Link to='/'></Link></li>
                <li><Link to='/roster'></Link></li>
                <li><Link to='/schedule'></Link></li>
            </ul>
        </nav>
    </header>
)

// App and render below

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
