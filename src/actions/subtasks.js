export function fetchSubtasks() {
    return (dispatch) => {
      dispatch({ type: 'START_ADDING_SUBTASKS_REQUEST' });
      fetch('http://api.open-notify.org/astros.json')
        .then(response => response.json())
        .then(subtasks => dispatch({ type: 'ADD_SUBTASKS', subtasks }));
    };
  }