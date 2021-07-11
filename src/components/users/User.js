import React, { Component } from 'react';
import Usertasks from './Usertasks'

class User extends Component {

 

  render() {

    let user = {}

    if (this.props.user){
        user = this.props.user;
    }
 
    return (
      <div>
        <li>
          {user.attributes.username}
          <Usertasks 
          users={this.props.users} 
          user={user} 
          delete={this.props.delete}/>
        </li>
      </div>
    );
  }
};

export default User;