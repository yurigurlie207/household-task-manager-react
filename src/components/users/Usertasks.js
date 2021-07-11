import React, { Component } from 'react';
import { connect } from 'react-redux'


class Usertasks extends Component {

  handleDeleteClick(event) {
 
   event.target.parentElement.remove()
   this.props.delete(event.target.id);
 
  }

  constructor(props) {
    super(props);

    this.state = {
        requesting: false,
        usertasks: this.props.usertasks
      }
  };


  render() {
    console.log("HMM")
    console.log(this.props.usertasks)
    console.log(this.state.usertasks)
    let usertaskList = []
    // console.log(this.state.usertasks)
    if (this.state.usertasks.data) {
          const usertasks = this.state.usertasks.data
          // console.log(usertasks)
          const userID = this.props.user.id 
          const associatedTasks = usertasks.filter(usertask => usertask.relationships.user.data.id === userID);

          usertaskList = associatedTasks.map( usertask => {
            
            const subtask = this.state.usertasks.included.find(subtask => subtask.id === usertask.relationships.subtask.data.id)
            return (
            // <li>{usertask.id}, {usertask.relationships.user.data.id}, {usertask.relationships.subtask.data.id}</li>
            <li>{subtask.attributes.title} :::
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

export default connect(mapStateToProps)(Usertasks)

