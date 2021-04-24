import React, { Component } from 'react';

class Usertasks extends Component {

  render() {
 
    // const  subtasks = this.props.subtasks || []
    const  usertasks = this.props.usertasks || []
    const userID = this.props.user.id
    const associatedTasks = usertasks.filter(usertask => usertask.relationships.user.data.id === userID);
    const usertaskList = associatedTasks.map( usertask => {
 
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


// const { reviews, restaurantId, deleteReview } = this.props;
//     const associatedReviews = reviews.filter(review => review.restaurantId === restaurantId);
    
//     const reviewList = associatedReviews.map((review, index) => {
//       return <Review key={index} review={review} deleteReview={deleteReview} />
//     })

//     return (
//       <div>
//         <ul>
//           {reviewList}
//         </ul>
//       </div>
//     );
//   }