import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

function App() {
  return (
    <Router>
    <div>
      <NavBar />
      <Route path="/" component={Home} />
      <Route path="/subtasks" component={SubtasksContainer} />
      <Route path="/dashboard" component={UsertaskContainer} />
    </div>
  </Router>
  );
}

export default App;
