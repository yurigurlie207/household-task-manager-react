import React, { Component } from 'react';
import Usertasks from './Usertasks'

class User extends Component {

 

  render() {

   
    let user = {}
    let usertasks = []

    if (this.props.user && this.props.usertasks){
        user = this.props.user;
        usertasks = this.props.usertasks;
    }
 
    return (
      <div>
        <li>
          {user.attributes.username}
          <Usertasks user={user} usertasks={usertasks} delete={this.props.delete}/>
        </li>
      </div>
    );
  }
};

export default User;