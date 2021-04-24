import React, { Component } from 'react';

class Usertasks extends Component {

  render() {
 
    const  subtasks = this.props.subtasks || []
    const  usertasks = this.props.usertasks || []
    const usertaskList = usertasks.map( usertask => {
      // console.log(subtasks)
      // console.log(usertasks)
      // let st = subtasks.find(subtask => subtask.id == usertask.relationships.subtask.data.id)
      // console.log(st)
      return (
      <li>{usertask.id}, {usertask.relationships.user.data.id}, {usertask.relationships.subtask.data.id}</li>
      )
    });

    return(
      <ul>
        {usertaskList}
      </ul>
    );
  }
};

export default Usertasks;