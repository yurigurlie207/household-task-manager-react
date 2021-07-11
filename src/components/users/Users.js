import React, { Component } from 'react';
import User from './User';

class Users extends Component {

  render() {

    let userList = [];

    if (this.props.users){

      const  users = this.props.users || []
      userList = users.map( user => {

        return (
          <User 
          key={user.id} 
          users={this.props.users} 
          user={user} 
          delete={this.props.delete}/>
        )
      });
   }
 
    return(
      <ul>
        {userList}
      </ul>
    );
  }
};

export default Users;

