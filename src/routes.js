import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/app';
import HomePage from './components/home/HomePage';
import ListChild from './components/daycare/ListChild';
import AddChild from './components/daycare/AddChild';
import Profile from './components/profile/Profile';
import ManageProfilePage from './components/profile/ManageProfilePage';
import ProfileSelect from './components/profile/ProfileSelect';

//Defining all the diffrent routes and the components to which those routes are directed towards
export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage}/>
    <Route path="listChild" component={ListChild}/>
    <Route path="listChild/:id" component={ListChild}/>
    <Route path="profile/:id" component={Profile}/>
    <Route path="addChild" component={AddChild}/>
    <Route path="addChild/:id" component={AddChild}/>
    <Route path="manageProfilePage/:id" component={ManageProfilePage}/>
    <Route path="profileSelect"  component={ProfileSelect}/>
  </Route>
);
