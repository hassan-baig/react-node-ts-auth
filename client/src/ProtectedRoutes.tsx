import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Pages/Home/index';
import { propTokenType } from './Models/index';

const ProtectedRoutes = (props: propTokenType) => {
  const { setToken } = props;

  return (
    <Switch>
      <Route
        exact
        path="/"
        render={(props) => <Home setToken={setToken} {...props} />}
      />
    </Switch>
  );
};

export default ProtectedRoutes;
