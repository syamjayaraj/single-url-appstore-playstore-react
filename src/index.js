import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './Home';
import Download from './Download';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route path="/" exact component={() => <Home />} />
        <Route path="/download" exact component={() => <Download />} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
