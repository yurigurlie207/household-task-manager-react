import React, { Component } from 'react';
import User from './User';
import { connect } from 'react-redux'

class Users extends Component {

  constructor(props) {
    super(props);

    let usertasksByUser = []
    let usertasks = this.props.usertasks.data
    let users = this.props.users

    let user = {}
    let z = 0;

    for (let i = 0; i < users.length; i++) {
      user = users[i]
      usertasksByUser[i] = {}
      usertasksByUser[i].id = user.id
      usertasksByUser[i].username = user.attributes.username
      usertasksByUser[i].usertasks = []

      for (let j = 0; j < usertasks.length;) {
          if (usertasks[j].relationships.user.data.id === user.id ){
            let subtask = this.props.usertasks.included.find(subtask => subtask.id === usertasks[j].relationships.subtask.data.id)
            usertasksByUser[i].usertasks[z]={}
            usertasksByUser[i]['usertasks'][z].id = usertasks[j].id
            usertasksByUser[i]['usertasks'][z].title = subtask.attributes.title
            usertasks.splice(j,1)
            z++;
          }
          else {
            j++;
          }
      }
      z = 0;
    }

    this.state = {
        usertasksByUser: usertasksByUser
      }

  };

  removeUsertask = (userId, usertaskId) => {
    // debugger
    // this.props.delete(usertaskId); //persists to database

  let updatedusertasksByUser = this.state.usertasksByUser

   updatedusertasksByUser.map( user => {
      if (user.id === userId) {
        user.usertasks.filter(usertask => usertask.id !== usertaskId)
      }
    })

    console.log("HM")
    console.log(this.state.usertasksByUser)
    console.log(updatedusertasksByUser)

    this.setState({
      // usertasks: this.state.usertasks.data.filter(usertask => usertask.id !== event.target.id)
    })
  }

  render() {
  
  // console.log(this.state.usertasksByUser)

    let userList = [];

    if (this.state.usertasksByUser){

      userList = this.state.usertasksByUser.map( user => {

        let usertaskList = user.usertasks

        return (
          <User 
          key={user.id} 
          usertasks={usertaskList} 
          user={user} 
          delete={this.props.delete}
          remove={this.removeUsertask}/>
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
    users: state.users,
    usertasks: state.usertasks
  }
}

export default connect(mapStateToProps)(Users)


