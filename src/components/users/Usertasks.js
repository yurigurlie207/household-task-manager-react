import React, { Component } from 'react';

class Usertasks extends Component {

  // constructor(props) {
  //   super(props);

  //   this.state = {
  //       usertasks: this.props.usertasks
  //     }
  // };

  handleDeleteClick = (event) => {
    this.props.delete(event.target.id);
    this.props.remove(event.target.id);
   }

  render() {

    let usertaskList = []
    // debugger
    if (this.props.usertasks.data) {
          const usertasks = this.props.usertasks.data
   
          const userID = this.props.user.id 
          const associatedTasks = usertasks.filter(usertask => usertask.relationships.user.data.id === userID);

          usertaskList = associatedTasks.map( usertask => {
            
            const subtask = this.props.usertasks.included.find(subtask => subtask.id === usertask.relationships.subtask.data.id)
            return (
            // <li>{usertask.id}, {usertask.relationships.user.data.id}, {usertask.relationships.subtask.data.id}</li>
            <li key={usertask.id}>{subtask.attributes.title} :::
            <button id={usertask.id} onClick={this.handleDeleteClick}> Unassign </button>
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

