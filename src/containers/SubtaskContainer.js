import React, { Component } from 'react';
import Subtasks from '../components/subtasks/Subtasks'
import { connect } from 'react-redux'
import { fetchSubtasks } from '../actions/subtasks'

class SubtaskContainer extends Component {

  handleOnClick() {
    this.props.fetchSubtasks()
  }

  render() {
    return (
      <div>
        <button onClick={(event) => this.handleOnClick(event)}> Fetch Subtasks </button>   
        <Subtasks
          subtasks={this.props.subtasks}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({ subtasks: state.subtasks })

const mapDispatchToProps = dispatch => ({
  fetchSubtasks: () => dispatch(fetchSubtasks())
  // addSubtask: text => dispatch({type: 'ADD_SUBTASK', text}),
  // deleteSubtask: id => dispatch({type: 'DELETE_SUBTASK', id})
})

export default connect(mapStateToProps, mapDispatchToProps)(SubtaskContainer)