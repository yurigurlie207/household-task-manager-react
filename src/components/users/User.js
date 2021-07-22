import React, { Component } from 'react';
import Usertasks from './Usertasks';


class User extends Component {

  render () {
    return (
      <ul>
        <li>{this.props.user.username}</li>
        <Usertasks />
      </ul>
    );
  };

}

export default User;


  // render() {
    //identify user
    // let user = {}
    
    //identify usertasks
    // let usertaskList = []
    
    // if (this.state.usertasks.data) {
    //       const usertasks = this.state.usertasks.data
   
    //       const userID = user.id 
    //       const associatedTasks = usertasks.filter(usertask => usertask.relationships.user.data.id === userID);

    //       usertaskList = associatedTasks.map( usertask => {
    //         const subtask = this.state.usertasks.included.find(subtask => subtask.id === usertask.relationships.subtask.data.id)
    //           return (
    //             <li key={usertask.id}>{subtask.attributes.title} :::
    //             <button id={usertask.id} onClick={this.removeUsertask}> Unassign </button>
    //             </li>
    //           )
    //       });
    //   }//end of if
 
//     return (
//       <div>
//         <li>
//           {/* {user.attributes.username} */}
//           <ul>
//             {/* {usertaskList} */}
//           </ul>
//         </li>
//       </div>
//     );
//   }
// };



