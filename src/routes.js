import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Register from './Pages/Register';
import Login from './Pages/Login';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/register' component={Register} />
        <Route path='/login' component={Login} />
      </Switch>
    </BrowserRouter>
  )
}