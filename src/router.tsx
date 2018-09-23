import * as React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from 'react-redux';
import { Login } from './components/login/login';
import { Polling } from './components/polling/polling'
import { store } from './store';

export const AppRouter: React.StatelessComponent<{}> = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/polling" component={Polling} />
          </Switch>
        </div>
      </BrowserRouter>
    </Provider>
  );
}
