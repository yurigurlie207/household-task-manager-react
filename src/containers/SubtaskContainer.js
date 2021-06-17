 import React, { Component } from 'react';
import Subtasks from '../components/subtasks/Subtasks'
import { connect } from 'react-redux'
import { fetchSubtasks } from '../actions/subtasks'
import { assignUsertasks } from '../actions/subtasks'
import { fetchUsers } from '../actions/subtasks'

class SubtaskContainer extends Component {

  handleOnClick() {
    this.props.fetchSubtasks();
    this.props.fetchUsers();
  }

  constructor(props) {
    super(props);

    this.state = {
        requesting: false
      }
  };

  render() {
    
    let status = ""
    if (this.state.requesting === true) { status = "requesting..."}
    else {status = "complete"}

    const initialSubtaskList = this.props.subtasks
    const [subtaskList, setSubtaskList] = React.useState(initialSubtaskList)
    

    return (
      <div class="subtask">
        <div class="refresh"> 
          <button onClick={(event) => this.handleOnClick(event)}> Refresh Unassigned Subtasks </button>   
          <p>Request Status: {status}</p>
       </div>
      
            <h1>Unassigned Subtasks</h1>
            <Subtasks
              subtaskList={subtaskList}
              setSubtaskList={setSubtaskList}
              users={this.props.users}
              assign={this.props.assignUsertasks}
            />
       

      </div>
    );
  }
  
}

const mapDispatchToProps = dispatch => ({
  fetchSubtasks: () => dispatch(fetchSubtasks()),
  fetchUsers: () => dispatch(fetchUsers()),
  assignUsertasks: (userIDs, subtaskID) => dispatch(assignUsertasks(userIDs,subtaskID)),
})

const mapStateToProps = state => {
  return {
    subtasks: state.subtasks,
    users: state.users,
    requesting: state.requesting
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SubtaskContainer)