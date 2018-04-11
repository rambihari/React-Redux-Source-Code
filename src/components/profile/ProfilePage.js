import React, { PropTypes } from 'react';
import toastr from 'toastr';
import {Link} from 'react-router';

const ProfilePage = ({profileToShow, onEditClick, childToDisplay}) => {
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
          <th>Height</th>
          <th>Weight</th>
          <th>Ethnicity</th>
          <th>Allergies</th>
          <th>Emergency Contact Number</th>
          <th>Comments</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{childToDisplay.firstName}</td>
          <td>{childToDisplay.lastName}</td>
          <td>{childToDisplay.dob}</td>
          <td>{childToDisplay.gender}</td>
          <td>{childToDisplay.age}</td>
          <td>{profileToShow.height}</td>
          <td>{profileToShow.weight}</td>
          <td>{profileToShow.ethnicity}</td>
          <td>{profileToShow.allergies}</td>
          <td>{profileToShow.emergencyNum}</td>
          <td>{profileToShow.comments}</td>
        </tr>
      </tbody>
    </table>

    <button value={profileToShow.id} onClick={onEditClick} className="btn">Edit Profile</button>

    </div>
  );
};

ProfilePage.propTypes =  {
  profileToShow: PropTypes.object.isRequired,
  onEditClick: PropTypes.func.isRequired,
  childToDisplay: PropTypes.object
};

export default ProfilePage;
