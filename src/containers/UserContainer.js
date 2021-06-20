import React, { Component } from 'react';
import Users from '../components/users/Users'
import { connect } from 'react-redux'
import { fetchUsers } from '../actions/subtasks'
import { fetchUsertasks } from '../actions/subtasks'
import { deleteUsertasks } from '../actions/subtasks'


class UserContainer extends Component {

  componentDidMount(){
    this.props.fetchUsers();
    this.props.fetchUsertasks();
  }
 
  handleOnClick() {
    this.props.fetchUsers();
    this.props.fetchUsertasks();
  }

  constructor(props) {
    super(props);

    this.state = {
        requesting: false,
      }
  };

  render() {

    let status = ""
    if (this.state.requesting === true) { status = "requesting..."}
    else {status = "complete"}

    return (
      <div class="users">
        <div class="refresh"> 
          <button onClick={(event) => this.handleOnClick(event)}> Refresh User Assignments </button>   
          <p>Request Status: {status}</p>
       </div>
   

            <h1>User Assignments</h1>
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