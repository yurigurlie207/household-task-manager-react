import React, { Component } from 'react';
import Users from '../components/users/Users'
import { connect } from 'react-redux'
import { fetchUsers } from '../actions/subtasks'

class UserContainer extends Component {

  handleOnClick() {
    this.props.fetchUsers()
  }

  render() {
    return (
      <div>
        <button onClick={(event) => this.handleOnClick(event)}> Fetch Users </button>   
        <Users
          users={this.props.users}
        />
      </div>
    );
  }
}


const mapDispatchToProps = dispatch => ({
  fetchUsers: () => dispatch(fetchUsers())
})

const mapStateToProps = state => {
  return {
    users: state.users,
    requesting: state.requesting
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(UserContainer)