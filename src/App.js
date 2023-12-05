import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Redirect, Switch } from 'react-router-dom';
import User from './User/Pages/User';
import MainNavigator from './Shared/Components/Navigation/MainNavigator';
 import NewPlace from './Places/Components/NewPlace';
import UserPlaces from './Places/Pages/Places';

const App = () => {
  return (

    <Router>
      <MainNavigator />
      <main>
        <Switch>
          <Route path="/" exact><User /></Route>
          <Route path="/places/new" exact><NewPlace/></Route>
          <Route path="/:userId/places" exact><UserPlaces></UserPlaces></Route>
          <Redirect to='/' />
        </Switch>
      </main>
    </Router>
  )
};

export default App;
