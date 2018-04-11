import React, { PropTypes } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import toastr from 'toastr';
import TextInput from '../common/TextInput';


const ProfileForm = ({onChange, profile, onSave, errors}) => { 

  return(
    <form className="form-container">

        <div className="form-title"><h2>Edit Profile</h2></div>

        <TextInput name="height" label="Height(Inches)" value={profile.height} error={errors.height} onChange={onChange} />

        <TextInput name="weight" label="Weight" value={profile.weight} error={errors.weight} onChange={onChange} />

        <TextInput name="ethnicity" label="Ethnicity" value={profile.ethnicity} error={errors.ethnicity} onChange={onChange} />

        <TextInput name="allergies" label="Allergies" value={profile.allergies} error={errors.allergies} onChange={onChange} />

        <TextInput name="emergencyNum" label="Emergency Contact Number" value={profile.emergencyNum} error={errors.emergencyNum} onChange={onChange} />

        <TextInput name="comments" label="Please Type Comments:-" value={profile.comments} error={errors.comments} onChange={onChange} />

        <div className="submit-container">
              <input type="submit" className="submit-button" value="Save Profile" onClick={onSave} />
        </div>

    </form>
  );
};

export default ProfileForm;
