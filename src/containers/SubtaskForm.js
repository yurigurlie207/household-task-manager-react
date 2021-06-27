import React, { Component } from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { connect } from 'react-redux'
import { fetchTasks } from '../actions/subtasks'
import { createSubtasks } from '../actions/subtasks'

class SubtaskForm extends Component {


  componentDidMount(){
    this.props.fetchTasks();
  }
  
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      taskID: null
    }
  };
 
  handleCreateClick = () => {
    this.props.createSubtasks(this.state.title, this.state.taskID);
  }

  handleTitleChange = (event) => {
    this.setState({
      title: event.target.value
    })
  }

  handleTaskChange = (event) => {
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
  

    return (
      <div className="subtaskform">
      <form>
        <label>Subtask Title:</label>
        <input type="text" name="title" onChange={this.handleTitleChange} value={this.state.title} /><br></br>
         <label>Assign to Task:</label>
          <Dropdown options={taskList} onChange={this.handleTaskChange} value={this.state.taskID} /><br></br>
          <button onClick={this.handleCreateClick}>Create Subtask</button>
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