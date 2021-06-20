import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import { CssBaseline, Container } from '@material-ui/core';
import useStyles from './App.style';
import Header from './components/Header.jsx';
import SelectItem from './components/pages/SelectItem.jsx';
import Cart from './components/pages/Cart.jsx';

export default function App() {
  const classes = useStyles();

  return (
    <Container maxWidth='lg'>
      <CssBaseline />
      <Header />
      <main>
        <div className={classes.container}>
          <Switch>
            <Route path='/' exact render={() => <SelectItem />} />
            <Route path='/cart' render={() => <Cart />} />
            <Redirect to='/' />
          </Switch>
        </div>
      </main>
    </Container>
  );
}
