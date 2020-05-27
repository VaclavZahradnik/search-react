import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Top from './top.js';
import Home from './routes/home.js';
import Search from './routes/search.js';
import Cache from './routes/cache.js';
import About from './routes/about.js';

function App() {
  return (
    <Router>
      <Top />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/search/:text?">
          <Search />
        </Route>
        <Route path="/cache/:url">
          <Cache />
        </Route>
        <Route path="/about">
          <About />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
