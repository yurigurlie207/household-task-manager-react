import React, { Component } from 'react';

class Subtask extends Component {

//   handleOnClick() {
//     this.props.deleteSubtask(this.props.subtask.id);
//   }

  render() {
    const { subtask } = this.props;
    return (
      <div>
        <li>
          {subtask.attributes.title}
          <button onClick={() => this.handleOnClick()}> X </button>
        </li>
      </div>
    );
  }
};

export default Subtask;