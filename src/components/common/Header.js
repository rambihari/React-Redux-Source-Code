//This component renders the navigation bar which provides links in order to navigate between diffrent react components
import React from 'react';
import {Link, IndexLink} from 'react-router';

const Header = () => {
  return (
    <nav className="navbar navbar-default">
      <div className="container-fluid">
        <div className="navbar-header">
          <a className="navbar-brand" href="#">Siya Family Day Care</a>
        </div>
        <ul className="nav navbar-nav">
          <li activeClassName="active"><IndexLink to="/">Home Page</IndexLink></li>
          <li activeClassName="active"><Link to="listChild">List Children</Link></li>
          <li activeClassName="active"><Link to="addChild">Add Child</Link></li>
          <li activeClassName="active"><Link to="ProfileSelect">Profiles</Link></li>
        </ul>
      </div>
    </nav>
  );
};


export default Header;
