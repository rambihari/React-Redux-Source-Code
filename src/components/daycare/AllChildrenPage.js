import React, { PropTypes } from 'react';
import ChildRow from './ChildRow';

const AllChildren = ({childrenToList}) => {
  return(
    <div>
    <table className="table">
      <thead>
        <tr>
          <th>Child First Name</th>
          <th>Child Last Name</th>
          <th>D.O.B</th>
          <th>Gender</th>
          <th>Age</th>
        </tr>
      </thead>
      <tbody>
        {childrenToList.map(child =>
          <ChildRow key={child.id} child={child} />
        )}
      </tbody>
    </table>
    </div>
  );
};

AllChildren.propTypes = {
  childrenToList: PropTypes.array.isRequired
};

export default AllChildren;
