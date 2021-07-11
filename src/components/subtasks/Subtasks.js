import React, { Component } from 'react';
import Subtask from './Subtask';
import { connect } from 'react-redux';


class Subtasks extends Component {


  constructor(props) {
    super(props);

    this.state = {
      subtasks: this.props.subtasks,
      users: this.props.users
    }
  }

  removeSubtask = (id) => {

    this.setState({
      subtasks: this.state.subtasks.filter(subtask => subtask.id !== id)
    })
    
  }

  render() {

  
    const subtasks = this.state.subtasks || []
    const subtaskList = subtasks.map(subtask => {
      return (
        <Subtask
            key={subtask.id}
            subtask={subtask}
            users={this.state.users}
            assign={this.props.assign}
            remove={this.removeSubtask}
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

 
  const mapStateToProps = state => {
    return {
      subtasks: state.subtasks,
      users: state.users
    }
  }

export default connect(mapStateToProps)(Subtasks)


