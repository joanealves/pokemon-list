import React from 'react';
import store from './data/store'
import { Provider } from 'react-redux'

import List from './pages/list/List'
import View from './pages/view/View'
import Header from './components/header/Header';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

import { GlobalStyle } from './presentation/styles/global.styles';

export function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Header/>
          <Switch>
            <Route path="/pokemons/list" component={List} />
            <Route
              path="/pokemons/:name"
              component={View}
            />
            <Route path="/" exact>
              <Redirect to="/pokemons/list" />
            </Route>
            <Route path="/pokemon-list" exact>
              <Redirect to="/pokemons/list" />
            </Route>
          </Switch>
        </Router>
        <GlobalStyle />
      </div>
    </Provider>
  );
}

