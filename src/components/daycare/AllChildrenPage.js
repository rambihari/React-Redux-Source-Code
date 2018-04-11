import React, { PropTypes } from 'react';
import ChildRow from './ChildRow';


const AllChildren = ({childrenToList, onDeleteClick, onEditClick, showProfile,onShowProfileClick}) => { //destructuring the props and passing them into component
  return(
    <div>
        <table className="minimalistBlack">
          <thead>
            <tr>
              <th>Child First Name</th>
              <th>Child Last Name</th>
              <th>D.O.B</th>
              <th>Gender</th>
              <th>Age</th>
              <th></th>
              <th></th>
              {showProfile && <th></th>}
              </tr>
          </thead>
          <tbody>
            {childrenToList.map(child =>
              <ChildRow key={child.id} child={child} onDeleteClick={onDeleteClick} onEditClick={onEditClick} showProfile={showProfile} onShowProfileClick={onShowProfileClick}/> //mapping the childrentoList array to childRow component
            )}
          </tbody>
        </table>
    </div>
  );
};

AllChildren.propTypes = {
  childrenToList: PropTypes.array.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
  onEditClick: PropTypes.func.isRequired,
  showProfile: PropTypes.bool.isRequired,
  onShowProfileClick: PropTypes.func.isRequired
};

export default AllChildren;
