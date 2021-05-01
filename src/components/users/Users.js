import React, { Component } from 'react';
import User from './User';

class Users extends Component {

  render() {

    let userList = [];

    if (this.props.users && this.props.usertasks){

      const  users = this.props.users || []
      console.log("HMMM")
      console.log(this.props.users)
      userList = users.map( user => {

        return (
          <User key={user.id} user={user} usertasks={this.props.usertasks} delete={this.props.delete}/>
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

