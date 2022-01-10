import React from 'react';
//Navigation
import { BrowserRouter, Switch, Route } from 'react-router-dom';
//Layout
import Layout from '../layout'
//Pages
import Home from '../pages/home'

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Layout>
          <Route path="/" exact component={Home} />
        </Layout>
      </Switch>
    </BrowserRouter>
  )
}

export default AppRoutes;