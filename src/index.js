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

const PlayerAPI = {
    players: [
        { number: 1, name: "Ben Blocker", position: "G" },
        { number: 2, name: "Dave Defender", position: "D" },
        { number: 3, name: "Sam Sweeper", position: "D" },
        { number: 4, name: "Matt Midfielder", position: "M" },
        { number: 5, name: "William Winger", position: "M" },
        { number: 6, name: "Fillipe Forward", position: "F" }
    ],
    all: function() { return this.players },
    get: function(id) {
        const isPlayer = p => p.number === id
        return this.players.find(isPlayer)
    }
}

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
