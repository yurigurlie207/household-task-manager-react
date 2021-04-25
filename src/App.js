import './App.css';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import TasksContainer from './containers/TaskContainer';
import SubtaskContainer from './containers/SubtaskContainer';
import Dashboard from './containers/Dashboard';
import UserContainer from './containers/UserContainer';

function App() {
  return (
    <Router>
    <div>
      <NavBar />
      <Route path="/" component={Home} />
      <Route path="/tasks" component={TasksContainer} />
      <Route path="/subtasks" component={SubtaskContainer} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/users" component={UserContainer} />
    </div>
  </Router>
  );
}

export default App;


