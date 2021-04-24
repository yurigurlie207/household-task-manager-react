import React, { Component } from 'react';
import UsertaskContainer from '../../containers/UsertaskContainer'

class User extends Component {

  handleOnClick() {
    // this.props.deleteRestaurant(this.props.restaurant.id);
  }

  render() {
    const { user } = this.props;

    return (
      <div>
        <li>
            
          {user.attributes.username}
          <button onClick={() => this.handleOnClick()}> X </button>
          <UsertaskContainer user={user}/>
        </li>
      </div>
    );
  }
};

export default User;