import React, { Component } from 'react';

class Users extends Component {

  render() {
 
    const  users = this.props.users || []
    const userList = users.map( user => {
      return (
        <li>{user.attributes.username}</li>
      )
    });

    return(
      <ul>
        {userList}
      </ul>
    );
  }
};

export default Users;