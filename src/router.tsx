import * as React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from 'react-redux';
import { store } from './store';
import { Admin } from './components';

export const AppRouter: React.StatelessComponent<{}> = () => {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/" component={Admin} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}
