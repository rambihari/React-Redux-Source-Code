import React, { PropTypes } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as childActions from '../../actions/childActions';
import AllChildren from './AllChildrenPage';

class ListChild extends React.Component {
  constructor(props, context){
    super(props, context);
  }

  componentWillMount() {
    this.props.actions.loadAllChildren();
  }

  render() {
    return (
      <AllChildren childrenToList={this.props.children} />
    );
  }

}

ListChild.propTypes = {
  children: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};


function mapStateToProps(state, ownProps) {
  return{
    children: state.children
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(childActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ListChild);
