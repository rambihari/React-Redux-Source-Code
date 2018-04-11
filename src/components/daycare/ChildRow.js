import React, { PropTypes } from 'react';
import {Link} from 'react-router';

const ChildRow = ({child, onDeleteClick, onEditClick, showProfile, onShowProfileClick}) => {
  return(
    <tr>
      <td><Link to={'/listChild/' + child.id}>{child.firstName}</Link></td>
      <td>{child.lastName}</td>
      <td>{child.dob}</td>
      <td>{child.gender}</td>
      <td>{child.age}</td>
      <td><button value={child.id} onClick={onDeleteClick} className="btn">DELETE</button></td>
      <td><button value={child.id} onClick={onEditClick} className="btn">EDIT</button></td>
      {showProfile &&  <td><button value={child.id} onClick={onShowProfileClick} className="btn">PROFILE</button></td>}
    </tr>
  );
};


ChildRow.propTypes = {
  child: PropTypes.object.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
  onEditClick: PropTypes.func.isRequired,
  showProfile: PropTypes.bool.isRequired,
  onShowProfileClick: PropTypes.func.isRequired
};

export default ChildRow;
