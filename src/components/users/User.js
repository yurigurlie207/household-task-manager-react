import React, { Component } from 'react';
import Usertask from './Usertask';


class User extends Component {

  render () {
    let usertasks = {}

    if (this.props.usertasks){

       usertasks = this.props.usertasks.map( usertask => {
  
        return (
          <Usertask key={usertask.id} 
                    title={usertask.title} />
        )
      });
    }

    return (
      <ul>
        <li>{this.props.user.username} ::
          <div>{usertasks}</div>
        </li>
       
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



