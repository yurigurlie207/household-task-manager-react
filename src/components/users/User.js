import React, { Component } from 'react';
import { connect } from 'react-redux'

class User extends Component {

  constructor(props) {
    super(props);


    this.state = {
        usertasks: this.props.usertasks
      }



  };
  
  removeUsertask = (event) => {
    // debugger
    this.props.delete(event.target.id); //persists to database

    this.setState({
      usertasks: this.state.usertasks.data.filter(usertask => usertask.id !== event.target.id)
    })
  }


  render() {
    //identify user
    let user = {}

    if (this.props.user){
        user = this.props.user;
    }
    
    //identify usertasks
    let usertaskList = []
    
    if (this.state.usertasks.data) {
          const usertasks = this.state.usertasks.data
   
          const userID = user.id 
          const associatedTasks = usertasks.filter(usertask => usertask.relationships.user.data.id === userID);

          usertaskList = associatedTasks.map( usertask => {
            const subtask = this.state.usertasks.included.find(subtask => subtask.id === usertask.relationships.subtask.data.id)
              return (
                <li key={usertask.id}>{subtask.attributes.title} :::
                <button id={usertask.id} onClick={this.removeUsertask}> Unassign </button>
                </li>
              )
          });
      }//end of if
 
    return (
      <div>
        <li>
          {user.attributes.username}
          <ul>
            {usertaskList}
          </ul>
        </li>
      </div>
    );
  }
};

const mapStateToProps = state => {
  return {
    usertasks: state.usertasks
  }
}

export default connect(mapStateToProps)(User)

