import './App.css';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import SubtaskContainer from './containers/SubtaskContainer';
import UserContainer from './containers/UserContainer';

function App() {
  return (
    <Router>
    <div>
      <NavBar />
      <Route path="/" component={Home} />
      <Route path="/subtasks" component={SubtaskContainer} />
      <Route path="/dashboard" component={UserContainer} />
    </div>
  </Router>
  );
}

export default App;


