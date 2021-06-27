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
    this.props.assign(this.state.selectedUsers,this.props.subtask.id);
    
    if (this.state.selectedUsers.length > 0) 
    { 
      this.props.remove(this.props.subtask.id);
    }
  }

  handleSelectChange = e => {
    let values = e.map(x => x.value)
    this.setState({ selectedUsers: values}) ;
  };

  // https://react-select.com/home

  render() {

    let userList = []
    
    if (this.props.users){
      userList  = this.props.users.map( user => {
        return { value: user.id , label: user.attributes.username }
      });
    }

    const { subtask } = this.props;
    return (
      <div>
        <li class="subtask">
          {subtask.attributes.title}
           ::: 

           <Select isMulti options={userList} onChange={this.handleSelectChange} />
     
          :::
          <button class="assign" onClick={this.handleAssignClick}>Assign User(s)</button>
        </li>
      </div>
    );
  }
};

export default Subtask;

