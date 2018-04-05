import React, { PropTypes } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as childActions from '../../actions/childActions';
import ChildForm from './ChildForm';

class AddChild extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state= {
      child: Object.assign({}, props.child)
    };

    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }

  onChangeHandler(event) {
      const name = event.target.name;
      const value = event.target.value;
      const changedChild = Object.assign({}, this.state.child);

      changedChild[name] = value;

      this.setState({child: changedChild});
  }

  onSubmitHandler() {
    console.log('rambi');
    this.props.actions.addChild(this.state.child);
    // .then(() => this.redirect())
    // .catch(error => {
    //   throw error;
    // });
  }

  // redirect()  {
  //   this.context.router.push('/listChild');
  // }


  render() {
    return(
      <div>
        <ChildForm onChange={this.onChangeHandler} child={this.state.child} onSave={this.onSubmitHandler}/>
      </div>
    );
  }

}

AddChild.propTypes = {
  child: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
  currentChildren: PropTypes.array.isRequired
};

// AddChild.contextTypes = {
//   router: PropTypes.object
// };


function mapStateToProps(state, ownProps) {
  const child = {firstName: '', lastName: '', dob: '', gender: '', age: ''};

  return{
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
