import React, { Component } from 'react';
import MainContainer from '../containers/MainContainer';
import { connect } from 'react-redux'
import { fetchUsertasks, fetchUsers, fetchSubtasks,assignUsertasks, deleteUsertasks } from '../actions/subtasks'

class Dashboard extends Component {

    componentDidMount() {
        this.props.fetchUsers();
        this.props.fetchUsertasks();
        this.props.fetchSubtasks();
    }
    
  
    handleOnClick = () => {
      this.props.history.replace(`/reload`);
      setTimeout(() => {
      this.props.history.replace(this.props.location.pathname);
    });

    }

    render() {
        return (
        <div>  
            <button onClick={this.handleOnClick}>Refresh with Latest Database Info</button>
        <MainContainer 
            deleteUsertasks={this.props.deleteUsertasks}
            assignUsertasks={this.props.assignUsertasks}
            />
        </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    fetchUsertasks: () => dispatch(fetchUsertasks()),
    fetchUsers: () => dispatch(fetchUsers()),
    fetchSubtasks: () => dispatch(fetchSubtasks()),
    assignUsertasks: (userIDs, subtaskID) => dispatch(assignUsertasks(userIDs,subtaskID)),
    deleteUsertasks: (usertaskID) => dispatch(deleteUsertasks(usertaskID))
  })
  


export default connect(null, mapDispatchToProps)(Dashboard)
