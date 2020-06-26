import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import OtherPage from './OtherPage';
import Fib from './Fib';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to my Fib application</h1>
          <h2 className="App-title">Docker, node, redis, postgress, react</h2>
          <Link to="/">Home</Link>
          <Link to="/otherpage">Other Page</Link>
        </header>

        <div>
          <Route exact path="/" component={Fib} />
          <Route path="otherpage" component={OtherPage} />
        </div>
      </div>
    </Router>
  );
}

export default App;
