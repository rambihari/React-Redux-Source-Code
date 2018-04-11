import React, { PropTypes } from 'react';
import TextInput from '../common/TextInput';

const ChildForm = ({onChange, child, onSave, errors}) => { //destructuring the props and passing them into component


  return(
    <form className="form-container">

        <div className="form-title"><h2>Add Child</h2></div>

        <TextInput name="firstName" label="First Name" value={child.firstName} error={errors.firstName} onChange={onChange} />

        <TextInput name="lastName" label="Last Name" value={child.lastName} error={errors.lastName} onChange={onChange} />

        <TextInput name="dob" label="Date Of Birth" value={child.dob} error={errors.dob} onChange={onChange} />

        <div>
          <div className="form-title">Gender</div>
            <select name="gender" className="form-field" onChange={onChange} >
              <option value="" selected disabled hidden>Choose here</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
            <label className="ErrorFont">{errors.gender}</label>
        </div>

        <TextInput name="age" label="Age" value={child.age} error={errors.age} onChange={onChange} />

        <div className="submit-container">
          <input className="submit-button" type="submit" value="Add Child" onClick={onSave} />
        </div>
    </form>
  );
};

ChildForm.propTypes = {
  child: PropTypes.object.isRequired,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired
};

export default ChildForm;
