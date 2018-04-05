import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/app';
import HomePage from './components/home/HomePage';
import ListChild from './components/daycare/ListChild';
import AddChild from './components/daycare/AddChild';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage}/>
    <Route path="listChild" component={ListChild}/>
    <Route path="addChild" component={AddChild}/>
  </Route>
);
