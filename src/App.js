import React from 'react';
import './App.css';
import Form from './Components/Form';
import Orders from './Components/Orders';
import Edit from './Components/Edit';

import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Orders} />
        <Route path="/form" component={Form} />
        <Route path="/edit/:id" component={Edit} />
      </div>
    </Router>
  );
}

export default App;