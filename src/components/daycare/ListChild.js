import React, { PropTypes } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as childActions from '../../actions/childActions';
import AllChildren from './AllChildrenPage';

class ListChild extends React.Component {
  constructor(props, context){
    super(props, context);

    this.state= {
      children: []
    };

    this.onDeleteClick = this.onDeleteClick.bind(this);
    this.onEditClick = this.onEditClick.bind(this);
    this.onProfileClickHandler = this.onProfileClickHandler.bind(this);
  }

  componentWillMount() {
    this.props.actions.loadAllChildren()
    .then(() => this.setState({children: this.props.children}) );
  }

  componentWillReceiveProps(nextProps) {
      this.setState({children: nextProps.children});
  }

  onDeleteClick(event) {
    const idToBeDeleted = event.target.value;
    const childToBeDeleted = this.props.children.filter(child => child.id == idToBeDeleted);
    this.props.actions.deletechild(childToBeDeleted[0]);
  }

  onEditClick(event) {
    const route = "/addChild/" + event.target.value ;
    this.context.router.push(route);
  }

  onProfileClickHandler(event) {
    const route = "/profile/" + event.target.value ;
    this.context.router.push(route);
  }

  render() {
    return (
      <AllChildren childrenToList={this.state.children} onDeleteClick={this.onDeleteClick} onEditClick={this.onEditClick} showProfile={this.props.showProfile} onShowProfileClick={this.onProfileClickHandler}/>
    );
  }

}

ListChild.propTypes = {
  children: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  showProfile: PropTypes.bool.isRequired,
  idIsPresent: PropTypes.string
};


ListChild.contextTypes = {
  router: PropTypes.object
};

function mapStateToProps(state, ownProps) {
  const id = Number(ownProps.params.id);
  let child =[];
  let profileShow;
  if(id){
    child = state.children.filter(childs => childs.id === id);
    profileShow = true;
  }
  else{
    child = state.children;
    profileShow = false;
  }

  return{
    children: child,
    showProfile: profileShow
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(childActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ListChild);
