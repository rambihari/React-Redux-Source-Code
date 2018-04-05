import React, { PropTypes } from 'react';

const ChildRow = ({child}) => {
  return(
    <tr>
      <td>{child.firstName}</td>
      <td>{child.lastName}</td>
      <td>{child.dob}</td>
      <td>{child.gender}</td>
      <td>{child.age}</td>
    </tr>
  );
};

ChildRow.propTypes = {
  child: PropTypes.object.isRequired
};

export default ChildRow;
