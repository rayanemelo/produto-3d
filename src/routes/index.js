import React from 'react';
//Navigation
import { BrowserRouter, Switch, Route } from 'react-router-dom';
//Layout
import Layout from '../layout'
//Pages
import Home from '../pages/home'
import Products from '../pages/products'
import Contact from '../pages/contact'

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Layout>
          <Route path="/" exact component={Home} />
          <Route path="/produtos" exact component={Products} />
          <Route path="/contato" exact component={Contact} />
        </Layout>
      </Switch>
    </BrowserRouter>
  )
}

export default AppRoutes;