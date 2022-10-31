import logo from './logo.svg';
import './App.css';
import { HashRouter as Router, Link, Routes, Route } from 'react-router-dom';

import About from './About'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<><About /></>}></Route>
        <Route path="/about" element={<><About /></>}></Route>
        <Route path="/works"></Route>
        <Route path="/keywords"></Route>
      </Routes>
    </Router>
  );
}

export default App;
