import React, { Component } from 'react';

class Usertasks extends Component {

  render() {
 
    const  usertasks = this.props.usertasks || []
    const usertaskList = usertasks.map( usertask => {
      return (
      <li>{usertask.id}, {usertask.relationships.user.data.id}, {usertask.relationships.subtask.data.id}</li>
      )
    });

    return(
      <ul>
        {usertaskList}
      </ul>
    );
  }
};

export default Usertasks;