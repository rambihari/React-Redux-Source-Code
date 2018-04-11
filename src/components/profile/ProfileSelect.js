import React, { PropTypes } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import ProfilePage from './ProfilePage';
import * as childActions from '../../actions/childActions';
import toastr from 'toastr';

class ProfileSelect extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      childId: ""
    };

    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  //lifecycle method which will dispatch action before the component has been loaded
  componentWillMount() {
    this.props.actionsChild.loadAllChildren();
  }

  onChange(event) {
    this.setState({childId: event.target.value});
  }

  onClick(event) {
    event.preventDefault();

    if(this.state.childId === ""){
      toastr.error("Please select a profile to display!");
    }
    else {
      const route = "profile/" + this.state.childId;
      this.context.router.push(route);
    }

  }

  render() {
    return(
      <form className="form-container">
        <div className="form-title">Gender</div>
          <select className="form-field" onChange={this.onChange} >
            <option value="land" selected default hidden>Choose here</option>
            {this.props.child.map(child  =>
              <option key={child.id} value={child.id}>{child.firstName + " "}{child.lastName}</option> //mapping the child array to diffrent options consisting of childNames the user can pick
            )}
          </select>
          <br />
          <div className="submit-container">
            <input className="submit-button" type="submit" value="Show Profile" onClick={this.onClick} />
          </div>
      </form>
    );
  }
}

ProfileSelect.propTypes = {
  actionsChild: PropTypes.object.isRequired,
  child: PropTypes.array.isRequired
};

ProfileSelect.contextTypes = {
  router: PropTypes.object
};

function mapStateToProps(state, ownProps) {
  return{
      child: state.children
  };
}

function mapDispatchToProps(dispatch) {
  return{
    actionsChild: bindActionCreators(childActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileSelect);
