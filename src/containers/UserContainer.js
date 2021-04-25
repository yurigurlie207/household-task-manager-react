import React, { Component } from 'react';
import Users from '../components/users/Users'
import { connect } from 'react-redux'
import { fetchUsers } from '../actions/subtasks'
import { fetchUsertasks } from '../actions/subtasks'

class UserContainer extends Component {

  handleOnClick() {
    this.props.fetchUsers();
    this.props.fetchUsertasks();
    console.log(this.props.users)
    console.log(this.props.usertasks)
  }

  render() {
    return (
      <div >
        <button onClick={(event) => this.handleOnClick(event)}> Fetch Users </button>   
        <Users
          users={this.props.users}
          usertasks={this.props.usertasks}
        />
      </div>
    );
  }
}


const mapDispatchToProps = dispatch => ({
  fetchUsers: () => dispatch(fetchUsers()),
  fetchUsertasks: () => dispatch(fetchUsertasks())
})

const mapStateToProps = state => {
  return {
    users: state.users,
    usertasks: state.usertasks,
    requesting: state.requesting
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(UserContainer)