export function fetchSubtasks() {
    return (dispatch) => {
      dispatch({ type: 'LOADING_SUBTASKS' });
      fetch('http://127.0.0.1:3000/subtasks')
        .then(response => response.json())
        .then(function(results) {
          let subtasks = results.data
          return dispatch({ type: 'ADD_SUBTASKS', subtasks })
        }
          ).catch(function(error) {
            console.log(error)});
    };
  }

  export function fetchUsers() {
    return (dispatch) => {
      dispatch({ type: 'LOADING_USERS' });
      fetch('http://127.0.0.1:3000/users')
        .then(response => response.json())
        .then(function(results) {
          let users = results.data
          return dispatch({ type: 'ADD_USERS', users })
        }
          ).catch(function(error) {
            console.log(error)});
    };
  }

  export function fetchUsertasks() {
    return (dispatch) => {
      dispatch({ type: 'LOADING_USERTASKS' });
      fetch('http://127.0.0.1:3000/user_tasks')
        .then(response => response.json())
        .then(function(results) {
          let usertasks = results
          return dispatch({ type: 'ADD_USERTASKS', usertasks })
        }
          ).catch(function(error) {
            console.log(error)});
    };
  }


  export function deleteUsertasks(usertaskID) {
    console.log(usertaskID)
    // usertaskID = event.target.index
    return (dispatch) => {
      dispatch({ type: 'DELETING_USERTASKS' });
      fetch('http://127.0.0.1:3000/${usertaskID}',
            {
                method: "DELETE",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            })
        // .then(function() {
        //   return dispatch({ type: 'DELETE_USERTASKS', usertaskID })
        // }
        //   ).catch(function(error) {
        //     console.log(error)});
    };
  }

//   function deleteUserTask(event) {
//     let usertaskId = event.target.dataset.usertaskId;
//     // console.log(usertaskId);

//     fetch(USERTASKS_URL +`/${usertaskId}`, {
//         method: "DELETE",
//         headers: {
//             'Content-Type': 'application/json',
//             'Accept': 'application/json'
//         }
//     })
//     .then( function() {
//         event.target.parentElement.remove();
//         loadAllUsers();
//         loadUnassignedSubtasks();
//         }
//     )
//     .catch(err => console.log(err))

// }