import React, { PropTypes } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import toastr from 'toastr';
import ProfilePage from './ProfilePage';
import * as profileActions from '../../actions/profileActions';
import * as childActions from '../../actions/childActions';

class Profile extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.onEditClick = this.onEditClick.bind(this);
  }

  //Initializing data needed to render this component by calling action creators which will fetch data via ajax calls to backend API
  componentWillMount() {
    this.props.actionsProfile.loadProfile(this.props.childId);
    this.props.actionsChild.loadSingleChild(this.props.childId);
  }

  onEditClick(event) {
    const route = '/manageProfilePage/' + event.target.value;
    this.context.router.push(route);
  }

  render() {
    return(
      <ProfilePage profileToShow={this.props.profileToShow} onEditClick={this.onEditClick} childToDisplay={this.props.child} />
    );
  }

}

Profile.propTypes = {
  childId: PropTypes.number,
  actionsProfile: PropTypes.object.isRequired,
  actionsChild: PropTypes.object.isRequired,
  profileToShow: PropTypes.object,
  child: PropTypes.object
};

Profile.contextTypes = {
  router: PropTypes.object
};

function mapStateToProps(state, ownProps) {
  const id = ownProps.params.id;
  return{
      childId: id,
      profileToShow: state.profile,
      child: state.children
  };
}

function mapDispatchToProps(dispatch) {
  return{
    actionsProfile: bindActionCreators(profileActions, dispatch),
    actionsChild: bindActionCreators(childActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
