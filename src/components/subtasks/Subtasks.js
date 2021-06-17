import React, { Component } from 'react';
import Subtask from './Subtask';


class Subtasks extends Component {

  render() {
 
    const subtasks = this.props.subtasks || []
    const subtaskList = subtasks.map(subtask => {
      return (
        <Subtask
            key={subtask.id}
            subtask={subtask}
            subtasks={subtasks}
            users={this.props.users}
            assign={this.props.assign}
            setSubtaskList={this.props.setSubtaskList}
        />
      )
    });

    return(
      <ol>
        {subtaskList}
      </ol>
    );
  }
};

export default Subtasks;

