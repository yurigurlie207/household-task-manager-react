import './App.css';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import TasksContainer from './containers/TaskContainer';
import SubtasksContainer from './containers/SubtaskContainer';
import UsertaskContainer from './containers/UsertaskContainer';

function App() {
  return (
    <Router>
    <div>
      <NavBar />
      <Route path="/" component={Home} />
      <Route path="/tasks" component={TasksContainer} />
      <Route path="/subtasks" component={SubtasksContainer} />
      <Route path="/dashboard" component={UsertaskContainer} />
    </div>
  </Router>
  );
}

export default App;


