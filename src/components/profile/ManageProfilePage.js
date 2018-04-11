import React, { PropTypes } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import toastr from 'toastr';
import ProfileForm from './ProfileForm';
import * as profileActions from '../../actions/profileActions';

class ManageProfilePage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      profile: Object.assign({}, this.props.profileToEdit),
      errorsOnForm: {weight: "", height: "", ethnicity: "", allergies: "", emergencyNum: "", comments: ""}
    };


    this.onSave = this.onSave.bind(this);
    this.onChange = this.onChange.bind(this);
    this.validateForm = this.validateForm.bind(this);
  }

  //lifecycle method which will dispatch ajax action in order to load the Redux Store,
  componentWillMount() {
    this.props.actions.loadProfile(this.props.childId);
  }

  onSave(event) {
    event.preventDefault();

    if(this.validateForm()){
      this.props.actions.saveProfile(this.state.profile, this.props.childId);
      const route = '/profile/' + this.props.childId;
      this.context.router.push(route);
      toastr.success('Child Saved');
    }
    else{
      toastr.error('Please Fix errors in the form');
      return;
    }
  }

  onChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    const changedProfile = Object.assign({}, this.state.profile);

    changedProfile[name] = value;

    this.setState({profile: changedProfile});
  }

  validateForm() {
    debugger;
    let errors = Object.assign({}, this.state.errorsOnForm);
    let errorNotFound = true;

    if(!Number.isInteger(Number(this.state.profile.height)) || this.state.profile.height === ""){
      errors.height = "Please Enter a valid Number for Height in inches";
      errorNotFound = false;
    }
    if(!Number.isInteger(Number(this.state.profile.weight)) || this.state.profile.weight === ""){
      errors.weight = "Please Enter a valid Number for Weigth in lbs";
      errorNotFound = false;
    }
    if(this.state.profile.ethnicity === ""){
      errors.ethnicity = "Please Enter some value for this field";
      errorNotFound = false;
    }
    if(this.state.profile.emergencyNum === ""){
      errors.emergencyNum = "Please Enter some value for this field";
      errorNotFound = false;
    }
    if(this.state.profile.comments === ""){
      errors.comments = "Please Enter some value for this field";
      errorNotFound = false;
    }
    this.setState({errorsOnForm: errors});
    return errorNotFound;
  }

  render() {
    return (
      <ProfileForm profile={this.state.profile} onSave={this.onSave} onChange={this.onChange} errors={this.state.errorsOnForm} />
    );
  }
}

ManageProfilePage.propTypes = {
  childId: PropTypes.string.isRequired,
  actions: PropTypes.object.isRequired,
  profileToEdit: PropTypes.object.isRequired
};

ManageProfilePage.contextTypes = {
  router: PropTypes.object
};

function mapStateToProps(state, ownProps) {
  const id = ownProps.params.id;

  return{
      childId: id,
      profileToEdit: state.profile
  };
}

function mapDispatchToProps(dispatch) {
  return{
    actions: bindActionCreators(profileActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageProfilePage);
