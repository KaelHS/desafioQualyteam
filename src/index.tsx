import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { App } from './App';
import { NonConformity } from './pages/NonConformity';


ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/non-conformity/:id " component={NonConformity} />
    </Switch>
</ BrowserRouter>,
  document.getElementById('root')
);