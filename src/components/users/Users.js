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
    for (let i = 0; i < users.length; i++) {
      user = users[i]
      usertasksByUser[i]['id'] = user.id
      usertasksByUser[i]['username'] = user.attributes.username
      usertasksByUser[i]['usertasks'] = {}

      for (let j = 0; j < usertasks.length; j++) {

      }

      // usertasks: this.state.usertasks.data.filter(usertask => usertask.id !== event.target.id)
    }

    this.state = {
        // users: this.props.users,
        // usertasks: this.props.usertasks
        usertasksByUser: usertasksByUser
      }

  };

    // datastruture i would want
    // [ 
    //   { id: x,
    //     username: mom,
    //     usertasks: 
    //     {
    //       usertaskid: usetaskname,
    //       usertaskid: usertaskname
    //       etc
    //     }
    //    },
    //   { id: x,
    //     username: mom,
    //     usertasks: 
    //     {
    //       usertaskid: usetaskname,
    //       usertaskid: usertaskname
    //       etc
    //     }
    //    },
    //   { id: x,
    //     username: mom,
    //     usertasks: 
    //     {
    //       usertaskid: usetaskname,
    //       usertaskid: usertaskname
    //       etc
    //     }
    //    }
    // ]

  
  render() {

    console.log(this.state.usertasksByUser)
  //   let userList = [];

  //   if (this.props.users){

  //     const  users = this.props.users || []
  //     userList = users.map( user => {

  //       return (
  //         <User 
  //         key={user.id} 
  //         users={this.state.users} 
  //         user={user} 
  //         delete={this.props.delete}/>
  //       )
  //     });
  //  }
 
    return(
      <ul>
      
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


