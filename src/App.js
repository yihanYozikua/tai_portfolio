import logo from './logo.svg';
import './App.css';
import { HashRouter as Router, Link, Routes, Route } from 'react-router-dom';



function App() {
  return (
    <Router>
      <Route path="/" ></Route>
      <Route path="/about"></Route>
      <Route path="/works"></Route>
      <Route path="/keywords"></Route>
    </Router>
  );
}

export default App;
