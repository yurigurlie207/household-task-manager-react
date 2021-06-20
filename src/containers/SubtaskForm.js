import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchTasks } from '../actions/subtasks'
import { createSubtasks } from '../actions/subtasks'

class SubtaskForm extends Component {

  componentDidMount(){
    this.props.fetchTasks();
  }
 
  handleCreateClick(event) {
    let title = event.target.parentElement.querySelector('input').value;
    let taskID = event.target.parentElement.querySelector('select').value;
    this.props.createSubtasks(title, taskID);
  }

  handleTitleChange = event => {
    this.setState({
      title: event.target.value
    })
  }

  handleTaskChange = event => {
    this.setState({
      task: event.target.value
    })
  }

  state = {
   title: "",
    taskID: null
  }
 
  render() {
    let taskList = []
    
    if (this.props.tasks){
      taskList  = this.props.tasks.map( task => {
        return (<option value={task.id} data-user-id={task.id}>{task.attributes.title}</option>) 
      });
    }

    return (
      <div class="subtaskform">
      <form>
        <label>Subtask Title:</label>
        <input type="text" name="title" onChange={event => this.handleTitleChange(event)} value={this.state.title} /><br></br>
         <label>Assign to Task:</label>
         <select onChange={event => this.handleTaskChange(event)} >
            {taskList}
          </select><br></br>
          <button onClick={(event) => this.handleCreateClick(event)}>Create Subtask</button>
      </form>
      </div>
    )
  }
}
 

const mapDispatchToProps = dispatch => ({
    fetchTasks: () => dispatch(fetchTasks()),
    createSubtasks: (title, taskID) => dispatch(createSubtasks(title, taskID)),
  })
  
const mapStateToProps = state => {
    return {
        tasks: state.tasks,
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SubtaskForm)