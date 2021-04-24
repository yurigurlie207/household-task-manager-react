import React, { Component } from 'react';

class Users extends Component {


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


  render() {
 
    const  users = this.props.users || []
    const userList = users.map( user => {


      return (
        <User key={user.id} user={user}/>
      )
    });

    return(
      <ul>
        {userList}
      </ul>
    );
  }
};

export default Users;

