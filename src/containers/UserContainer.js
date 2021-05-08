import React, { Component } from 'react';
import Users from '../components/users/Users'
import Subtasks from '../components/subtasks/Subtasks'
import { connect } from 'react-redux'
import { fetchUsers } from '../actions/subtasks'
import { fetchUsertasks } from '../actions/subtasks'
import { deleteUsertasks } from '../actions/subtasks'
import { fetchSubtasks } from '../actions/subtasks'
import { assignUsertasks } from '../actions/subtasks'

class UserContainer extends Component {

  handleOnClick() {
    this.props.fetchUsers();
    this.props.fetchUsertasks();
    this.props.fetchSubtasks()
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
      <div>
        <div class="refresh"> 
          <button onClick={(event) => this.handleOnClick(event)}> Refresh Latest Task Assignments </button>   
          <p>Request Status: {status}</p>
       </div>
        <div class="main" >

          <div class="subtask">
            <h1>Unassigned Subtasks</h1>
            <Subtasks
              subtasks={this.props.subtasks}
              users={this.props.users}
              assign={this.props.assignUsertasks}
            />
          </div>

          <div class="users">
            <h1>User Assignments</h1>
              <Users
                users={this.props.users}
                usertasks={this.props.usertasks}
                delete={this.props.deleteUsertasks}
              />
          </div>  
        </div>
      </div>
    );
  }
  
}


const mapDispatchToProps = dispatch => ({
  fetchUsers: () => dispatch(fetchUsers()),
  fetchUsertasks: () => dispatch(fetchUsertasks()),
  fetchSubtasks: () => dispatch(fetchSubtasks()),
  assignUsertasks: (userIDs, subtaskID) => dispatch(assignUsertasks(userIDs,subtaskID)),
  deleteUsertasks: (usertaskID) => dispatch(deleteUsertasks(usertaskID))
})

const mapStateToProps = state => {
  return {
    users: state.users,
    usertasks: state.usertasks,
    subtasks: state.subtasks,
    requesting: state.requesting
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer)