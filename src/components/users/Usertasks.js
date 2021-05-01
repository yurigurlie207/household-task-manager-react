import React, { Component } from 'react';
// import { connect } from 'react-redux'


class Usertasks extends Component {

  handleDeleteClick(event) {
   this.props.delete(event.target.id)
  }

  constructor(props) {
    super(props);

    this.state = {
      requesting: false
      }
  };


  render() {
 
    const usertasks = this.props.usertasks.data || []
    const userID = this.props.user.id 
    const associatedTasks = usertasks.filter(usertask => usertask.relationships.user.data.id === userID);

    const usertaskList = associatedTasks.map( usertask => {
      
      const subtask = this.props.usertasks.included.find(subtask => subtask.id === usertask.relationships.subtask.data.id)
      return (
      // <li>{usertask.id}, {usertask.relationships.user.data.id}, {usertask.relationships.subtask.data.id}</li>
      <li>{subtask.attributes.title} - {usertask.id}
       <button id={usertask.id} onClick={(event) => this.handleDeleteClick(event)}> X </button>
      </li>
      )
    });

    return(
      <ul>
        {usertaskList}
      </ul>
    );
  }
};

export default Usertasks



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