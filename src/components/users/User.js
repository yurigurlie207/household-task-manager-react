import React, { Component } from 'react';
import Usertasks from './Usertasks'
import { connect } from 'react-redux'

class User extends Component {

  constructor(props) {
    super(props);

    this.state = {
        usertasks: this.props.usertasks
      }
  };
  

  removeUsertask = (id) => {
    this.setState({
      usertasks: this.state.usertasks.data.filter(usertask => usertask.id !== id)
    })
    
  }

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
          usertasks={this.state.usertasks}
          users={this.props.users} 
          user={user} 
          delete={this.props.delete}
          remove={this.removeUsertask}/>
        </li>
      </div>
    );
  }
};

const mapStateToProps = state => {
  return {
    usertasks: state.usertasks
  }
}

export default connect(mapStateToProps)(User)

