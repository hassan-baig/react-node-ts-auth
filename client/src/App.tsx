import * as React from 'react';
import Login from './Pages/Login';
import { Switch, Route, Redirect } from 'react-router-dom';
import ProtectedRoutes from './ProtectedRoutes';
import { getSession } from './_helpers/auth';

const { useEffect, useState } = React;

function App() {
  const [token, setToken] = useState('');
  const session = getSession();

  useEffect(() => {
    setToken(getSession()?.token);
  }, [session]);

  return (
    <Switch>
      {!token ? (
        <Route
          exact
          path="/login"
          render={(props) => <Login setToken={setToken} {...props} />}
        />
      ) : (
        <Redirect to="/" from="/login" />
      )}

      {!token ? (
        <Redirect to="/login" from="/" />
      ) : (
        <ProtectedRoutes setToken={setToken} />
      )}
    </Switch>
  );
}

export default App;
