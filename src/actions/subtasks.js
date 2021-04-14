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