export default function manageTasks(state = {
  subtasks: [], requesting: false 
  }, action) {
    switch (action.type) {
      case 'LOADING_SUBTASKS':
        return {
          ...state,
        requesting: true
        }
   
      case 'ADD_SUBTASKS':
        return console.log({
          ...state,
          subtasks: action.subtasks,
          requesting: false
        })
     
      default:
        return state;
  
    }
  };