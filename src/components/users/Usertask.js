import React, { Component } from 'react';

class Usertask extends Component {

  handleUnassignClick = () => {
      this.props.remove(this.props.id)
  }

  render () { 

    return (
      <ul>
          <li>{this.props.title} ::: 
          <button id={this.props.id} onClick={this.handleUnassignClick}> Unassign </button></li>
      </ul>
    );
  };

}

export default Usertask;