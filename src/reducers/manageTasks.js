export default function manageTasks(state = {
  subtasks: [], tasks: [], users: [], usertasks: [], requesting: false 
  }, action) {
    switch (action.type) {

      case 'LOADING_SUBTASKS':
        return {
          ...state,
          // subtasks: [...state.subtasks],
        requesting: true
        }
   
      case 'ADD_SUBTASKS':
        return {
          ...state,
          subtasks: action.subtasks,
          requesting: false
        }

        case 'LOADING_TASKS':
          return {
            ...state,
          requesting: true
          }
     
        case 'ADD_TASKS':
          return {
            ...state,
            tasks: action.tasks,
            requesting: false
          }

        case 'LOADING_USERS':
          return {
            ...state,
            // users: [...state.users],
          requesting: true
          }
     
        case 'ADD_USERS':
          return {
            ...state,
            users: action.users,
            requesting: false
          }

          case 'LOADING_USERTASKS':
            return {
              ...state,
              // usertasks: [...state.usertasks],
            requesting: true
            }
       
          case 'ADD_USERTASKS':
            return {
              ...state,
              usertasks: action.usertasks,
              requesting: false
            }

          case 'DELETING_USERTASK':
          return {
            ...state,
            requesting: true
          }
      
          case 'DELETE_USERTASK':
        
          return { 
              ...state,
              usertasks: state.usertasks.data.filter(usertask => usertask.id !== action.usertaskID),
              requesting: false
            }
         
        
      default:
        return state;
  
    }
  };