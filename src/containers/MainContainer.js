import React, { Component } from 'react';
import Subtasks from '../components/subtasks/Subtasks'
import Users from '../components/users/Users'

class MainContainer extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
            subtasks: this.props.subtasks,
            users: this.props.users
          }
      };
  
    handleRemove = (id) => {
        this.props.deleteUsertasks();
        // const newSubtaskList = this.state.subtasks.filter((subtask) => subtask.id !== id); 
        // this.setState({subtasks: newSubtaskList})
    }

 
    render() {
    
    
        return (
            <div className="main">
                <div className="subtask">
                  
                        <h1>Unassigned Subtasks</h1>
                        <Subtasks
                        assign={this.props.assignUsertasks}
                        remove={this.handleRemove}
                        />
                </div>
                <div className="users">
                  
        
                    <h1>User Assignments</h1>
                        <Users
                        users={this.state.users}
                        delete={this.props.deleteUsertasks}
                        />
                    </div>  
         </div>
        );
      }

}

  
export default MainContainer

// https://reactjs.org/docs/react-component.html