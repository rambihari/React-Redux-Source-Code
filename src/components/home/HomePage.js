import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component {
  render() {
    return(
      <div className="jumbotron">
        <h1>Welcome to the website</h1>
        <p>HomePage</p>
        <div>
        <Link to="listChild" className="btn btn-primary btn-large">List All Children</Link>
        </div>
        <hr />
        <div>
        <Link to="addChild" className="btn btn-primary btn-large">Add Child</Link>
        </div>
      </div>
    );
  }
}

export default HomePage;
