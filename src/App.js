import './App.css';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import SubtaskForm from './containers/SubtaskForm';

function App() {
  return (
    <Router>
    <div>
      <NavBar />
      <Route path="/" component={Home} />
      <Route path="/new" component={SubtaskForm} />
      <Route path="/dashboard" component={Dashboard} />
    </div>
  </Router>
  );
}

export default App;


