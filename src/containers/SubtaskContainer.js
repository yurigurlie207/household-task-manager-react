import React, { Component } from 'react';
import SubtaskForm from '../components/subtasks/SubtaskForm'
import Subtasks from '../components/subtasks/Subtasks'
import { connect } from 'react-redux'

class SubtaskContainer extends Component {
  render() {
    return (
      <div>
        <SubtaskForm addSubtask={this.props.addSubtask}/>
        <Subtasks
          subtasks={this.props.subtasks}
          deleteSubtask={this.props.deleteSubtask}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({ subtasks: state.subtasks })

const mapDispatchToProps = dispatch => ({
  addSubtask: text => dispatch({type: 'ADD_SUBTASK', text}),
  deleteSubtask: id => dispatch({type: 'DELETE_SUBTASK', id})
})

export default connect(mapStateToProps, mapDispatchToProps)(SubtaskContainer)