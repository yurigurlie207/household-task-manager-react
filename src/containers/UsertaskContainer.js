import React, { Component } from 'react';
import Usertasks from '../components/users/Usertasks'
import { connect } from 'react-redux'
import { fetchUsertasks } from '../actions/subtasks'

class UsertaskContainer extends Component {

  handleOnClick() {
    this.props.fetchUsertasks()
  }

  render() {
    return (
      <div>
        <button onClick={(event) => this.handleOnClick(event)}> Fetch Usertasks </button>   
        <Usertasks
          usertasks={this.props.usertasks}
          subtasks={this.props.subtasks}
        />
      </div>
    );
  }
}


const mapDispatchToProps = dispatch => ({
  fetchUsertasks: () => dispatch(fetchUsertasks())
})

const mapStateToProps = state => {
  return {
    usertasks: state.usertasks,
    requesting: state.requesting
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(UsertaskContainer)