import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Navbar, ProductList, Details, Cart, Default } from './components';

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={ProductList} />
        <Route path="/details" component={Details} />
        <Route path="/Cart" component={Cart} />
        <Route path="/default" component={Default} />
      </Switch>
    </>
  );
}

export default App;
