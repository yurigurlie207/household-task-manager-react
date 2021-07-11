import React, { Component } from 'react';
import { connect } from 'react-redux'
import {fetchUsertasks} from '../../actions/subtasks'



class Usertasks extends Component {

  componentDidMount() {
    this.props.fetchUsertasks();
  }

  handleDeleteClick(event) {
 
   event.target.parentElement.remove()
   this.props.delete(event.target.id);
 
  }

  constructor(props) {
    super(props);

    this.state = {
        usertasks: this.props.usertasks
      }
  };


  render() {

    let usertaskList = []
  
    if (this.state.usertasks.data) {
          const usertasks = this.state.usertasks.data
   
          const userID = this.props.user.id 
          const associatedTasks = usertasks.filter(usertask => usertask.relationships.user.data.id === userID);

          usertaskList = associatedTasks.map( usertask => {
            
            const subtask = this.state.usertasks.included.find(subtask => subtask.id === usertask.relationships.subtask.data.id)
            return (
            // <li>{usertask.id}, {usertask.relationships.user.data.id}, {usertask.relationships.subtask.data.id}</li>
            <li key={usertask.id}>{subtask.attributes.title} :::
            <button id={usertask.id} onClick={(event) => this.handleDeleteClick(event)}> Unassign </button>
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

  const mapStateToProps = state => {
    return {
      usertasks: state.usertasks
    }
  }

const mapDispatchToProps = dispatch => ({
  fetchUsertasks: () => dispatch(fetchUsertasks())
})

export default connect(mapStateToProps, mapDispatchToProps)(Usertasks)

