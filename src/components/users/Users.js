import React, { Component } from 'react';
import User from './User';

class Users extends Component {

  render() {
 
    const  users = this.props.users || []
    const userList = users.map( user => {


      return (
        <User key={user.id} user={user}/>
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

