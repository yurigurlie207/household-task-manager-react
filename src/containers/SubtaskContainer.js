import React, { Component } from 'react';
import Subtasks from '../components/subtasks/Subtasks'
import { connect } from 'react-redux'
import { fetchSubtasks } from '../actions/subtasks'

class SubtaskContainer extends Component {

  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     subtasks: []
  //     }
  // };

  

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


const mapDispatchToProps = dispatch => ({
  fetchSubtasks: () => dispatch(fetchSubtasks())
  // addSubtask: text => dispatch({type: 'ADD_SUBTASK', text}),
  // deleteSubtask: id => dispatch({type: 'DELETE_SUBTASK', id})
})

const mapStateToProps = state => {
  return {
    subtasks: state.subtasks,
    requesting: state.requesting
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(SubtaskContainer)