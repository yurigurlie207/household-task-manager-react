import React, { Component } from 'react';
import User from './User';
import { connect } from 'react-redux'


class Users extends Component {

  constructor(props) {
    super(props);

    this.state = {
        users: this.props.users
      }
  };
  
  render() {

    let userList = [];

    if (this.props.users){

      const  users = this.props.users || []
      userList = users.map( user => {

        return (
          <User 
          key={user.id} 
          users={this.state.users} 
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

const mapStateToProps = state => {
  return {
    users: state.users
  }
}

export default connect(mapStateToProps)(Users)


