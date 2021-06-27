import React, { Component } from 'react';
import Subtasks from '../components/subtasks/Subtasks'
import Users from '../components/users/Users'

class MainContainer extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
            requesting: false,
            subtasks: this.props.subtasks,
            usertasks: this.props.usertasks,
            users: this.props.users
          }
      };
  
    handleRemove = (id) => {
        this.props.deleteUsertasks();
        const newSubtaskList = this.state.subtasks.filter((subtask) => subtask.id !== id); 
        this.setState({subtasks: newSubtaskList})
    }

 
    render() {
    
        let status = ""
        if (this.state.requesting === true) { status = "requesting..."}
        else {status = "complete"}
    
        return (
            <div className="main">
                <div className="subtask">
                    <div className="refresh"> 
                    <button onClick={(event) => this.handleOnClick(event)}> Refresh </button>   
                    <p>Request Status: {status}</p>
                </div>
                
                        <h1>Unassigned Subtasks</h1>
                        <Subtasks
                        subtasks={this.state.subtasks}
                        users={this.state.users}
                        assign={this.props.assignUsertasks}
                        remove={this.handleRemove}
                        />
                </div>
                <div className="users">
                    <div className="refresh"> 
                        <button onClick={(event) => this.handleOnClick(event)}> Refresh </button>   
                        <p>Request Status: {status}</p>
                    </div>
            
        
                    <h1>User Assignments</h1>
                        <Users
                        users={this.state.users}
                        usertasks={this.state.usertasks}
                        delete={this.props.deleteUsertasks}
                        />
                    </div>  
         </div>
        );
      }

}

  
export default MainContainer

// https://reactjs.org/docs/react-component.html