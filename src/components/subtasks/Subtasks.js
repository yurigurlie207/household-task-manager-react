import React from 'react';
import Subtask from './Subtask';


const Subtasks = () => {

  const [subtasks, setSubtaskList] = React.useState(this.props.subtasks || []);

  function removeSubtask(id) {
    const newSubtaskList = subtasks.filter((subtask) => subtask.id !== id);
    setSubtaskList(newSubtaskList);
  }

    const subtaskList = subtasks.map(subtask => {
      return (
        <Subtask
            key={subtask.id}
            subtask={subtask}
            subtasks={subtasks}
            users={this.props.users}
            assign={this.props.assign}
            remove={removeSubtask}
        />
      )
    });

    return(
      <ol>
        {subtaskList}
      </ol>
    );
    };

export default Subtasks;

