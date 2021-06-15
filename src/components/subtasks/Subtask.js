import React, { Component } from 'react';

class Subtask extends Component {

  handleAssignClick = (event) => {
    console.log(this) 
    let selectList = event.target.previousElementSibling;
    let checked = selectList.querySelectorAll(':checked');
    let selectedUsers = [...checked].map(option => option.dataset.userId);
    this.props.assign(selectedUsers,this.props.subtask.id);
    if (selectedUsers.length > 0) { event.target.parentElement.remove()}
  }

  //references to refactor above code
  // https://react-select.com/home
  // https://www.robinwieruch.de/react-remove-item-from-list

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
          :::
          <button class="assign" onClick={this.handleAssignClick}>Assign User(s)</button>
        </li>
      </div>
    );
  }
};

export default Subtask;

