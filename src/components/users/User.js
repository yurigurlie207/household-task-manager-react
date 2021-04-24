import React, { Component } from 'react';
import UsertaskContainer from '../../containers/UsertaskContainer'

class User extends Component {

 

  render() {
    const { user } = this.props;

    return (
      <div>
        <li>
          {user.attributes.username}
          <UsertaskContainer user={user}/>
        </li>
      </div>
    );
  }
};

export default User;