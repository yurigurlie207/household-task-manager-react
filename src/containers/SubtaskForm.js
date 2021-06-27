import React, { Component } from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { connect } from 'react-redux'
import { fetchTasks } from '../actions/subtasks'
import { createSubtasks } from '../actions/subtasks'

class SubtaskForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      title: "",
      taskID: null
    }
  };
  componentDidMount(){
    this.props.fetchTasks();
  }
 
  handleCreateClick = () => {
    this.props.createSubtasks(this.state.title, this.state.taskID);
  }

  handleTitleChange = (event) => {
    this.setState({
      title: event.value
    })
  }

  handleTaskChange = event => {
    this.setState({
      taskID: event.value
    })
  }

 

  render() {
    let taskList = []
 
    if (this.props.tasks){
      taskList  = this.props.tasks.map( task => {
        return { value: task.id, label: task.attributes.title }
      });
    }
    const defaultOption = taskList[0];

    return (
      <div class="subtaskform">
      <form>
        <label>Subtask Title:</label>
        <input type="text" name="title" onChange={this.handleTitleChange} value={this.state.title} /><br></br>
         <label>Assign to Task:</label>
          <Dropdown options={taskList} onChange={this.handleTaskChange} value={defaultOption} placeholder="Select an option" /><br></br>
          <button onClick={this.handleCreateClick()}>Create Subtask</button>
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