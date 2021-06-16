import React, { Component } from 'react';
import Select from 'react-select'

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

    const options = [
      { value: 'chocolate', label: 'Chocolate' },
      { value: 'strawberry', label: 'Strawberry' },
      { value: 'vanilla', label: 'Vanilla' }
    ]

    let userList = []
    
    if (this.props.users){
      userList  = this.props.users.map( user => {
        return { value: user.id , label: user.attributes.username }
      });
    }

    // (<option  value={user.attributes.username} data-user-id={user.id}>{user.attributes.username}</option>) 

    const { subtask } = this.props;
    return (
      <div>
        <li class="subtask">
          {subtask.attributes.title}
           ::: 

           <Select options={userList} />
           {/* <select multiple>
            {userList}
          </select> */}
          :::
          <button class="assign" onClick={this.handleAssignClick}>Assign User(s)</button>
        </li>
      </div>
    );
  }
};

export default Subtask;

