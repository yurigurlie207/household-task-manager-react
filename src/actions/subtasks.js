export function fetchSubtasks() {
    return (dispatch) => {
      dispatch({ type: 'LOADING SUBTASKS' });
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