export default function manageTasks(state = {
  subtasks: [], requesting: false 
  }, action) {
    switch (action.type) {

      case 'START_ADDING_SUBTASKS_REQUEST':
        return {
          ...state,
          subtasks: [...state.subtasks],
          requesting: true
        }
   
      case 'ADD_SUBTASKS':
        return {
          ...state,
          subtasks: action.subtasks,
          requesting: false
        }
     
      default:
        return state;
  
    }
  };