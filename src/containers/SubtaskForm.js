import React from 'react';
import { connect } from 'react-redux'
import { fetchTasks } from '../actions/subtasks'

class SubtaskForm extends Component {
  state = {
   title: "",
    task: ""
  }
 
  render() {
    return (
      <form>
        <label>Subtask Title:</label>
        <input type="text" name="title" value={this.state.title} />
         <label>Assign to Task:</label>
        <input type="text" name="task" value={this.state.task} />
      </form>
    )
  }
}
 

const mapDispatchToProps = dispatch => ({
    fetchTasks: () => dispatch(fetchTasks()),
  })
  
const mapStateToProps = state => {
    return {
        subtasks: state.tasks,
        requesting: state.requesting
    }
}
  
  export default connect(mapStateToProps, mapDispatchToProps)(SubtaskForm)