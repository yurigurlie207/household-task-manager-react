import React, { Component } from 'react';

class Subtask extends Component {

//   handleOnClick() {
//     this.props.deleteSubtask(this.props.subtask.id);
//   }


  render() {
    let userList = []
    
    if (this.props.users){
      userList  = this.props.users.map( user => {
        return (<option  value={user.attributes.username} data-user-id={user.id}>{user.attributes.username}</option>) 
      });
    }

    const { subtask } = this.props;
    return (
      <div>
        <li class="subtask">
          {subtask.attributes.title}
           ::: 
           <select multiple>
            {userList}
          </select>
        </li>
      </div>
    );
  }
};

export default Subtask;