import React from 'react';
import MainContainer from '../containers/MainContainer';
import { connect } from 'react-redux'
import { fetchSubtasks, assignUsertasks, fetchUsers, fetchUsertasks, deleteUsertasks } from '../actions/subtasks'

class Dashboard extends Component {
    
    componentDidMount() {
        this.props.fetchSubtasks();
        this.props.fetchUsers();
        this.props.fetchUsertasks();
    }
    
    handleRefresh() {
        this.props.fetchSubtasks();
        this.props.fetchUsers();
        this.props.fetchUsertasks();
    }

    render() {
        <div>  
        <MainContainer 
            subtasks={this.props.subtasks}
            usertasks={this.props.usertasks}
            users={this.props.users}
            handleOnClick={this.handleRefresh}
            deleteUsertasks={this.props.deleteUsertasks}
            assignUsertasks={this.props.assignUsertasks}
            />
        </div>
    }
}

const mapDispatchToProps = dispatch => ({
    fetchSubtasks: () => dispatch(fetchSubtasks()),
    fetchUsers: () => dispatch(fetchUsers()),
    fetchUsertasks: () => dispatch(fetchUsertasks()),
    assignUsertasks: (userIDs, subtaskID) => dispatch(assignUsertasks(userIDs,subtaskID)),
    deleteUsertasks: (usertaskID) => dispatch(deleteUsertasks(usertaskID))
  })
  
  const mapStateToProps = state => {
    return {
      subtasks: state.subtasks,
      users: state.users,
      usertasks: state.usertasks,
      requesting: state.requesting
    }
  }


export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
