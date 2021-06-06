import React from 'react';
import { connect } from 'react-redux'
import { fetchTasks } from '../actions/subtasks'

class SubtaskForm extends Component {

  handleOnLoad() {
    this.props.fetchTasks();
  }

  handleCreateClick() {
    this.props.createSubtasks();
  }

  state = {
   title: "",
    task: ""
  }
 
  render() {
    return (
      <form onClick={(event) => this.handleOnLoad(event)}>
        <label>Subtask Title:</label>
        <input type="text" name="title" value={this.state.title} />
         <label>Assign to Task:</label>
         <select multiple>
            {taskList}
          </select>
          <button class="assign" onClick={(event) => this.handleCreateClick(event)}>Create Subtask</button>
      </form>
    )
  }
}
 

const mapDispatchToProps = dispatch => ({
    fetchTasks: () => dispatch(fetchTasks()),
    createSubtasks: (title, taskID) => dispatch(createSubtasks(title,taskID)),
  })
  
const mapStateToProps = state => {
    return {
        tasks: state.tasks,
        requesting: state.requesting
    }
}
  

export default connect(mapStateToProps, mapDispatchToProps)(SubtaskForm)