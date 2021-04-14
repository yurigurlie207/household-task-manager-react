export default function manageTasks(state = {
  subtasks: [], users: [], requesting: false 
  }, action) {
    switch (action.type) {
      case 'LOADING_SUBTASKS':
        return {
          ...state,
        requesting: true
        }
   
      case 'ADD_SUBTASKS':
        return {
          ...state,
          subtasks: action.subtasks,
          requesting: false
        }
        case 'LOADING_USERS':
          return {
            ...state,
          requesting: true
          }
     
        case 'ADD_USERS':
          return {
            ...state,
            users: action.users,
            requesting: false
          }
     
      default:
        return state;
  
    }
  };