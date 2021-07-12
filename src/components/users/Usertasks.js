import React, { Component } from 'react';

class Usertasks extends Component {

  constructor(props) {
    super(props);

    this.state = {
        usertasks: this.props.usertasks
      }
  };

  handleDeleteClick = (id) => {
    this.props.delete(id);
    this.props.remove(id)
   }

  render() {

    let usertaskList = []
    if (this.state.usertasks.data) {
          const usertasks = this.state.usertasks.data
   
          const userID = this.props.user.id 
          const associatedTasks = usertasks.filter(usertask => usertask.relationships.user.data.id === userID);

          usertaskList = associatedTasks.map( usertask => {
            
            const subtask = this.state.usertasks.included.find(subtask => subtask.id === usertask.relationships.subtask.data.id)
            return (
            // <li>{usertask.id}, {usertask.relationships.user.data.id}, {usertask.relationships.subtask.data.id}</li>
            <li key={usertask.id}>{subtask.attributes.title} :::
            <button id={usertask.id} onClick={this.handleDeleteClick(usertask.id)}> Unassign </button>
            </li>
            )
          })
      }

        return(
          <ul>
            {usertaskList}
          </ul>
        );
      
    };

  }



export default Usertasks

