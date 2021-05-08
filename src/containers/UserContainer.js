import React, { Component } from 'react';
import Users from '../components/users/Users'
import Subtasks from '../components/subtasks/Subtasks'
import { connect } from 'react-redux'
import { fetchUsers } from '../actions/subtasks'
import { fetchUsertasks } from '../actions/subtasks'
import { deleteUsertasks } from '../actions/subtasks'
import { fetchSubtasks } from '../actions/subtasks'

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
      <div >
        <button onClick={(event) => this.handleOnClick(event)}> Refresh Latest Task Assignments </button>   
        <div>
          <Subtasks
            subtasks={this.props.subtasks}
            users={this.props.users}
          />
        </div>
        <div>
            <p>Request Status: {status}</p>
            <Users
              users={this.props.users}
              usertasks={this.props.usertasks}
              delete={this.props.deleteUsertasks}
            />
        </div>  
      </div>
    );
  }
  
}


const mapDispatchToProps = dispatch => ({
  fetchUsers: () => dispatch(fetchUsers()),
  fetchUsertasks: () => dispatch(fetchUsertasks()),
  fetchSubtasks: () => dispatch(fetchSubtasks()),
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