import React, { PropTypes } from 'react';

const ChildForm = ({onChange, child, onSave}) => {
    let wrapperClass = 'form-group';

  return(
      <form>
        <h1> Adding a Child </h1>
        <div className={wrapperClass}>
          <label>First Name </label>
          <div className="field">
            <input type="text" name="firstName" value={child.firstName} onChange={onChange} />
          </div>
        </div>
        <div className={wrapperClass}>
          <label>Last Name: </label>
          <div className="field">
            <input type="text" name="lastName" value={child.lastName} onChange={onChange} />
          </div>
        </div>
        <div className={wrapperClass}>
          <label>D.O.B: </label>
          <div className="field">
            <input type="text" name="dob" value={child.dob} onChange={onChange} />
          </div>
        </div>
        <div className={wrapperClass} >
          <label>Gender: </label>
          <div className="field">
            <input type="text" name="gender" value={child.gender} onChange={onChange} />
          </div>
        </div>
        <div className={wrapperClass}>
          <label>Age: </label>
          <div className="field">
            <input type="text" name="age" label="Age" value={child.age} onChange={onChange} />
          </div>
          <br />
          <br />
        </div>
        <div>
          <input type="submit" className="btn btn-primary" value="Add Child" onClick={onSave} />
        </div>
      </form>
  );
};

ChildForm.propTypes = {
  child: PropTypes.object.isRequired,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired
};

export default ChildForm;
