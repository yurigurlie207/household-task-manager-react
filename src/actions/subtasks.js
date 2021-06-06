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
    // console.log(usertaskID)
    let delete_url = 'http://127.0.0.1:3000/user_tasks/' + usertaskID;

    return (dispatch) => {
    dispatch({ type: 'DELETING_USERTASK' });
    fetch(delete_url, {
              method: "DELETE",
              headers: {
                  'Content-Type': 'application/json',
                  'Accept': 'application/json'
              }
          }).then( ()=> {   return dispatch({ type: 'ADD_USERTASKS', usertaskID: usertaskID })}
          )
          .catch(function(error) {
          console.log(error)});

      };
  }

  export function assignUsertasks(userIDs, subtaskID) {
    
    return (dispatch) => {
    dispatch({ type: 'ASSIGN_USERTASK' });
    fetch('http://127.0.0.1:3000/user_tasks', {
              method: "POST",
              headers: {
                  'Content-Type': 'application/json',
                  'Accept': 'application/json'
              },
              body: JSON.stringify({
                "user_ids": userIDs,
                "subtask_id": subtaskID
                })
          })
          .catch(function(error) {
          console.log(error)});

      };
}


export function fetchTasks() {
  return (dispatch) => {
    dispatch({ type: 'LOADING_TASKS' });
    fetch('http://127.0.0.1:3000/tasks')
      .then(response => response.json())
      .then(function(results) {
        let tasks = results.data
        return dispatch({ type: 'ADD_TASKS', tasks })
      }
        ).catch(function(error) {
          console.log(error)});
  };
}

export function createSubtasks(title, taskID) {
    
  return (dispatch) => {
  dispatch({ type: 'CREATE_SUBTASK' });
  fetch('http://127.0.0.1:3000/subtasks', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
              "title": title,
              "task_id": taskID
              })
        })
        .catch(function(error) {
        console.log(error)});

    };
}
