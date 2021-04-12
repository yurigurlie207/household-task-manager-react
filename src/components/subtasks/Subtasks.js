import React, { Component } from 'react';

class Subtasks extends Component {

  render() {
 
    const { restaurants, deleteRestaurant } = this.props;
    const restaurantList = restaurants.map(restaurant => {
      return (
        <Subtask
            key={restaurant.id}
            restaurant={restaurant}
            deleteRestaurant={deleteRestaurant}
        />
      )
    });

    return(
      <ul>
        {}
      </ul>
    );
  }
};

export default Subtasks;