import * as React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from 'react-redux';
import { store } from './store';
import { User } from './components';

export const AppRouter: React.StatelessComponent<{}> = () => {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/" component={User} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}
