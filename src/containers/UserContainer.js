import React, { Component } from 'react';
import Users from '../components/users/Users'
import { connect } from 'react-redux'
import { fetchUsers } from '../actions/subtasks'
import { fetchUsertasks } from '../actions/subtasks'
import { deleteUsertasks } from '../actions/subtasks'

class UserContainer extends Component {

  handleOnClick() {
    this.props.fetchUsers();
    this.props.fetchUsertasks();
    // console.log(this.props.users)
    // console.log(this.props.usertasks)
  }

   constructor(props) {
    super(props);

    this.state = {
      requesting: false
      }
  };


  render() {
    let status = ""
    if (this.state.requesting === true) { status = "requesting..."}
    else {status = "complete"}
  

    return (
      <div >
        <button onClick={(event) => this.handleOnClick(event)}> Fetch Users </button>   
        <p>Request Status: {status}</p>
        <Users
          users={this.props.users}
          usertasks={this.props.usertasks}
          delete={this.props.deleteUsertasks}
        />
      </div>
    );
  }
  
}


const mapDispatchToProps = dispatch => ({
  fetchUsers: () => dispatch(fetchUsers()),
  fetchUsertasks: () => dispatch(fetchUsertasks()),
  deleteUsertasks: (usertaskID) => dispatch(deleteUsertasks(usertaskID))
})

const mapStateToProps = state => {
  return {
    users: state.users,
    usertasks: state.usertasks,
    requesting: state.requesting
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer)