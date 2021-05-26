import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route, RouteComponentProps } from 'react-router-dom'
import { routes } from './services/routes';
import { GlobalStyle } from './styles/global';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      { routes.map( (route, index) => {
          return(
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            render={ ( props : RouteComponentProps<any>) => (
              <route.component
                name={route.name}
                { ...props }
                { ...route.props }
              />
            )}
            />
          ) 
            })}
    </Switch>
    <GlobalStyle />
</BrowserRouter>,
  document.getElementById('root')
);