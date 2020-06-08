import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


import { createMuiTheme, StylesProvider, ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';


import { MainLayout } from './components/layout/MainLayout/MainLayout';
import { Homepage } from './components/views/Homepage/Homepage';
import { ProductDetails } from './components/views/ProductDetails/ProductDetails';
import { Discover } from './components/views/Discover/Discover';
import { About } from './components/views/About/About';
import { Contact } from './components/views/Contact/Contact';
import { Favourites } from './components/views/Favourites/Favourites';
import { Cart } from './components/views/Cart/Cart';
import { NotFound } from './components/views/NotFound/NotFound';

import './styles/bootstrap.scss';
import './styles/global.scss';

const theme = createMuiTheme({
  palette: {
    primary: { main: '#2B4C6F' },
  },
});

const App = () => (
  <BrowserRouter>
    <StylesProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <MainLayout>
          <Switch>
            <Route exact path='/' component={Homepage} />
            <Route exact path='/product/:id' component={ProductDetails} />
            <Route exact path='/discover' component={Discover} />
            <Route exact path='/about' component={About} />
            <Route exact path='/contact' component={Contact} />
            <Route exact path='/favourites' component={Favourites} />
            <Route exact path='/cart' component={Cart} />
            <Route path='*' component={NotFound} />

            {/*

            products/search/:querry
            sprawdź querystring z "?" najpierw
            reducer załaduj z serwera, załaduj o id, zaladuj wiele.
            osobny reducer dla cart.
            reducer zwiększ ilość, zmniejsz ilość, usuń . (order. )

            */}
          </Switch>
        </MainLayout>
      </ThemeProvider>
    </StylesProvider>
  </BrowserRouter>
);

export { App };
