import React, {PropTypes} from 'react';

const TextInput = ({name, label, value, onChange, error}) => { //destructuring the props and passing them into component
  return (
    <div>
      <div className="form-title">{label}</div>
      <input className="form-field" type="text" name={name}  value={value} onChange={onChange}/>
      <label className="ErrorFont">{error}</label>
    </div>
  );
};


TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string.isRequired,
  value: PropTypes.string
};



export default TextInput;
