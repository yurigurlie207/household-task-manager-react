import React, { Component } from 'react';

class Usertask extends Component {

  render () { 

    return (
      <ul>
          <li>{this.props.title}</li>
      </ul>
    );
  };

}

export default Usertask;