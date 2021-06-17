import React, { Component } from 'react';
import Select from 'react-select'

class Subtask extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedUsers: []
    }
  
  }
  handleAssignClick = (event) => {
    console.log(this.state.selectedUsers)
    // console.log(this.state.selectedUsers) 
    // let selectList = event.target.previousElementSibling;
    // let checked = selectList.querySelectorAll(':checked');
    // let selectedUsers = [...checked].map(option => option.dataset.userId);

    this.props.assign(this.state.selectedUsers,this.props.subtask.id);
    
    if (this.state.selectedUsers.length > 0) 
    { 
      //event.target.parentElement.remove()
      const newSubtaskList = this.props.subtaskList.filter((subtask) => subtask.id !== this.props.subtask.id);
      this.props.setSubtaskList(newSubtaskList);
    
    }

  }

  handleSelectChange = e => {
    let values = e.map(x => x.value)
    // console.log(values)
    this.setState({ selectedUsers: values}) ;
    // console.log("HM");
    // console.log(this.state.selectedUsers);
  
  };

  //references to refactor above code
  // https://react-select.com/home
  // https://www.robinwieruch.de/react-remove-item-from-list

  render() {

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

           <Select isMulti options={userList} onChange={this.handleSelectChange} />
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

