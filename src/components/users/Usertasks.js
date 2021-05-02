import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchUsers } from '../../actions/subtasks'
import { fetchUsertasks } from '../../actions/subtasks'


class Usertasks extends Component {

  handleDeleteClick(event) {
   this.props.delete(event.target.id);
   this.props.fetchUsers();
  //  this.props.fetchUsertasks();
  }

  constructor(props) {
    super(props);

    this.state = {
      users: this.props.users,
      usertasks: this.props.usertasks.data,
      requesting: false
      }
  };


  render() {
  
    let usertaskList = []

    if (this.props.usertasks.data) {
          const usertasks = this.props.usertasks.data || []
          const userID = this.props.user.id 
          const associatedTasks = usertasks.filter(usertask => usertask.relationships.user.data.id === userID);

          usertaskList = associatedTasks.map( usertask => {
            
            const subtask = this.props.usertasks.included.find(subtask => subtask.id === usertask.relationships.subtask.data.id)
            return (
            // <li>{usertask.id}, {usertask.relationships.user.data.id}, {usertask.relationships.subtask.data.id}</li>
            <li>{subtask.attributes.title} - {usertask.id}
            <button id={usertask.id} onClick={(event) => this.handleDeleteClick(event)}> X </button>
            </li>
            )
          })
      }

        return(
          <ul>
            {usertaskList}
          </ul>
        );
      
    };

  }

const mapDispatchToProps = dispatch => ({
  fetchUsers: () => dispatch(fetchUsers()),
  fetchUsertasks: () => dispatch(fetchUsertasks())
})

const mapStateToProps = state => {
  return {
    users: state.users,
    usertasks: state.usertasks,
    requesting: state.requesting
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Usertasks)

