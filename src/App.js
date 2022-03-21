import React from 'react';
import List from './pages/list/List'
import View from './pages/view/View'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from 'react-router-dom';

export function App() {
  return (
    <div className="App">
       <Router>
          <h1>
            <Link to="/pokemons/list">Pokemon list</Link>
          </h1>        
          <Switch>
            <Route path="/pokemons/list" component={List} />
            <Route
              path="/pokemons/:name"
              component={View}
            />
            <Route path="/" exact>
              <Redirect to="/pokemons/list" />
            </Route>
          </Switch>
        </Router>
    </div>
  );
}

