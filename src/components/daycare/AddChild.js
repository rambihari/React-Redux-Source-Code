import React, { PropTypes } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as childActions from '../../actions/childActions';
import ChildForm from './ChildForm';
import toastr from 'toastr';

class AddChild extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state= {
      errorsOnForm: Object.assign({}, props.errors),
      child: Object.assign({}, props.child)
    };

    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
    this.validateForm= this.validateForm.bind(this);
  }

  onChangeHandler(event) {
      const name = event.target.name;
      const value = event.target.value;
      const changedChild = Object.assign({}, this.state.child);

      changedChild[name] = value;

      this.setState({child: changedChild});
  }

  validateForm()  {
      let errors = Object.assign({}, this.state.errorsOnForm);
      const minchildNameLength = 3;
      let errorNotFound = true;

      if(this.state.child.firstName.length < minchildNameLength){
        errors.firstName = "The First Name has to be longer than 3 Chars";
        errorNotFound = false;
      }
      if(this.state.child.lastName.length < minchildNameLength){
        errors.lastName = "The Last Name has to be longer than 3 Chars";
        errorNotFound = false;
      }
      if(this.state.child.gender === ""){
        errors.gender = "Please select a Gender";
        errorNotFound = false;
      }
      if(!Number.isInteger(Number(this.state.child.age)) || this.state.child.age === ""){
        errors.age = "Please Enter a valid Age";
        errorNotFound = false;
      }
      if(this.state.child.dob === ""){
        errors.dob = "Please Enter a Date Of Birth";
        errorNotFound = false;
      }
      this.setState({errorsOnForm: errors});
      return errorNotFound;
  }

  onSubmitHandler(event) {
    event.preventDefault();

    if(this.validateForm()){
      this.props.actions.addChild(this.state.child);
      this.context.router.push('/listChild');
      toastr.success('Child Saved');
    }
    else{
      toastr.error('Errors in Form');
      return;
    }
  }

  render() {
    return(
      <div>
        <ChildForm onChange={this.onChangeHandler} child={this.state.child} onSave={this.onSubmitHandler} errors={this.state.errorsOnForm}/> //rendering the ChildForm component
      </div>
    );
  }

}

AddChild.propTypes = {
  child: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
  currentChildren: PropTypes.array.isRequired
};

AddChild.contextTypes = {
  router: PropTypes.object
};

function mapStateToProps(state, ownProps) {
  const childId = ownProps.params.id;

  let child = {firstName: '', lastName: '', dob: '', gender: '', age: ''};
  let errors = {firstName: '', lastName: '', dob: '', gender: '', age: ''};

  if(childId){
    const childMatch = state.children.filter(child => child.id == childId);
    if(childMatch)
      child = childMatch[0];
  }

  return{
    errors: errors,
    child: child,
    currentChildren: state.children
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(childActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddChild);
